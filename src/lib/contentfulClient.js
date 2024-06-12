import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID, // Use environment variable
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN, // Use environment variable
});

export default client;
