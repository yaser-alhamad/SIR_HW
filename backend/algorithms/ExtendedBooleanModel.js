function extendedBooleanSearch(query, faqs) {
  const terms = query.toLowerCase().split(" ");
  console.log(terms);

  return faqs
    .map((faq) => {
      console.log(faq.question, faq.answer);

      const faqContent = `${faq.question} ${faq.answer}`.toLowerCase();
      console.log("faqContent", faqContent);

      const score = terms.reduce(
        (acc, term) => acc + (faqContent.includes(term) ? 1 : 0),
        0
      );
      console.log("score", score);
      console.log("last", { ...faq, score });

      return { ...faq, score };
    })
    .filter((faq) => faq.score > 0)
    .sort((a, b) => b.score - a.score);
}

module.exports = { extendedBooleanSearch };
