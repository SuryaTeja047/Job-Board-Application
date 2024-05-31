from flask import Blueprint,jsonify,request
from flask_jwt_extended import jwt_required,get_jwt_identity
from website import db
from .models import Jobs

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