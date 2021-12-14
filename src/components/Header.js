import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <h1>BookStore</h1>
      <nav className="nav">
        <a href="/">Books</a>
        <a href="/Categories">categories</a>
      </nav>
    </header>
  );
}
