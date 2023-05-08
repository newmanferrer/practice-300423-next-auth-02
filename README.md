# PRACTICE NEXT AUTH JS #2 - WITH PRISMA AND POSTGRESQL

## APP IMAGES

### Home Page: app\page.tsx (Server Component)

![home page image](public/images/readme/app-home-01.jpg 'Home Page #1')

![home page image](public/images/readme/app-home-02.jpg 'Home Page #2')

### Dashboard Page: app\dashboard\page.tsx (Server Component)

![dashboard page image](public/images/readme/app-dashboard.jpg 'Dashboard Page')

### Dashboard 2 Page: app\dashboard2\page.tsx (Server Component)

![dashboard 2 page image](public/images/readme/app-dashboard2.jpg 'Dashboard 2 Page')

### Register Page: app\register\page.tsx (Server Component)

![dashboard 3 page image](public/images/readme/app-register.jpg 'Register Page')

### Sign in Page: app\signin\page.tsx (Server Component)

![Sign in Page](public/images/readme/app-signin.jpg 'Sign in Page')

---

## Project Description

Initial practice to gain skills and learn how to protect our applications using the tools that NextAuth offers us.

In this practice we will use Next.js in its version 13, prism as ORM, PostgreSQL as database and of course NextAuth.js with "Credential Provider" to protect our application and its routes.

---

## Used technology

- Html 5
- CSS Module
- SASS (SCSS) version 1.62.0
- JavaScript
- TypeScript version 5.0.4
- React version 18.2.0
- React Dom version 18.2.0
- Nextjs version 13.2.4
- NextAuthJs version: 0.0.0-pr.6777.c5550344
- Prisma version 4.13.0
- PNPM version 8.3.1
- PostgreSQL version 15

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![HTML 5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![PNPM](https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)
![Debian](https://img.shields.io/badge/Debian-D70A53?style=for-the-badge&logo=debian&logoColor=white)

![Your Repository's Stats](https://github-readme-stats.vercel.app/api/top-langs/?username=newmanferrer&theme=blue-green)

---

## Resources and documentation used

- NextAuth.js: https://next-auth.js.org/
- Nextjs V13: https://beta.nextjs.org/docs
- Nextjs V13.2: https://nextjs.org/blog
- Prisma ORM: https://www.prisma.io/
- PostgreSQL: https://www.postgresql.org/
- Sass: https://sass-lang.com/

---

## Developers: Requirements

- Web Browser
- Code editor
- Nodejs: https://nodejs.org/en/
- PostgreSQL

---

## Developers: Installation

1. Clone the repository: https://github.com/newmanferrer/practice-300423-next-auth-02.git
2. Another option is to download the repository using ZIP format.
3. Install the dependencies using the command "pnpm install", from the terminal console.
4. From the terminal console, execute the “pnpm dev” command, to run the development server.

---

## Best practice for instantiating PrismaClient with Next.js

### in the root of the project path: lib\prisma\db\client.ts

```js
// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
//
// Learn more:
// https://pris.ly/d/help/next-js-best-practices

import { PrismaClient } from '@prisma/client'

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
```

### In path: app\page.tsx

```js
import { prisma } from '@/lib/prisma/db/client'

export default async function HomePage() {
  const user = await prisma.user.findUnique({
    where: {
      email: 'newmanferrer@test.com'
    }
  })

  return (
    <main>
      <h2>Hello, {user ? user.first_name : 'user'}</h2>
    </main>
  )
}
```

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[http://localhost:3000/api/hello](http://localhost:3000/api/hello) is an endpoint that uses [Route Handlers](https://beta.nextjs.org/docs/routing/route-handlers). This endpoint can be edited in `app/api/hello/route.ts`.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

## Author: Newman Ferrer

newmanferrer@gmail.com

🌞 Maracaibo - Venezuela 🌞

Practice date: 30/04/2023

Application review date: 08/05/2023
