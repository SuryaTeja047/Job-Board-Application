from flask import Blueprint,jsonify,request
from flask_jwt_extended import jwt_required,get_jwt_identity
from website import db
from .models import Jobs,Users,Applications

routes = Blueprint('routes',__name__)

@routes.route('/createjob', methods =["POST"])
@jwt_required()
def create_job():
    title = request.json.get('title')
    description = request.json.get('description')
    location = request.json.get('location')
    salary = request.json.get('salary')
    company = request.json.get('company')
    posted_by = get_jwt_identity()['user_id']

    if not title:
        return jsonify({"message":"Title is Required!"}),400
    elif not description:
        return jsonify({"message":"Description is Required!"}),400
    elif not location:
        return jsonify({"message":"Location is Required!"}),400
    elif not salary:
        return jsonify({"message":"Salary is Required!"}),400
    elif not company:
        return jsonify({"message":"Company Name is Required!"}),400

    new_job = Jobs(
        title = title,
        location = location,
        description = description,
        salary=salary,
        company=company,
        posted_by= posted_by)

    try:
        db.session.add(new_job)
        db.session.commit()
    except Exception as e:
        return jsonify({"message":str(e)}),400

    return jsonify({"message":"JOb Posted Succefully!"})

@routes.route('/jobs')
def jobs():
    jobs = Jobs.query.all()
    json_jobs = [job.to_json() for job in jobs]
    return jsonify({"jobs":json_jobs})

@routes.route('/userJobs')
@jwt_required()
def user_job():
    jobs = Jobs.query.filter_by(posted_by = get_jwt_identity()['user_id'])
    json_jobs = [job.to_json() for job in jobs]
    return jsonify({"userJobs":json_jobs})

@routes.route('/delete-job',methods=["DELETE"])
def delete_job():
    id = request.json.get('id')

    print(id)
    job = Jobs.query.filter_by(id=id).first()

    try:
        db.session.delete(job)
        db.session.commit()
        return jsonify({"message":"Deleted Succesfully"})
    except Exception as e:
        db.session.rollback()
        return jsonify({"message":str(e)}),400

@routes.route('/userdetails')
@jwt_required()
def user_details():
    user_id = get_jwt_identity()['user_id']
    user = Users.query.filter_by(id=user_id).first()
    json_user = [user.to_json()]
    return jsonify({"user":json_user})

@routes.route('/applyJob',methods=["POST"])
@jwt_required()
def apply_job():
    user_id = get_jwt_identity()['user_id']
    job_id = request.json.get('id')
    print(job_id)
    status = "Applied"
    application = Applications.query.filter_by(job_id=job_id,user_id=user_id).first()
    if application:
        return jsonify({"message":"Already Applied for the job"})
    application = Applications(user_id=user_id,job_id=job_id,status=status)

    try:
        db.session.add(application)
        db.session.commit()
    except Exception as e:
        return jsonify({"message":str(e)}),400
    return jsonify({"message":"Job Applied Succesfully!"})

@routes.route('/get_applications')
def get_applications():
    applications = Applications.query.all()
    json_applications = [application.to_json() for application in applications]
    return jsonify({"applications":json_applications})

@routes.route('/userApplications', methods=["GET"])
@jwt_required()
def get_applications_employer():
    user_id = get_jwt_identity()['user_id']
    jobs = Jobs.query.filter_by(posted_by=user_id).all()
    job_ids = [job.id for job in jobs]
    print(job_ids)

    json_applications = []
    for job_id in job_ids:
        applications = Applications.query.filter_by(job_id=job_id).all()
        json_applications.extend([application.to_json() for application in applications]) 

    return jsonify({"applicants": json_applications})