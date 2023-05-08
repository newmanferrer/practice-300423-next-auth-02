import NextAuth, { type NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { prisma } from '@/lib/prisma/db/client'
import { compare } from 'bcrypt'

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/signin'
  },
  providers: [
    CredentialsProvider({
      name: `"credentials provider"`,
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'john.doe@example.com' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        //* Handle Auth!
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        })

        if (!user) {
          return null
        }

        const isPasswordValid = await compare(credentials.password, user.password)

        if (!isPasswordValid) {
          return null
        }

        return {
          id: user.id,
          image: user.image,
          name: user.name,
          email: user.email,
          anything: 'anything'
        }
      }
    })
  ],
  callbacks: {
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          anything: token.anything
        }
      }
    },
    jwt: ({ token, user }) => {
      //* only if the user exists, that is, the first time you log in.
      //* The callback "jwt", runs before callback "session".
      if (user) {
        const u = user as unknown as any
        return {
          ...token,
          id: u.id,
          anything: u.anything
        }
      }
      return token
    }
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
