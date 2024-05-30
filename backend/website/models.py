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