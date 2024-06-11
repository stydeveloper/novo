import client from "./contentfulClient";

export async function fetchAllQuestions() {
  const response = await client.getEntries({
    content_type: "questionAndAnswer",
  });
  return response.items;
}

export async function fetchQuestionsByCategory(categoryId) {
  const response = await client.getEntries({
    content_type: "questionAndAnswer",
    "fields.category.sys.id": categoryId,
  });
  return response.items;
}
