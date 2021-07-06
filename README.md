# Cifrado César - Family Safely
## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Quiénes son los principales usuarios de producto](#2-quiénes-son-los-principales-usuarios-deproducto)
* [3. Cuáles son los objetivos de estos usuarios en relación con tu producto.](#3-cuáles-son-los-objetivos-de-estos-usuarios-en-relación-con-tu-producto.)
* [4. Cómo crees que el producto que estás creando está resolviendo sus problemas.](#4-cómo-crees-que-el-producto-que-estás-creando-está-resolviendo-sus-problemas.)
* [5. Interfaz de usuario (UI)](#4-interfaz-de-usuario-UI)
* [6. Prototipo](#5-prototipo)

## 1. Preámbulo

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher)
es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio
César lo usaba para enviar órdenes secretas a sus generales en los campos de
batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es
un tipo de cifrado por sustitución, es decir que cada letra del texto original
es reemplazada por otra que se encuentra un número fijo de posiciones
(desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

* La letra A se cifra como D.
* La palabra CASA se cifra como FDVD.
* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con
mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la
comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas
más complejos de codificación, como el cifrado Vigenère, e incluso tiene
aplicación en el sistema ROT13.

## 2. Quiénes son los principales usuarios de producto

El producto Family Safely esta dirigido a la familia, con la finalidad que se realice una comunicación secreta entre ellos.

* Padres
* Hijos
* Hermanos

## 3. Cuáles son los objetivos de estos usuarios en relación con tu producto.

* Mantener comunicación discreta entre familiares.
* Enviar datos que solo deben saber los miembros de la familia ( contraseñas, datos de tarjetas, lugares de encuentro y telefonos.).

## 4. Cómo crees que el producto que estás creando está resolviendo sus problemas.

 La familia es lo mas importante que tenemos, y mantener una comunicación siempre es fundamental. Con Family Safely buscamos que exista seguridad en temas familiares que no queramos que personas ajenas tengan conocimiento, por ello velamos por la discreción y ciframos sus mensajes de una manera sencilla.

## 5. Interfaz de usuario (UI)

La interfaz permite al usuario:

* Elegir un desplazamiento (offset) indicando cuántas posiciones queremos que el cifrado desplace cada caracter.
* Insertar un mensaje (texto) que queremos cifrar.
* Ver el resultado del mensaje cifrado.
* Insertar un mensaje (texto) a descifrar.
* Ver el resultado del mensaje descifrado.


## 6. Prototipos.
Realice tres prototipos para la página, basandome en un diseño sencillo. Pidiendo feedback a 3 compañeras del bootcamp, todas eligieron la misma opcion.
Opción 1:<br>
<img src= "src/img/prototypeFamilia.png"><br>
Opción 2:<br>
<img src= "src/img/prototypePasteles.png"><br>
Opción 3: La empleada.<br>
<img src= "src/img/prototypeVersion2.png">