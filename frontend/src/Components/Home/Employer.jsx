import { Link } from "react-router-dom";

const Employer = () => {
  return (
    <div className="container mt-5">
      <div className="jumbotron text-center bg-light p-5 ">
        <h1 className="display-1">Welcome to Job Board</h1>
        <hr className="my-3"></hr>
        <p>
          Wanting to post a job and hire someone? Then you are at the right
          place
        </p>
        <Link to="/createjobs" className="btn btn-lg btn-primary">
          Post a Job
        </Link>
      </div>
      <div className="row mt-5">
        <div className="col-md-6">
          <h2>Post and Manage Jobs</h2>
          <p>
            Want to post a Job and hire some professionals then you are at the
            right place!
          </p>
          <Link to="/userjobs" className="btn btn-primary">
            Manage Jobs
          </Link>
        </div>
        <div className="col-md-6">
          <h2>View and Review your Applications</h2>
          <p>Review the Applications with ease and effortlessly!</p>
          <Link to="/" className="btn btn-secondary">
            View Applications
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Employer;
