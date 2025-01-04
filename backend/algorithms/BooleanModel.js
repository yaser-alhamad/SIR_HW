function booleanSearch(query, faqs) {
    const terms = query.toLowerCase().split(' ');
  
    return faqs.filter((faq) =>
      terms.every(
        (term) => faq.question.toLowerCase().includes(term) || faq.answer.toLowerCase().includes(term)
      )
    );
  }
  
  module.exports = { booleanSearch };
  