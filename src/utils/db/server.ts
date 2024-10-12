const mongoose = require("mongoose");

const MONGO_URI = process.env.NEXT_PUBLIC_DATABASE_URI.replace(
  "<PASSWORD>",
  process.env.NEXT_PUBLIC_DATABASE_PASSWORD
);

const DBInstance = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });

    console.log(`✅ Connected to MongoDB`);
  } catch (err) {
    console.error(`❌ Could not connect to MongoDB\n`, err.message);
  }
};

export default DBInstance;
