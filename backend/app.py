from flask import Flask, jsonify
from flask_cors import CORS

DEBUG = True

app = Flask(__name__)
app.config.from_object(__name__)

CORS(app)


@app.route('/api/healthcheck', methods=['GET'])
def healthcheck():
    return jsonify('healthy')


@app.route('/ping', methods=['GET'])
def ping_pong():
    return jsonify('pong')


if __name__ == '__main__':
    app.run()
