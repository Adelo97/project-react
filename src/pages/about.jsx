import React from 'react';

export function About() {
    return (
        <div className="container px-4 py-4" id="home">
          <div className="bg-body-tertiary p-5 rounded">
            <div className="col-sm-8 py-5 mx-auto">
              <h1 className="display-5 fw-normal">About my Application</h1>
              <p className="fs-5 mt-3">
                I am building this application as part of my development journey.
              </p>
            </div>
          </div>
        </div>
    );
}