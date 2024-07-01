// 'use client';
// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useSession } from 'next-auth/react';
// import profileDefault from '@/assets/images/profile.png';
// import Spinner from '@/components/Spinner';
// import { toast } from 'react-toastify';

// const ProfilePage = () => {
//   const { data: session } = useSession();
//   const profileImage = session?.user?.image;
//   const profileName = session?.user?.name;
//   const profileEmail = session?.user?.email;

//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUserProperties = async (userId) => {
//       if (!userId) {
//         return;
//       }

//       try {
//         const res = await fetch(`/api/properties/user/${userId}`);

//         if (res.status === 200) {
//           const data = await res.json();
//           setProperties(data);
//         }
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     // Fetch user properties when session is available
//     if (session?.user?.id) {
//       fetchUserProperties(session.user.id);
//     }
//   }, [session]);

//   const handleDeleteProperty = async (propertyId) => {
//     const confirmed = window.confirm(
//       'Are you sure you want to delete this property?'
//     );

//     if (!confirmed) return;

//     try {
//       const res = await fetch(`/api/properties/${propertyId}`, {
//         method: 'DELETE',
//       });

//       if (res.status === 200) {
//         // Remove the property from state
//         const updatedProperties = properties.filter(
//           (property) => property._id !== propertyId
//         );

//         setProperties(updatedProperties);

//         toast.success('Property Deleted');
//       } else {
//         toast.error('Failed to delete property');
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error('Failed to delete property');
//     }
//   };

//   return (
//     <section className='bg-blue-50'>
//       <div className='container m-auto py-24'>
//         <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
//           <div className='flex flex-col md:flex-row'>
//             <div className='md:w-1/4 mx-20 mt-14 flex-col text-center'>
//               <div className='mb-4'>
//                 <Image
//                   className='h-20 w-20 md:h-25 md:w-25 rounded-full mx-auto md:mx-15 hover:scale-110 transition duration-250'
//                   src={profileImage || profileDefault}
//                   width={200}
//                   height={200}
//                   alt='User'
//                 />
//               </div>
//               <h1 className='text-3xl font-bold mb-4 text-[#3c82f6] underline'>Your Profile</h1>
//               <h2 className='text-xl mb-4 font-semibold'>
//                 <span className='font-bold block underline'>Name: </span> {profileName}
//               </h2>
//               <h2 className='text-xl font-semibold'>
//                 <span className='font-bold block underline'>Email: </span> {profileEmail}
//               </h2>
//             </div>

//             <div className='md:w-3/4 md:pl-4'>
//               <h2 className='text-3xl font-semibold mb-6 text-[#3c82f6] underline text-center md:text-center'>Your Listings</h2>
//               {!loading && properties.length === 0 && (
//                 <p>You have no property listings</p>
//               )}
//               {loading ? (
//                 <Spinner loading={loading} />
//               ) : (
//                 properties.map((property) => (
//                   <div key={property._id} className='mb-6 p-3 rounded-md hover:scale-105 border transition duration-300'>
//                     <Link href={`/properties/${property._id}`}>
//                       <Image
//                         className='h-72 w-full rounded-md object-cover'
//                         src={property.images[0]}
//                         alt=''
//                         width={500}
//                         height={100}
//                         priority={true}
//                       />
//                     </Link>
//                     <div className='mt-2'>
//                       <p className='text-lg font-semibold'>{property.name}</p>
//                       <p className='text-gray-600'>
//                         Address: {property.location.street}{' '}
//                         {property.location.city} {property.location.state}
//                       </p>
//                     </div>
//                     <div className='mt-2'>
//                       <Link
//                         href={`/properties/${property._id}/edit`}
//                         className='bg-blue-500 text-white px-3 py-3 rounded-md mr-2 hover:bg-blue-600'
//                       >
//                         Edit
//                       </Link>
//                       <button
//                         onClick={() => handleDeleteProperty(property._id)}
//                         className='bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600'
//                         type='button'
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   </div>
//                 ))
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default ProfilePage;


'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import profileDefault from '@/assets/images/profile.png';
import Spinner from '@/components/Spinner';
import { toast } from 'react-toastify';

const ProfilePage = () => {
  const { data: session } = useSession();
  const profileImage = session?.user?.image;
  const profileName = session?.user?.name;
  const profileEmail = session?.user?.email;

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProperties = async (userId) => {
      if (!userId) {
        return;
      }

      try {
        const res = await fetch(`/api/properties/user/${userId}`);

        if (res.status === 200) {
          const data = await res.json();
          setProperties(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    // Fetch user properties when session is available
    if (session?.user?.id) {
      fetchUserProperties(session.user.id);
    }
  }, [session]);

  const handleDeleteProperty = async (propertyId) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this property?'
    );

    if (!confirmed) return;

    try {
      const res = await fetch(`/api/properties/${propertyId}`, {
        method: 'DELETE',
      });

      if (res.status === 200) {
        // Remove the property from state
        const updatedProperties = properties.filter(
          (property) => property._id !== propertyId
        );

        setProperties(updatedProperties);

        toast.success('Property Deleted');
      } else {
        toast.error('Failed to delete property');
      }
    } catch (error) {
      console.log(error);
      toast.error('Failed to delete property');
    }
  };

  return (
    <section className='bg-blue-50 min-h-screen'>
      <div className='container mx-auto py-12 px-4 md:px-0'>
        <div className='bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200'>
          <div className='flex flex-col md:flex-row'>
            <div className='md:w-1/3 p-6 flex flex-col items-center'>
              <Image
                className='h-32 w-32 rounded-full shadow-md mb-4 transition-transform transform hover:scale-105'
                src={profileImage || profileDefault}
                width={128}
                height={128}
                alt='User'
              />
              <h1 className='text-2xl font-bold mb-2 text-blue-600'>{profileName}</h1>
              <p className='text-lg text-gray-700'>{profileEmail}</p>
            </div>
            <div className='md:w-2/3 p-6'>
              <h2 className='text-2xl font-semibold mb-6 text-center text-blue-600'>Your Listings</h2>
              {loading ? (
                <Spinner loading={loading} />
              ) : properties.length === 0 ? (
                <p className='text-center text-gray-600'>You have no property listings</p>
              ) : (
                properties.map((property) => (
                  <div key={property._id} className='mb-6 p-4 rounded-lg shadow-sm border border-gray-200 transition-transform transform hover:scale-105'>
                    <Link href={`/properties/${property._id}`}>
                      <Image
                        className='w-full h-48 rounded-md object-cover'
                        src={property.images[0]}
                        alt={property.name}
                        width={500}
                        height={200}
                        priority={true}
                      />
                    </Link>
                    <div className='mt-2'>
                      <p className='text-lg font-semibold text-gray-800'>{property.name}</p>
                      <p className='text-gray-600'>
                        Address: {property.location.street}, {property.location.city}, {property.location.state}
                      </p>
                    </div>
                    <div className='mt-2 flex justify-end'>
                      <Link
                        href={`/properties/${property._id}/edit`}
                        className='bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600'
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDeleteProperty(property._id)}
                        className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600'
                        type='button'
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
