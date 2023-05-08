import { prisma } from '../lib/prisma/db/client'
import { hash } from 'bcrypt'

async function main() {
  const password = await hash('test', 12)

  await prisma.user.upsert({
    where: { email: 'newman@test.com' },
    update: {},
    create: {
      name: 'newman',
      image: '/images/users/user-man-02.png',
      email: 'newman@test.com',
      password
    }
  })

  await prisma.user.upsert({
    where: { email: 'amanda@test.com' },
    update: {},
    create: {
      name: 'amanda',
      image: '/images/users/user-women-02.png',
      email: 'amanda@test.com',
      password
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
