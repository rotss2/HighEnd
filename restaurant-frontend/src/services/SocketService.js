import io from 'socket.io-client';

const socket = io('http://localhost:5000'); // Update this with the Flask backend URL

const joinQueue = (partySize) => {
  socket.emit('joinQueue', { partySize });
};

const onQueueUpdate = (callback) => {
  socket.on('queueUpdate', (data) => {
    callback(data);
  });
};

export { joinQueue, onQueueUpdate };