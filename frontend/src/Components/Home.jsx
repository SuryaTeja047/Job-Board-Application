import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="jumbotron text-center bg-light p-5">
        <h1 className="display-1">Welcome to Job Board</h1>
        <p className="lead">Your one-stop solution for job seekers and employers</p>
        <hr className="my-3" />
        <p>Looking for a job or want to post a job? We've got you covered!</p>
        <div>
          <Link to="/register" className="btn btn-primary btn-lg" role="button">Find Jobs</Link>&nbsp;
          <Link to="/register" className="btn btn-secondary btn-lg" role="button">Post a Job</Link>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-6">
          <h2>For Job Seekers</h2>
          <p>Search for the latest job listings and find your dream job today.</p>
          <Link to="/register" className="btn btn-primary">Browse Jobs</Link>
        </div>
        <div className="col-md-6">
          <h2>For Employers</h2>
          <p>Post your job openings and find the best candidates quickly and easily.</p>
          <Link to="/register" className="btn btn-secondary">Post a Job</Link>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-12">
          <h2>About Job Board</h2>
          <p>Job Board is a leading platform connecting job seekers with employers. Our mission is to help people find the right jobs and employers find the right talent. Join us today and take the next step in your career or hiring process.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
