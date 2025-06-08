import React from 'react';
import { Link } from 'react-router';
import "./footer.css"

export function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5 shadow-sm">
      <div className="container text-">
        <Link to="../home" className="text-white text-decoration-none">
          <span>&copy; 2025 Seido AB</span>
        </Link>
      </div>
    </footer>
  );
}
