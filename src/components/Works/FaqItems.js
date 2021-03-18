import React from "react";

function FaqItems({ faq, index, toggleFAQ }) {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question">{faq.question}</div>
      <div className="primary-btn faq-answer">{faq.answer}</div>
    </div>
  );
}

export default FaqItems;
