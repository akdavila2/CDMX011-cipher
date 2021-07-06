//Acá debes implementar el objeto cipher, el cual ya está exportado en el boilerplate. 
//Este objeto (cipher) debe contener dos métodos:
//cipher.encode(offset, string): offset es el número de posiciones que queremos mover a la derecha en el alfabeto y
//string el mensaje (texto) que queremos cifrar.
//cipher.decode(offset, string): offset es el número de posiciones que queremos mover a la izquierda en el alfabeto 
//y string el mensaje (texto) que queremos descifrar.

// La declaración export se utiliza al crear módulos de JavaScript para exportar funciones, objetos o tipos de dato
// primitivos del módulo para que puedan ser utilizados por otros programas con la sentencia import.

//obj = { propertyKey: 'value' };
export const cipher = {
    encode: (offset, string) => {
        let encryptedMessage = '';
        //El metodo charCodeAt()devuelve el Unicode del carácter en el índice especificado en una cadena.
        for (let i = 0; i < string.length; i++) {
            let unicodeCharacter = string.charCodeAt(i);
            //String.fromCharCode() método estático que devuelve una cadena creada mediante el uso de una secuencia de valores Unicode especificada.
            let letter = String.fromCharCode((unicodeCharacter - 65 + parseInt(offset)) % 26 + 65);
            encryptedMessage = encryptedMessage + letter;
        }
        return encryptedMessage;
    },

    decode: (offset, string) => {
        let encryptedMessage = '';
        for (let i = 0; i < string.length; i++) {
            let unicodeCharacter = string.charCodeAt(i);
            let letter = String.fromCharCode((unicodeCharacter - 65 - parseInt(offset)) % 26 + 65);
            encryptedMessage = encryptedMessage + letter;
        }
        return encryptedMessage;
    }
}