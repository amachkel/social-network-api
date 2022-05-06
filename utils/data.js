const userNames = [
  "Aarez",
  "Aarman",
  "Aaron",
  "Aaron-James",
  "Aarron",
  "Aaryan",
  "Aaryn",
  "Aayan",
  "Aazaan",
  "Abaan",
  "Abbas",
  "Abdallah",
  "Abdalroof",
  "Abdihakim",
  "Abdirahman",
  "Abdisalam",
  "Abdul",
  "Abdul-Aziz",
  "Abdulbasir",
  "Abdulkadir",
  "Abdulkarem",
  "Smith",
  "Zubair",
  "Zubayr",
  "Zuriel",
  "Xander",
  "Jared",
  "Courtney",
  "Gillian",
  "Clark",
  "Jared",
  "Grace",
  "Kelsey",
  "Tamar",
  "Alex",
  "Mark",
  "Tamar",
  "Farish",
  "Sarah",
  "Nathaniel",
  "Parker",
];

const thoughtText = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat.",
  "Pretium nibh ipsum consequat nisl.",
  "Sed egestas egestas fringilla phasellus faucibus scelerisque.",
  "Libero justo laoreet sit amet cursus sit amet dictum sit.",
  "Elementum integer enim neque volutpat ac tincidunt.",
  "Pulvinar pellentesque habitant morbi tristique senectus.",
  "Sed vulputate odio ut enim blandit.",
  "Dignissim enim sit amet venenatis urna cursus eget nunc.",
  "Orci ac auctor augue mauris augue neque gravida in.",
  "Commodo sed egestas egestas fringilla phasellus.",
  "Purus faucibus ornare suspendisse sed nisi lacus sed viverra.",
  "Molestie a iaculis at erat pellentesque adipiscing commodo elit.",
  "Aliquam nulla facilisi cras fermentum odio eu.",
  "Elit at imperdiet dui accumsan sit amet nulla.",
  "Vestibulum rhoncus est pellentesque elit.",
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random user
const getRandomUser = () =>
  `${getRandomArrItem(userNames)}${Math.floor(
    Math.random() * (99 - 18 + 1) + 18
  )}`;

// Function to generate random thoughts that we can add to the database. Includes reactions.
const getRandomThoughts = () => {
  const results = {
    thoughtText: getRandomArrItem(thoughtText),
    createdAt: Date.now,
    username: getRandomUser(),
    reactions: [],
  };

  return results;
};

module.exports = {
  getRandomThoughts,
  getRandomUser,
};
