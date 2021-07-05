//La sentencia import se usa para importar funciones que han sido exportadas desde un módulo externo.
import { cipher } from './cipher.js';
//console.log(cipher);


let code = document.getElementById('btnCode');
//let decode = document.getElementById('btnDecode');


let encryptedMessage = document.getElementById('encryptedMessage');


code.addEventListener('click', (event) => {
    console.log('sirvo')
        // Cancela el evento si este es cancelable, 
        // sin detener el resto del funcionamiento del evento, es decir, 
        // puede ser llamado de nuevo.
    event.preventDefault();
    let message = document.getElementById('message').value;
    message = message.toUpperCase();
    console.log(message);
    let positions = document.getElementById('positions').value;
    encryptedMessage.innerHTML = cipher.encode(positions, message);
});

// decode.addEventListener('click', (event) => {
//     event.preventDefault();
//     let positions = document.getElementById('positions').value;
//     encryptedMessage.innerHTML = cipher.decode(positions, message);
// });