import { Schema, model, models } from 'mongoose';

// Define the schema for the User model
const UserSchema = new Schema(
  {
    // Email address of the user, must be unique and required
    email: {
      type: String,
      unique: [true, 'Email already exists'], // Ensures email is unique
      required: [true, 'Email is required'], // Makes email a required field
    },
    
    // Username of the user, required field
    username: {
      type: String,
      required: [true, 'Username is required'], // Makes username a required field
    },
    
    // Optional profile image URL for the user
    image: {
      type: String,
    },
    
    // List of properties bookmarked by the user
    bookmarks: [
      {
        type: Schema.Types.ObjectId, // References the Property model
        ref: 'Property',
      },
    ],
  },
  {
    // Automatically manage createdAt and updatedAt fields
    timestamps: true,
  }
);

// Create or retrieve the User model from mongoose models
const User = models.User || model('User', UserSchema);

export default User;

