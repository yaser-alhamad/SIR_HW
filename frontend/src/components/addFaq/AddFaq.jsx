import React, { useState } from "react";
import axios from "axios";
import "../addFaq/addFaq.css";

function AddFaq() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://sir-hw.onrender.com/api/faqs/add", {
        question,
        answer,
      });
      setMessage("FAQ added successfully!");
    } catch (err) {
      setMessage("Error adding FAQ.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 dir="rtl">ادخل السؤال مع اجابته لكي يتم تخزينه</h3>
      <input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Question"
      />
      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Answer"
      ></textarea>
      <button type="submit">Add FAQ</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default AddFaq;
