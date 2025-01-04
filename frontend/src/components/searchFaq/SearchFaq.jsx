import React, { useState } from "react";
import axios from "axios";
import Highlighter from "react-highlight-words";
import "../searchFaq/searchFaq.css";

function SearchFaq() {
  const [query, setQuery] = useState("");
  const [model, setModel] = useState("boolean");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (query === "") return;
    try {
      const res = await axios.get(
        `http://localhost:5000/api/faqs/search?q=${query}&model=${model}`
      );
      console.log(res);

      setResults(res.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div className="search">
      <b dir="rtl">
        <b>ياسر الحمد</b>
        <b>yaser_122441</b>
      </b>
      <br />
      <b dir="rtl">
        <b>عبد الرحمن الاوتاني</b>
        <b>abd_alrhman_108964</b>
      </b>
      <h3 dir="rtl">ادخل عبارة ليتم البحث عنها واختر الخوارزمية</h3>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Query"
      />
      <select value={model} onChange={(e) => setModel(e.target.value)}>
        <option value="boolean">Boolean</option>
        <option value="extended_boolean">Extended Boolean</option>
        <option value="vector">Vector Space</option>
      </select>
      <button onClick={handleSearch}>Search</button>
      <div className="result">
        {results.map((result, i) => (
          <div key={i}>
            <Highlighter
              searchWords={[query]}
              textToHighlight={
                model === "boolean" ? result.question : result?._doc?.question
              }
            />
            <Highlighter
              searchWords={[query]}
              textToHighlight={
                model === "boolean" ? result.answer : result?._doc?.answer
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchFaq;
