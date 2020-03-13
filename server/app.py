from flask import Flask, render_template
from flask_socketio import SocketIO, emit, send, join_room, leave_room

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'

socketio = SocketIO(app, cors_allowed_origins="*")

users = []

@socketio.on('send_message')
def send_message(data):
    message = data['message']
    user = data['user']
    emit('send_message', {'user': user, 'message': message}, broadcast=True)

@socketio.on('register_user')
def register_user(user):
    if user not in users:
        users.append(user)
        emit('register_user', { 'users': users }, broadcast=True)

@socketio.on('unregister_user')
def unregister_user(data):
    user = data['user']
    print(user + ' disconnected from chat')
    if user in users:
        users.remove(user)
    emit('unregister_user', { 'users': users }, broadcast=True)

if __name__ == '__main__':
    socketio.run(app)