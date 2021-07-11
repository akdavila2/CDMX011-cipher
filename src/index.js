//La sentencia import se usa para importar funciones que han sido exportadas desde un módulo externo.
import cipher from './cipher.js';
const code = document.getElementById('btnCode');
const decode = document.getElementById('btnDecode');
const encryptedMessage = document.getElementById('encryptedMessage');
const clean = document.getElementById('btnRemove');
const message = document.getElementById('message');
const positions = document.getElementById('positions');

code.addEventListener('click', (event) => {
    // Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, 
    // puede ser llamado de nuevo. 
    //puedes mostrar una mejor experiencia de usuario por no recargar la pagina
    event.preventDefault();
    const result = cipher.encode(positions.value, message.value);
    encryptedMessage.innerHTML = result;
});

decode.addEventListener('click', (event) => {
    event.preventDefault();
    const result = cipher.decode(positions.value, message.value);
    encryptedMessage.innerHTML = result;
});

clean.addEventListener('click', (event) => {
    event.preventDefault();
    message.value = '';
    positions.value = '';
    encryptedMessage.innerHTML = '';
});