// import connectDB from '@/config/database';
// import Property from '@/models/Property';

// // GET /api/properties/featured
// export const GET = async (request) => {
//   try {
//     // await connectDB();

//     const properties = await Property.find({
//       is_featured: true,
//     });

//     return new Response(JSON.stringify(properties), {
//       status: 200,
//     });
//   } catch (error) {
//     console.log(error);
//     return new Response('Something Went Wrong', { status: 500 });
//   }
// };

import connectDB from '@/config/database';
import Property from '@/models/Property';

// GET /api/properties/featured
export const GET = async (request) => {
  try {
    console.log('Starting the database connection...');
    await connectDB(); // Ensure this connects to your MongoDB correctly

    console.log('Fetching featured properties...');
    const properties = await Property.find({ is_featured: true }).exec();

    console.log(`Fetched ${properties.length} featured properties.`);
    return new Response(JSON.stringify(properties), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching featured properties:', error);
    return new Response('Something Went Wrong', { status: 500 });
  }
};

