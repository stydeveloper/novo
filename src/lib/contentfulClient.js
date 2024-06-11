import { createClient } from "contentful";
console.log(
  "process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID",
  process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
);
console.log(
  "process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN",
  process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
);
const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID, // Use environment variable
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN, // Use environment variable
});

export default client;
