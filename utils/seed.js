const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { getRandomUser, getRandomThoughts } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  // Drop existing thoughts
  await User.deleteMany({});

  // Drop existing users
  await Thought.deleteMany({});

  // Create empty array to hold the users
  const userArr = [];
  const thoughtArr = [];
  // Loop 10 times -- add users to the users array
  for (let i = 0; i < 10; i++) {
    const username = `${getRandomUser()}${Math.floor(
      Math.random() * (99 - 18 + 1) + 18
    )}`;
    const email = `${username}@gmail.com`;
    const thoughts = getRandomThoughts(3);
    userArr.push({
      username,
      email,
      thoughts,
    });
  }
  for (let i = 0; i < 10; i++) {
    const thoughts = getRandomThoughts();
    thoughtArr.push({
      thoughts,
    });
  }
  // Add users to the collection and await the results
  await User.collection.insertMany(userArr);

  // Add thoughts to the collection and await the results
  await Thought.collection.insertMany(thoughtArr);

  // Log out the seed data to indicate what should appear in the database
  console.table(userArr);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
