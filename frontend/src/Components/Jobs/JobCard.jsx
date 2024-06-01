const JobCard = ({job,role}) => {
  return (
    <div className="card">
      <div className="card-body">
        <h1 className="card-title">{job.title}</h1>
        <p className="card-text">{job.description}</p>
        <div className="d-flex justify-content-between">
          <p className="card-text text-muted">Location: {job.location}</p>
          <p className="card-text text-muted">Salary: {job.salary}</p>
          <p className="card-text text-muted">Company: {job.company}</p>
          <p className="card-text text-muted">Posted By: {job.username}</p>
        </div>
        {role === "job seeker" ? (
          <button className="btn btn-primary">Apply</button>
        ) : (
          <div className="d-flex justify-content-end">
            {/* <button className="btn btn-primary">Update</button> */}
            <button className="btn btn-danger">Delete</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobCard;
