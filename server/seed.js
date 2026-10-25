require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Contact = require('./models/Contact');

const contacts = [
  { name: 'Ahmed Ali', email: 'ahmed.ali@example.com', phone: '+20 100 123 4567' },
  { name: 'Sara Mohamed', email: 'sara.mohamed@example.com', phone: '+20 101 234 5678' },
  { name: 'John Smith', email: 'john.smith@example.com', phone: '+1 555 010 1234' },
  { name: 'Emma Johnson', email: 'emma.johnson@example.com', phone: '+44 20 7946 0958' },
  { name: 'Omar Khaled', email: 'omar.khaled@example.com', phone: '+20 111 345 6789' },
  { name: 'Layla Hassan', email: 'layla.hassan@example.com', phone: '+20 122 456 7890' },
  { name: 'Michael Brown', email: 'michael.brown@example.com', phone: '+1 555 020 5678' },
  { name: 'Nour Ibrahim', email: 'nour.ibrahim@example.com', phone: '+20 109 567 8901' },
];

const seed = async () => {
  try {
    await connectDB();
    await Contact.deleteMany({});
    await Contact.insertMany(contacts);
    console.log(`Seeded ${contacts.length} contacts`);
  } catch (err) {
    console.error('Seeding failed:', err.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
};

seed();
