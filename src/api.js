import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:8000');



  
export const sendMessage = (data) => {
  socket.emit('sendMessage', data)
}
  
export const sendHa = (data) => {
  socket.emit('sendMessage', data)
}






