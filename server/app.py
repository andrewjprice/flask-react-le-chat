from flask import Flask, render_template
from flask_socketio import SocketIO, emit, send

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'

socketio = SocketIO(app, cors_allowed_origins="*")

@socketio.on('message')
def message(message):
    print(message)
    send("success", broadcast=True)
    return None

if __name__ == '__main__':
    socketio.run(app)