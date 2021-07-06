//La sentencia import se usa para importar funciones que han sido exportadas desde un módulo externo.
import { cipher } from './cipher.js';
console.log(cipher);
let code = document.getElementById('btnCode');
let decode = document.getElementById('btnDecode');
let encryptedMessage = document.getElementById('encryptedMessage');
let clear = document.getElementById('btnRemove');

code.addEventListener('click', (event) => {
    console.log('sirvo')
        // Cancela el evento si este es cancelable, 
        // sin detener el resto del funcionamiento del evento, es decir, 
        // puede ser llamado de nuevo.
    event.preventDefault();
    console.log('sirvoCifrar');
    let message = document.getElementById('message').value;
    message = message.toUpperCase();
    console.log(message);
    let positions = document.getElementById('positions').value;
    console.log('Segunda ronda: estoy aqui')
    const result = cipher.encode(positions, message);
    console.log(result, 'segunda ronda result', encryptedMessage, encryptedMessage.innerHTML);
    encryptedMessage.innerHTML = result;
});

decode.addEventListener('click', (event) => {
    console.log('sirvoDescifrar')
    event.preventDefault();
    let message = document.getElementById('message').value;
    message = message.toUpperCase();
    console.log(message);
    let positions = document.getElementById('positions').value;
    encryptedMessage.innerHTML = cipher.decode(positions, message);
});

clear.addEventListener('click', (event) => {
    console.log('sirvoLimpiar')
    event.preventDefault();
    document.getElementById('message').value = '';
    document.getElementById('positions').value = '';
    document.getElementById('encryptedMessage').value = '';
});