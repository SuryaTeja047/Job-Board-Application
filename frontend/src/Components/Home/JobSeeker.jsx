import { Link } from "react-router-dom";

const JobSeeker = () => {
  return (
    <div className="container mt-5">
      <div className="jumbotron text-center bg-light p-5">
        <h1 className="display-1">Welcome to Job Board</h1>
        <hr className="my-3" />
        <p>
          Looking for your next opportunity? Start your job search here!
        </p>
        <Link to="/jobs" className="btn btn-lg btn-primary">
          Search Jobs
        </Link>
      </div>
      <div className="row mt-5">
        <div className="col-md-6">
          <h2>Find Your Dream Job</h2>
          <p>
            Browse through thousands of job listings to find your perfect match.
          </p>
          <Link to="/jobs" className="btn btn-primary">
            Search Jobs
          </Link>
        </div>
        <div className="col-md-6">
          <h2>Manage Your Applications</h2>
          <p>Keep track of your job applications and stay organized.</p>
          <Link to="" className="btn btn-secondary">
            Manage Applications
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobSeeker;
