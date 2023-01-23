from flask import Flask
from .views.userviews import main
from .views.tweetAutomation import auto
from .extensions import db 
from flask_cors import CORS


def create_app(config_object = 'app.settings'):
    app= Flask(__name__, instance_relative_config=True)
    CORS(app, supports_credentials=True)
    app.config['DEBUG'] = True
    app.config.from_object(config_object)

    app.mongo = db

    app.register_blueprint(main)
    app.register_blueprint(auto)
         
    return app