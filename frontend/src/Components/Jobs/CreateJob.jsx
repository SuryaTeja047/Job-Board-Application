import { useEffect, useState } from "react";

const CreateJob = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [company, setCompany] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title,
      description,
      location,
      salary,
      company,
    };
    const token = localStorage.getItem('token');
    const url = "http://localhost:5000/createjob";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, options);

    const response_message = await response.json();
    if (response.ok) {
      alert(response_message.message);
    } else {
      alert(response_message.message);
    }
  };

  return (
    <div className="container">
      <form method="POST" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="title">Enter Title:</label>
          <input
            type="text"
            id="title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="company">Enter Company Name:</label>
          <input
            type="text"
            id="company"
            className="form-control"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="location">Enter Location:</label>
          <input
            type="text"
            id="location"
            className="form-control"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="salary">Enter Salary:</label>
          <input
            type="text"
            id="salary"
            className="form-control"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="description">Enter Description:</label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <br />
        <button className="btn btn-primary" type="submit">
          Create Job
        </button>
      </form>
    </div>
  );
};

export default CreateJob;
