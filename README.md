# Entrega_1

Realizar un programa JavaScript para node.js que muestre por consola lo siguiente:

1) Primera línea en blanco
2) Línea con el siguiente saludo:

```
“Good morning/afternoon/night, it’s xxx o’clock”
```

Utilizar if...else y el método getHour() del objeto Date para obtener el saludo:

- getHour() devuelve la hora del día: 0-23. El saludo debe ser: Buenas noches (22h-6h),
Buenos días (7h-12h) y Buenas tardes (13h-22h).
2) Una línea en blanco
3) En la siguiente línea: Number PI with 6 decimals: (Pi con 6 decimales)
4) Una línea en blanco
5) La tabla de equivalencia entre decimal, hexadecimal, octal y binario de los números enteros
de 0 a 22:

```
0 dec = 0 hex = 0 oct = 0 bin
1 dec = 1 hex = 1 oct = 1 bin
......
21 dec = 15 hex = 25 oct = 10101 bin
22 dec = 16 hex = 26 oct = 10110 bin
```

Cada línea de la tabla debe generarse con una función que recibe solo el número decimal
como parámetro y muestra por consola la línea con el valor representado en decimal,
hexadecimal, octal y binario. Utilizar una plantilla de string ES6 para generar la línea.

6) Una línea en blanco
7) La misma tabla de equivalencia entre decimal, hexadecimal, octal y binario pero solo con
primeros números impares de entre 0 y 22, que no están dentro del intervalo de 10 a 20:

```
1 dec = 1 hex = 1 oct = 1 bin
3 dec = 3 hex = 3 oct = 11 bin
......
9 dec = 9 hex = 11 oct = 10101 bin
21 dec = 15 hex = 25 oct = 10101 bin

```
Realizar el programa añadiendo una sentencia if...else en el bucle anterior, de forma que
solo se muestren en consola los números que cumplan el nuevo requisito.

8) Una línea en blanco
9) La siguiente frase utilizando caracteres escapados para representar hola en chino:
```
Hi in Chinese is written as: 嗨，你好吗.
```
嗨，你好吗 se corresponde con los siguientes códigos UNICODE escapados:
```
\u55e8\uff0c\u4f60\u597d\u
```
10) Una línea en blanco
11) Finalizar con la siguiente línea:
```
"The program has finished"
```

## Instrucciones para la Entrega y Evaluación.

En la entrega se debe entregar el fichero mod1_types_sentences.js (adjunto) con el código del
programa indicado.

El evaluador debe descargar dicho fichero y ejecutarlo para comprobar que funciona
correctamente.

Dado que es un curso para principiantes, ante la duda les pedimos que sean benevolentes con
sus compañeros, porque muchos participantes están empezando y los primeros pasos siempre
son difíciles. El objetivo de este curso es sacar el máximo provecho al trabajo que están
dedicando, por lo que les recomendamos cuando evalúen a principiantes, que utilicen la
evaluación para ayudar a sus compañeros enviando comentarios sobre la corrección del código,
su claridad, legibilidad, estructuración y documentación.

**OJO! Una vez enviada, tanto la entrega, como la evaluación, está no se puede cambiar.**
Esperar a tener completa y revisada, tanto la entrega, como la evaluación antes de enviarlas.

## Comprobación automática de la práctica

El ejercicio encargado se puede probar con un programa-de-test, que al ejecutarlo en el ordenador
local, indica si el programa realizado sigue el enunciado o no. Este programa Pasa una batería de
tests que indican que partes funcionan bien y cuales no. El programa-de-prueba se puede
descargar de este enlace del portal GitHub:

<https://github.com/practicas-ging/mod1_types_sentences>

Esta página permite descargar al ordenador local un fichero ZIP, que debe descomprimirse. O si
Git está instalado también pueden clonarse con “git clone ..”. Una vez descargado, se debe entrar
en el directorio **entrega_1** (descargado) y completar el programa pedido en los ficheros a
entregar. El esqueleto de estos ficheros están también el directorio **entrega_1** del programa-de-
test copiado. El programa-de-test se copia, instala y ejecuta con los siguientes comandos:

```bash
$ ## El .zip del programa-de-test puede descargarse o copiarse con el siguiente comando:
$ git clone https://github.com/practicas-ging/mod1_types_sentences
$
$ cd entrega_1 ## El directorio de trabajo pasa a ser el del proyecto copiado: entrega_
$
$ npm install ## Instala el programa-de-test, que es un paquete npm
$
$ npm run tests ## Ejecuta el programa-de-test dando realimentación sobre la
............................. ## entrega e indicando las partes correctas e incorrectas.
...(realimentación)....
$
$ npm run zip ## Este comando comprime los ficheros a entregar como un fichero xx.zip
$ ## El directorio de trabajo contiene ahora el fichero: mod1_types_sentences.zip
```

La instalación incluye también un compresor que genera el fichero mod1_types_sentences.zip, con los
ficheros de la practica, que puede subirse a la plataforma para su evaluación.


