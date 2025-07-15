import React, { useState } from 'react';

function BookForm() {
  const [book, setBook] = useState({
    title: '',
    author: '',
    genre: '',
    year: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setBook(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(book);
    setSubmitted(true);
  };

  return (
    <section>
      <h2>New Book</h2>

      <form onSubmit={handleSubmit} style={{ maxWidth: 220 }}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={book.title}
          onChange={handleChange}
          style={{ width: '100%', marginBottom: 6 }}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={book.author}
          onChange={handleChange}
          style={{ width: '100%', marginBottom: 6 }}
          required
        />
        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={book.genre}
          onChange={handleChange}
          style={{ width: '100%', marginBottom: 6 }}
          required
        />
        <input
          type="text"
          name="year"
          placeholder="Year Published"
          value={book.year}
          onChange={handleChange}
          style={{ width: '100%', marginBottom: 10 }}
          required
        />
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <p style={{ marginTop: 12, color: 'green' }}>
          Book “{book.title}” by {book.author} saved successfully!
        </p>
      )}
    </section>
  );
}

export default BookForm;
