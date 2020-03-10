from flask import Flask, render_template
from flask_socketio import SocketIO, emit, send, join_room, leave_room

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'

socketio = SocketIO(app, cors_allowed_origins="*")

@socketio.on('send_message')
def send_message(message):
    send(message, broadcast=True)

@socketio.on('register_user')
def register_user(data):
    user = data['username']
    emit('register_user', {'user': user}, broadcast=True)

@socketio.on('unregister_user')
def unregister_user(data):
    user = data['username']
    emit('unregister_user', {'user': user}, broadcast=True)

if __name__ == '__main__':
    socketio.run(app)