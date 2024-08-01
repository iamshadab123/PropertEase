// import connectDB from '@/config/database';
// import Property from '@/models/Property';

// // GET /api/properties/search
// export const GET = async (request) => {
//   try {
//     await connectDB();

//     const { searchParams } = new URL(request.url);
//     const location = searchParams.get('location');
//     const propertyType = searchParams.get('propertyType');

//     const locationPattern = new RegExp(location, 'i');

//     // Match location pattern against database fields
//     let query = {
//       $or: [
//         { name: locationPattern },
//         { description: locationPattern },
//         { 'location.street': locationPattern },
//         { 'location.city': locationPattern },
//         { 'location.state': locationPattern },
//         { 'location.zipcode': locationPattern },
//         // { 'location.latitude': locationPattern },
//         // { 'location.longitude': locationPattern },
//       ],
//     };

//     // Only check for property if its not 'All'
//     if (propertyType && propertyType !== 'All') {
//       const typePattern = new RegExp(propertyType, 'i');
//       query.type = typePattern;
//     }

//     const properties = await Property.find(query);

//     return new Response(JSON.stringify(properties), {
//       status: 200,
//     });
//   } catch (error) {
//     console.log(error);
//     return new Response('Something went wrong', { status: 500 });
//   }
// };

import connectDB from '@/config/database';
import Property from '@/models/Property';

// GET /api/properties/search
export const GET = async (request) => {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const location = searchParams.get('location') || '';
    const propertyType = searchParams.get('propertyType') || '';

    const locationPattern = new RegExp(location, 'i');

    // Construct query object
    let query = {
      $or: [
        { name: locationPattern },
        { description: locationPattern },
        { 'location.street': locationPattern },
        { 'location.city': locationPattern },
        { 'location.state': locationPattern },
        { 'location.zipcode': locationPattern },
        // Add latitude and longitude if needed
      ],
    };

    // Filter by property type if it's specified and not 'All'
    if (propertyType && propertyType !== 'All') {
      const typePattern = new RegExp(propertyType, 'i');
      query.type = typePattern;
    }

    // Fetch properties from the database
    const properties = await Property.find(query);

    return new Response(JSON.stringify(properties), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching properties:', error);
    return new Response('Something went wrong', { status: 500 });
  }
};
