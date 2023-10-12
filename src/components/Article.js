import React from "react";

const Article = ({ id, title, date = "January 1, 1970", preview, minutes }) => {
  const currentDate = date === null ? "January 1, 1970" : date;

  return (
    <article key={id}>
      <h3>{title}</h3>
      <p>{preview}</p>
      <small>
        {currentDate}, ☕️ {minutes} minute read
      </small>
    </article>
  );
};

export default Article;
