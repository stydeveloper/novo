export const groupQuestionsByCategory = (questions) => {
  return questions.reduce((acc, question) => {
    const categoryName = question.fields.category[0].fields.name;
    if (!acc[categoryName]) {
      acc[categoryName] = [];
    }
    acc[categoryName].push({
      question: question.fields.question,
      answer: question.fields.answer,
      id: question.sys.id, // Assuming you have a unique ID here
      color: question.fields.color, // Assuming color is directly under fields
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

export const transformQuestions = (questions) => {
  // Assuming questions are objects that might need further processing
  return questions.map((question) => ({
    question: question.question,
    answer: question.answer, // Make sure answer is in the correct format for display
    id: question.id,
    color: question.color,
    title: question.title,
  }));
};
