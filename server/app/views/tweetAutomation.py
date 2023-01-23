from flask import  Blueprint, jsonify, request
from app.extensions import api


auto = Blueprint('auto', __name__ , url_prefix="/tweet")


@auto.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        try:
            body = request.json
            image = request.files.get('image')
            print(default_profile_image)
            if image:
                # Do something with the image file
                filename = secure_filename(image.filename)
                file_url = url_for('static', filename='upload/' + filename)
                image.save('path/to/save/image')
                tweet_content = { "tweet" : body["text"], "image_url": file_url}
                return  jsonify(tweet_content) 
            return  jsonify({'message': 'Image uploaded successfully'}) 
        except Exception as ex:
            print(ex)