import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import {firebaseAdapter} from '@next-auth/firebase-adapter'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    
  ],
  adapter: firebaseAdapter(db),
})