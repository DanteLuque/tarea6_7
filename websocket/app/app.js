const socket = io('ws://localhost:7000');

const userName = prompt('¿Cuál es tu nombre?');
socket.emit('register', userName);

socket.on('message', text => {
    const msg = document.createElement('li');
    msg.innerHTML = text;
    document.querySelector('ul').appendChild(msg)

});

document.querySelector('button').onclick = () => {
    const text = document.querySelector('input').value;
    socket.emit('message', text)
    document.querySelector('input').value = '';
}