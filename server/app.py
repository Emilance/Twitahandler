from flask import Flask, Response, request , jsonify
import pymongo
import json
from bson.objectid import ObjectId

app = Flask(__name__)


#connect to DB
try:
   mongo = pymongo.MongoClient(
    host ="localhost",
    port =27017,
    serverSelectionTimeoutMS = 1000
   )
   db = mongo.company
   mongo.server_info()
except:
    print("ERROR!!- Cannot connect to DB")

#########################

## User  Schemas
class User(db.Document):
    name = db.StringField(max_length=60)
    email = db.StringField(max_length=60)
    

@app.route("/users", methods=["GET"])
def  getAllUsers():
    try:
        data = list(db.users.find())
        for user in data:
            user["_id"] = str( user["_id"])
        return Response(
            response = json.dumps(data),
            status= 200,
            mimetype = "application/json"
        )
    except Exception  as ex:
        print(ex)
        return Response(
            response = json.dumps({"message":"Cannot Reacd User"}),
            status = 500,
            mimetype= "application/json"
        )








@app.route('/users', methods=["POST"])
def createUser(): 
    _json = request.json
    try:
        user = {"name":  _json["name"],
               "lastName":  _json["lastName"]}
        dbResponse = db.users.insert_one(user)
        print(dbResponse.inserted_id)
        return Response(
            response = json.dumps({"message":"user created", "id": f"{dbResponse.inserted_id}"}),
            status = 200,
            mimetype= "application/json"
        )
        # for attr in dir(dbResponse):
        # print(attr)
    except Exception as ex:
        print("***")
        print(ex)
    


################################
if __name__ == "__main__":
    app.run(port= 3005, debug=True)