const JobCard = ({
  title,
  description,
  username,
  location,
  salary,
  company,
}) => {
  return (
    <div className="card">
      <div className="card-body">
        <h1 className="card-title">{title}</h1>
        <p className="card-text">{description}</p>
        <div className="d-flex justify-content-between">
          <p className="card-text text-muted">Location: {location}</p>
          <p className="card-text text-muted">Salary: {salary}</p>
          <p className="card-text text-muted">Company: {company}</p>
          <p className="card-text text-muted">Posted By: {username}</p>
        </div>
        <button className="btn btn-primary">Apply</button>
      </div>
    </div>
  );
};

export default JobCard;
