const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { getRandomUser, getRandomThoughts, getRandomEmail } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  // Drop existing thoughts
  await User.deleteMany({});

  // Drop existing users
  await Thought.deleteMany({});

  // Create empty array to hold the users
  const users = [];

  // Loop 10 times -- add users to the users array
  for (let i = 0; i < 10; i++) {
    // Get some random assignment objects using a helper function that we imported from ./data
    const thoughts = getRandomThoughts(20);
    const username = getRandomUser();
    const email = getRandomEmail();
    const friends = `${username}${Math.floor(
      Math.random() * (99 - 18 + 1) + 18
    )}`;

    users.push({
      username,
      email,
      thoughts,
      friends,
    });
  }

  // Add users to the collection and await the results
  await User.collection.insertMany(users);

  // Add thoughts to the collection and await the results
  await Thought.collection.insertOne({
    courseName: "UCLA",
    inPerson: false,
    users: [...users],
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
