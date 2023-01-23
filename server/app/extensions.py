import pymongo
import tweepy
from .settings import consumer_key, consumer_secret, access_token, access_token_secret, bearer_token



mongo = pymongo.MongoClient(
    host ="localhost",
    port =27017,
    serverSelectionTimeoutMS = 1000
   )
db = mongo.company
mongo.server_info()

client = tweepy.Client(bearer_token, consumer_key, consumer_secret, access_token, access_token_secret)


# Authenticate with the Twitter API
auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)
api = tweepy.API(auth)
print(api)
try:
    api.verify_credentials()
    print("everything worked well")
except:
    print("somehing went wrong")
