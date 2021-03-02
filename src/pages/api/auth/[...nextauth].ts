import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      login: process.env.USER_LOGIN,
    }),
    // ...add more providers here
  ],
  debug: process.env.NODE_ENV === 'development',
  secret: process.env.AUTH_SECRET,
  jwt: {
    secret: process.env.JWT_SECRET,
  },

  // A database is optional, but required to persist accounts in a database
  // database: process.env.DATABASE_URL,
}

export default (req: NextApiRequest, res: NextApiResponse):Promise<void> => 
  NextAuth(req, res, options);