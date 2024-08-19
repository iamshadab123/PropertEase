import connectDB from '@/config/database';
import User from '@/models/User';
import GoogleProvider from 'next-auth/providers/google';

// Configuration options for NextAuth
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID, // Google Client ID from environment variables
      clientSecret: process.env.GOOGLE_CLIENT_SECRET, // Google Client Secret from environment variables
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline', 
          response_type: 'code', // OAuth 2.0 response type
        },
      },
    }),
  ],
  callbacks: {
    // Callback invoked on successful sign-in
    async signIn({ profile }) {
      // 1. Connect to the database
      await connectDB();
      
      // 2. Check if a user with the given email already exists in the database
      const userExists = await User.findOne({ email: profile.email });
      
      // 3. If the user does not exist, create a new user record in the database
      if (!userExists) {
        // Truncate the user's name if it exceeds 20 characters
        const username = profile.name.slice(0, 20);

        // Create a new user document in MongoDB
        await User.create({
          email: profile.email,
          username, // Truncated username
          image: profile.picture, // Profile picture URL from Google
        });
      }
      
      // 4. Return true to proceed with the sign-in process
      return true;
    },
    
    // Callback to modify the session object
    async session({ session }) {
      // 1. Retrieve the user record from the database using the session email
      const user = await User.findOne({ email: session.user.email });
      
      // 2. Assign the user's MongoDB ID to the session object
      session.user.id = user._id.toString();
      
      // 3. Return the modified session object
      return session;
    },
  },
};

