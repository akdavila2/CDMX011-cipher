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
        //Los primeros 126 códigos de Unicode encajan directamente con los códigos de caractéres de la codificación ASCII.
        //Del 32 - 126 son Caracteres ASCII imprimibles
        for (let i = 0; i < string.length; i++) {
            let unicodeCharacter = string.charCodeAt(i);
            //String.fromCharCode() método estático que devuelve una cadena creada mediante el uso de una secuencia de valores Unicode especificada.
            if (unicodeCharacter >= 32 && unicodeCharacter <= 64) { // signos, numeros, operadores y caracteres especiales
                let letter = String.fromCharCode((unicodeCharacter - 32 + parseInt(offset)) % 26 + 32);
                encryptedMessage = encryptedMessage + letter;
            } else if (unicodeCharacter >= 65 && unicodeCharacter <= 90) { // Letras Mayusculas
                let letter = String.fromCharCode((unicodeCharacter - 65 + parseInt(offset)) % 26 + 65);
                encryptedMessage = encryptedMessage + letter;
            } else if (unicodeCharacter >= 97 && unicodeCharacter <= 122) { //Letras Minusculas
                let letter = String.fromCharCode((unicodeCharacter - 97 + parseInt(offset)) % 26 + 97);
                encryptedMessage = encryptedMessage + letter;
            } else if (unicodeCharacter >= 123 && unicodeCharacter <= 126) { // caracteres especiales
                let letter = String.fromCharCode((unicodeCharacter - 123 + parseInt(offset)) % 26 + 123);
                encryptedMessage = encryptedMessage + letter;
            } else {
                encryptedMessage = encryptedMessage + string[i];
            }
        }
        return encryptedMessage;
    },
    decode: (offset, string) => {
        let encryptedMessage = '';
        for (let i = 0; i < string.length; i++) {
            let unicodeCharacter = string.charCodeAt(i);
            if (unicodeCharacter >= 32 && unicodeCharacter <= 64) {
                let letter = String.fromCharCode((unicodeCharacter - 64 + parseInt(offset)) % 26 + 64);
                encryptedMessage = encryptedMessage + letter;
            }
            if (unicodeCharacter >= 65 && unicodeCharacter <= 90) {
                let letter = String.fromCharCode((unicodeCharacter - 90 - parseInt(offset)) % 26 + 90);
                encryptedMessage = encryptedMessage + letter;
            } else if (unicodeCharacter >= 97 && unicodeCharacter <= 122) {
                let letter = String.fromCharCode((unicodeCharacter - 122 - parseInt(offset)) % 26 + 122);
                encryptedMessage = encryptedMessage + letter;
            } else if (unicodeCharacter >= 123 && unicodeCharacter <= 126) {
                let letter = String.fromCharCode((unicodeCharacter - 126 - parseInt(offset)) % 26 + 126);
                encryptedMessage = encryptedMessage + letter;
            } else {
                encryptedMessage = encryptedMessage + string[i];
            }
        }
        return encryptedMessage;
    }
}