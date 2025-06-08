import React from 'react';
import "../styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export  function Home() {
    return (
        <div className="container px-4 py-4" id="home">
          <div className="bg-body-tertiary p-5 rounded">
            <div className="col-sm-8 py-5 mx-auto">
              <h1 className="display-5 fw-normal">Welcome to the Music Groups Album</h1>
                <p className="fs-5">This is the home page for your music groups album</p>
                <p className="text-end mt-5"> Developed by Adel</p>

            </div>
          </div>
        </div>
    )

}