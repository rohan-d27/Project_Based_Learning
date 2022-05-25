import React from 'react'
import "./About.css";
const About = () => {
  return (
    <div>
      <div class="card">
        <div class="card-header">
          <h2>About</h2>
        </div>
        <div class="card-body">
          <p class="card-text">User Management System is a simple user management system built with React on client side  and Node.js and Express.js on server side and MongoDB as database.
            It is a single page application. It is built using React Router. It is a CRUD application.</p>
          <a href="/" class="btn btn-primary">Home</a>
        </div>
      </div>
    </div>
  )
}

export default About