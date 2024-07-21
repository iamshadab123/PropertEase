# PropertEase

> A web application designed to help you find your next rental property.

<img src="/public/images/screen.png" alt="PropertEase Screenshot" />

## Demo Video

Watch the demo video here: [PropertEase Demo](https://drive.google.com/file/d/1oGTPGsT02RP1j7ZEiAWB6SbzGXOjChfq/view?usp=drive_link)

## Features

PropertEase includes the following features:

- [x] **User Authentication**: Sign in with Google & Next Auth
- [x] **User Authorization**: Control access and permissions
- [x] **Route Protection**: Secure routes to prevent unauthorized access
- [x] **User Profile**: View and manage user listings
- [x] **Property Listing CRUD**: Create, Read, Update, and Delete property listings
- [x] **Property Image Upload**: Upload multiple images for each property
- [x] **Property Search**: Search for properties based on various criteria
- [x] **Internal Messaging**: Communicate with other users and receive 'unread' notifications
- [x] **Photoswipe Image Gallery**: View property images in a responsive gallery
- [x] **Mapbox Integration**: Display property locations on interactive maps
- [x] **Toast Notifications**: Show notifications for various actions
- [x] **Property Bookmarking**: Save and manage bookmarked properties
- [x] **Social Media Sharing**: Share property listings on social media platforms
- [x] **Loading Spinners**: Indicate loading states to users
- [x] **Responsive Design**: Mobile-friendly design using Tailwind CSS
- [x] **Custom 404 Page**: User-friendly error page for invalid routes

## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [NextAuth.js](https://next-auth.js.org/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Photoswipe](https://photoswipe.com/)
- [Cloudinary](https://cloudinary.com/)
- [Mapbox](https://www.mapbox.com/)
- [React Map GL](https://visgl.github.io/react-map-gl/)
- [React Geocode](https://www.npmjs.com/package/react-geocode)
- [React Spinners](https://www.npmjs.com/package/react-spinners)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [React Share](https://www.npmjs.com/package/react-share)

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js version 18 or higher
- MongoDB Atlas account and a cluster ([Sign up for MongoDB](https://www.mongodb.com/))
- Cloudinary account ([Sign up for Cloudinary](https://cloudinary.com/))
- Google Console account ([Sign up for Google Cloud](https://console.cloud.google.com/))
- Mapbox account ([Sign up for Mapbox](https://www.mapbox.com/))

### Configuration

1. **Rename the `.env.example` file** to `.env`.
2. **Add environment variables** to the `.env` file:

    ```bash
    MONGODB_URI=<Your MongoDB connection string>
    GOOGLE_CLIENT_ID=<Your Google Client ID>
    GOOGLE_CLIENT_SECRET=<Your Google Client Secret>
    NEXTAUTH_SECRET=<Generate a secret with: openssl rand -base64 32>
    CLOUDINARY_CLOUD_NAME=<Your Cloudinary Cloud Name>
    CLOUDINARY_API_KEY=<Your Cloudinary API Key>
    CLOUDINARY_API_SECRET=<Your Cloudinary API Secret>
    NEXT_PUBLIC_MAPBOX_TOKEN=<Your Mapbox Token>
    NEXT_PUBLIC_GOOGLE_GEOCODING_API_KEY=<Your Google Geocoding API Key>
    ```

### Installation

Install the required dependencies:

```bash
npm install

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
