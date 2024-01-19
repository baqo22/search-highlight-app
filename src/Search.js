import React, { useState } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const articles = [
    { title: 'Understanding the difference between grid-template and grid-auto', content: 'with all the new properties related to CSS Grid Layout, ...', id: 1 },
    { title: 'Recreating the GitHub Contribution Graph with CSS Grid', content: '...grid properties are limited', id: 2 },
    // ... more articles
  ];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function to highlight search term in text
  const highlightSearchTerm = (text, term) => {
    if (!term) return text;

    const regex = new RegExp(`(${term})`, 'gi');
    const parts = text.split(regex);
    return (
      <span>
        {parts.map((part, index) =>
          regex.test(part) ? <mark key={index}>{part}</mark> : part
        )}
      </span>
    );
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search..." />
      <div>
        {articles.filter(article => 
          article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
          article.content.toLowerCase().includes(searchTerm.toLowerCase())
        ).map(article => (
          <div key={article.id}>
            <h3>{highlightSearchTerm(article.title, searchTerm)}</h3>
            <p>{highlightSearchTerm(article.content, searchTerm)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
