import { Schema, model, models } from 'mongoose';

// Schema for the Message collection
const MessageSchema = new Schema(
  {
    // ID of the user who sent the message
    sender: {
      type: Schema.Types.ObjectId, // Stores a reference to the User document
      ref: 'User', // Refers to the User model
      required: true, // Sender field must be provided
    },
    // ID of the user who will receive the message
    recipient: {
      type: Schema.Types.ObjectId, // Stores a reference to the User document
      ref: 'User', // Refers to the User model
      required: true, // Recipient field must be provided
    },
    // ID of the property related to the message
    property: {
      type: Schema.Types.ObjectId, // Stores a reference to the Property document
      ref: 'Property', // Refers to the Property model
      required: true, // Property field must be provided
    },
    // Name of the sender or individual initiating the message
    name: {
      type: String, // Stores the name as a string
      required: [true, 'Name is required'], // Name field is required with a custom error message
    },
    // Email address of the sender
    email: {
      type: String, // Stores the email as a string
      required: [true, 'Email is required'], // Email field is required with a custom error message
    },
    // Phone number of the sender (optional)
    phone: {
      type: String, // Stores the phone number as a string
      // No requirement or default value specified
    },
    // Main content or body of the message
    body: {
      type: String, // Stores the message body as a string
      // No requirement or default value specified
    },
    // Flag indicating whether the message has been read
    read: {
      type: Boolean, // Stores the read status as a boolean
      default: false, // Default value is false (not read)
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Create the Message model if it does not already exist in mongoose models
// Otherwise, retrieve the existing Message model
const Message = models.Message || model('Message', MessageSchema);

export default Message;

