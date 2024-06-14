export const ensureAbsoluteUrl = (url) => {
  if (url.startsWith("//")) {
    return "https:" + url;
  }
  return url;
};

export const groupQuestionsByCategory = (questions, assets) => {
  return questions.reduce((acc, question) => {
    const categoryName = question.fields.category[0].fields.name;
    if (!acc[categoryName]) {
      acc[categoryName] = [];
    }
    const imageId = question.fields.image?.sys.id;
    const image = assets.find((asset) => asset.sys.id === imageId)?.fields.file
      .url;

    acc[categoryName].push({
      question: question.fields.question,
      answer: question.fields.answer,
      id: question.sys.id,
      image: ensureAbsoluteUrl(image),
      color: question.fields.color,
      title: question.fields.category[0].fields.name,
    });
    return acc;
  }, {});
};

export const filterQuestionsByCategory = (groupedQuestions, categoryId) => {
  // Directly return the array of questions for the specified category
  // Return an empty array if the category does not exist to avoid errors
  return groupedQuestions[categoryId] || [];
};

export const extractPlainTextFromRichText = (richTextDocument) => {
  let plainText = "";

  const traverseNodes = (nodes) => {
    nodes.forEach((node) => {
      if (node.nodeType === "text") {
        plainText += node.value;
      } else if (node.content) {
        traverseNodes(node.content);
      }
    });
  };

  if (richTextDocument && richTextDocument.content) {
    traverseNodes(richTextDocument.content);
  }

  return plainText;
};

// export const transformQuestions = (questions) => {

//   return questions.map((question) => ({
//     question: question.question,
//     answer: question.answer,
//     id: question.id,
//     color: question.color,
//     title: question.title,
//   }));

// export const groupQuestionsByCategory = (questions) => {
//   return questions.reduce((acc, question) => {
//     const categoryName = question.fields.category[0].fields.name;
//     if (!acc[categoryName]) {
//       acc[categoryName] = [];
//     }
//     acc[categoryName].push({
//       question: question.fields.question,
//       answer: question.fields.answer,
//       id: question.sys.id, // Assuming you have a unique ID here
//       color: question.fields.color, // Assuming color is directly under fields
//       title: question.fields.category[0].fields.name,
//     });
//     return acc;
//   }, {});
// };
// };
