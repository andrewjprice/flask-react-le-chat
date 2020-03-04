from flask import Flask, render_template
from flask_socketio import SocketIO, emit

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'

socketio = SocketIO(app)

@socketio.on('my event')
def test(self):
    emit('ok', {'data': 'success'})

if __name__ == '__main__':
    socketio.run(app)