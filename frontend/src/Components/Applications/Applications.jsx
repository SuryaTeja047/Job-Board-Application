const Applications = ({ applications }) => {
    return (
        <div>
            {applications.map((application)=>(
                <ul key={application.id}>
                    <li>{application.username}</li>
                </ul>
            ))}
        </div>
    );
};

export default Applications;
