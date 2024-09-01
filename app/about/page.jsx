import React from 'react'

const AboutPage = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">About PropertEase</h1>
          <p className="text-xl text-gray-700">
            Your ultimate partner in finding the perfect rental property.
          </p>
        </header>

        <section className="bg-white shadow-lg rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-4">
            At PropertEase, our mission is to simplify the property rental process and provide you with the tools you need to find your ideal home. We are committed to offering a seamless, user-friendly experience that empowers you to make informed decisions with confidence.
          </p>
          <p className="text-lg text-gray-700">
            By leveraging the latest technology and best practices in web development, we aim to create a platform that is not only functional but also enjoyable to use. Our goal is to connect you with the perfect rental property effortlessly.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Advanced Search Filters</h3>
              <p className="text-gray-700">
                Find properties that match your specific criteria with our advanced search filters, making it easier to narrow down your options and find exactly what you're looking for.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Interactive Maps</h3>
              <p className="text-gray-700">
                Explore property locations and nearby amenities with our interactive maps, allowing you to visualize the area and make informed decisions about your next home.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">User-Friendly Management</h3>
              <p className="text-gray-700">
                Manage property listings with ease using our intuitive platform, designed for both renters and property owners to handle their listings and profiles efficiently.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Secure and Personalized</h3>
              <p className="text-gray-700">
                Enjoy a secure and personalized experience with our robust authentication system and profile management features that ensure your data is protected and tailored to your needs.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white shadow-lg rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">A Brief History</h2>
          <p className="text-lg text-gray-700 mb-4">
            PropertEase was founded with the vision of transforming the rental property search process. Since our inception, we have been dedicated to enhancing the user experience and continuously improving our platform based on user feedback and technological advancements.
          </p>
          <p className="text-lg text-gray-700">
            Our team is passionate about providing you with the best tools and resources to make your property search as smooth as possible. We are proud of the impact we’ve made and are excited about the future of PropertEase.
          </p>
        </section>
      </div>
    </div>
  )
}

export default AboutPage

