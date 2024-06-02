from . import db
from flask_login import UserMixin
from werkzeug.security import check_password_hash,generate_password_hash

class Users(db.Model,UserMixin):
    id = db.Column(db.Integer,primary_key = True)
    username = db.Column(db.String(50),nullable =False, unique = True)
    full_name = db.Column(db.String(50),nullable = False, unique = False)
    email = db.Column(db.String(150),nullable= False, unique = True)
    password = db.Column(db.String(250),nullable = False, unique = False)
    role = db.Column(db.String(50),nullable = False, unique = False)
    jobs = db.relationship('Jobs')
    applications = db.relationship('Applications') 

    def to_json(self):
        return {
            "id":self.id,
            "username":self.username,
            "fullName":self.full_name,
            "email":self.email,
            "password":self.password,
            "role":self.role,
        }
    def set_password(self,password):
        self.password = generate_password_hash(password)

    def check_password(self,password):
        return check_password_hash(self.password,password)
    
class Jobs(db.Model):
    id = db.Column(db.Integer,primary_key = True)
    title = db.Column(db.String(50),unique = False,nullable = False)
    description = db.Column(db.String(250),unique = False, nullable = False)
    company = db.Column(db.String(30),nullable = False, unique = False)
    location = db.Column(db.String(20),unique = False, nullable = False)
    salary = db.Column(db.Integer,unique = False, nullable = False)
    posted_by = db.Column(db.Integer, db.ForeignKey('users.id'), nullable = False)
    applications = db.relationship('Applications') 

    def to_json(self):
        return {
            "id":self.id,
            "title":self.title,
            "description":self.description,
            "company":self.company,
            "location":self.location,
            "salary":self.salary,
            "postedBy":self.posted_by,
            "username":Users.query.get(self.posted_by).username,
        }

class Applications(db.Model):
    id = db.Column(db.Integer,primary_key = True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    job_id = db.Column(db.Integer,db.ForeignKey('jobs.id'), nullable = False)
    status = db.Column(db.String(20))

    def to_json(self):
        return {
            "id":self.id,
            "userId":self.user_id,
            "jobId":self.job_id,
            "status":self.status,
        }