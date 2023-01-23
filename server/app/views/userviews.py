from flask import  Blueprint, jsonify
from app.extensions import api
import os
import json




main = Blueprint('main', __name__ , url_prefix="/api")


@main.route('/tweets/<username>')
def tweets(username):
    try:
      tweets = api.user_timeline(screen_name=username, count=20)
      return jsonify([tweet._json for tweet in tweets])
     
     
    except Exception  as ex:
        print(ex)
      
@main.route("/user/<username>")
def get_user(username):
    user = api.get_user(screen_name=username)
    user_info = {
       'name': user.name,
        'screen_name': user.screen_name,
        'description': user.description,
        'location': user.location,
        'followers_count': user.followers_count,
        'friends_count': user.friends_count,
        'statuses_count': user.statuses_count,
        'created_at': user.created_at.strftime("%Y-%m-%d %H:%M:%S"),
        'profile_image_url': user.profile_image_url,
        'default_profile': user.default_profile,
        'default_profile_image': user.default_profile_image,
        'verified': user.verified
    }
    return jsonify(user_info)

@main.route("/blocked/<username>")
def get_blocked(username):
    blocked_users = api.get_blocks(screen_name=username)
    blocked_users_list = [user.screen_name for user in blocked_users]
    return jsonify(blocked_users_list)
