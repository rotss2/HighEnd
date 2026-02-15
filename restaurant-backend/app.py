from flask import Flask, request, jsonify
from flask_socketio import SocketIO, emit
from datetime import datetime

app = Flask(__name__)
socketio = SocketIO(app)

# Simulate a queue and table data
queue = []
tables = [{"id": 1, "capacity": 4, "status": "available"}, {"id": 2, "capacity": 2, "status": "available"}]

@app.route("/reserve", methods=["POST"])
def reserve_table():
    customer = request.json
    table = find_available_table(customer['party_size'])
    if table:
        table['status'] = 'reserved'
        reservation = {"customer": customer, "table": table, "time": datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
        return jsonify({"message": "Reservation confirmed", "reservation": reservation}), 200
    return jsonify({"message": "No available table for the given party size"}), 400

@app.route("/join_queue", methods=["POST"])
def join_queue():
    customer = request.json
    queue.append(customer)
    emit_queue_update()
    return jsonify({"message": "Added to queue", "queue": queue}), 200

@app.route("/queue_status", methods=["GET"])
def queue_status():
    return jsonify({"queue": queue, "tables": tables})

def find_available_table(party_size):
    for table in tables:
        if table['status'] == 'available' and table['capacity'] >= party_size:
            return table
    return None

def emit_queue_update():
    # Notify frontend about the queue status
    socketio.emit('queueUpdate', {'position': len(queue), 'estimatedWaitTime': len(queue) * 10})

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=5000)