const userNames = [
  "Aaran",
  "Aaren",
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

const emails = [
  "silvios@creamstrn.shop",
  "nathaliecoudeville@kiziwi.xyz",
  "jchillin504@cuedigy.com",
  "keithwillet4@icsasco.it",
  "la6q8517uu@card4kurd.xyz",
  "symanyshynlesja@pseyusv.com",
  "verohya@mexcool.com",
  "soniyaal@816qs.com",
  "avnishmadan@boranora.com",
  "gnujjjenqoc@boranora.com",
  "dineshkeyal@mymailcr.com",
  "jdcarr@outlook.sbs",
];

const reactions = ["like", "love", "sad", "angry"];

const users = [];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomUser = () => getRandomArrItem(userNames);

const getRandomEmail = () => getRandomArrItem(emails);

// Function to generate random thoughts that we can add to the database. Includes reactions.
const getRandomThoughts = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughtText: getRandomArrItem(thoughtText),
      username: getRandomUser(),
      reactions: [...getReactions(3)],
    });
  }
  return results;
};

// Create the tags that will be added to each application
const getReactions = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionBody: getRandomArrItem(reactions),
      username: getRandomUser(),
    });
  }
  return results;
};
