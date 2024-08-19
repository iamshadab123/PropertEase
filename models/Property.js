import { Schema, model, models } from 'mongoose';

// Define Schema for the Property model
const PropertySchema = new Schema(
  {
    // Reference to the User model for the owner of the property
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    
    // The name of the property
    name: {
      type: String,
      required: true,
    },
    
    // The type of the property (e.g., apartment, house, etc.)
    type: {
      type: String,
      required: true,
    },
    
    // Description of the property
    description: {
      type: String,
    },
    
    // Location details of the property
    location: {
      street: {
        type: String,
      },
      city: {
        type: String,
      },
      state: {
        type: String,
      },
      zipcode: {
        type: String,
      },
      latitude: {
        type: Number,
      },
      longitude: {
        type: Number,
      }
    },
    
    // Number of bedrooms in the property
    beds: {
      type: Number,
      required: true,
    },
    
    // Number of bathrooms in the property
    baths: {
      type: Number,
      required: true,
    },
    
    // Square footage of the property
    square_feet: {
      type: Number,
      required: true,
    },
    
    // Array of amenities available in the property
    amenities: [
      {
        type: String,
      },
    ],
    
    // Rental rates for the property
    rates: {
      weekly: {
        type: Number,
      },
      nightly: {
        type: Number,
      },
    },
    
    // Seller's contact information
    seller_info: {
      name: {
        type: String,
      },
      email: {
        type: String,
      },
      phone: {
        type: String,
      },
    },
    
    // Array of image URLs for the property
    images: [
      {
        type: String,
      },
    ],
    
    // Flag indicating if the property is featured
    is_featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  }
);

// Create the Property model if it does not already exist in mongoose models
// Otherwise, retrieve the existing Property model
const Property = models.Property || model('Property', PropertySchema);

export default Property;

