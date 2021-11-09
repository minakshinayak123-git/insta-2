import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  //   theme: {
  //     logo: 'https://res.cloudinary.com/minakshi-nayak/image/upload/v1635773520/samples/instagram/Instagram_icon.png_n5qgyj.webp',
  //     brandColor: '#F13287',
  //     colorScheme: 'auto',
  //   },
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async session({ session, user, token }) {
      session.user.username = session.user.name
        .split(' ')
        .join('')
        .toLocaleLowerCase()

      session.user.uid = token.sub
      return session
    },
  },
})
