import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/utils/authOptions';

// Function to get the currently authenticated user from the session
export const getSessionUser = async () => {
  try {
    // Attempt to retrieve the current server session using the NextAuth options
    const session = await getServerSession(authOptions);

    // If there is no session or no user associated with the session, return null
    if (!session || !session.user) {
      return null;
    }

    // Return an object containing the user details and the user's ID
    return {
      user: session.user, // The user object from the session
      userId: session.user.id, // The user's ID, added in the session callback
    };
  } catch (error) {
    // Log any errors that occur during the process
    console.error(error);

    // Return null if an error occurs
    return null;
  }
};

