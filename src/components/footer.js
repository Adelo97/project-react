import React from 'react'

import {Link} from 'react-router';

export  function Footer() {
  return (
        <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
                <Link to="../home" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                 <span className="mb-3 mb-md-0 text-body-secondary">&copy; 2025 Seido AB</span>
                </Link>
            </div>
        </footer>
      </div>
    
  )
}
