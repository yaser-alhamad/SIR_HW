function vectorSpaceSearch(query, faqs) {
  const terms = query.toLowerCase().split(" ");

  return faqs
    .map((faq) => {
      const faqTerms = `${faq.question} ${faq.answer}`.toLowerCase().split(" ");
      const score = terms.reduce(
        (acc, term) => acc + (faqTerms.includes(term) ? 1 : 0),
        0
      );
      return { ...faq, score };
    })
    .sort((a, b) => b.score - a.score);
}

module.exports = { vectorSpaceSearch };
