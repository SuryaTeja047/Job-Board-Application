from flask import request,jsonify,Blueprint
from .models import Users
from website import db
from website import jwt

auth = Blueprint('auth',__name__)

@auth.route('/users')
def get_users():
    users = Users.query.all()
    json_users = list(map(lambda x:x.to_json(),users))
    return jsonify({"users":json_users})

@auth.route('/login',methods=["POST"])
def login():
    email = request.json.get('email')
    password = request.json.get('password')

    if not email or not password:
        return jsonify({"message":"Enter valid Credentials!"}),400

    user = Users.query.filter_by(email=email).first()

    if not user:
        return jsonify({"message":"user not found!"}),400
    if not user.check_password(password = password):
        return jsonify({"message":"Invalid Password!"}),400
    
    # jwt_token = 
    return jsonify({"message":"Login Succesfull"}),201

@auth.route('/register', methods =["POST"])
def register_user():
    username = request.json.get('username')
    firstname = request.json.get('firstname')
    lastname = request.json.get('lastname')
    email = request.json.get('email')
    password = request.json.get('password')
    confirm_password = request.json.get('confirmPassword')
    role = request.json.get('role')

    if Users.query.filter_by(username=username).first():
        return jsonify({'message': 'Username already exists'}), 400
    if Users.query.filter_by(email=email).first():
        return jsonify({'message': 'Email already exists'}), 400
    
    if not username:
        return jsonify({"message":"Username is required!"}),400
    elif not firstname or not lastname:
        return jsonify({"message":"First name and Last Name is required!"}),400
    elif not email:
        return jsonify({"message":"Email is required"}),400
    elif not password:
        return jsonify({"message":"Password is required"}),400
    elif not role:
        return jsonify({"message":"Role is required!"}),400
    if len(password)<8 or len(password)>16:
        return jsonify({"message":"password must be 8-16 characterd long!"}),400
    if password!=confirm_password:
        return jsonify({"message":"Passwords doesn't match!"}),400
    
    fullname = str(firstname.lower().capitalize() + " " +lastname.lower().capitalize())

    new_user = Users(username =  username,email = email,full_name = fullname,role = role)
    new_user.set_password(password)
    
    try:
        db.session.add(new_user)
        db.session.commit()
    except Exception as e:
        return jsonify({"message":str(e)}),400
    return jsonify({"message":"Registration Succesfull"}),201