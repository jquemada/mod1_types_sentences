/**
 * Corrector para la práctica de tipos-sentencias
 */

// IMPORTS
const should = require('chai').should();
const path = require('path');
const fs = require('fs-extra');
const Utils = require('./utils');
const to = require('./to');
const execFile = require("child_process").execFile;

// PARAMETROS DE ENTRADA
const args = JSON.parse(JSON.stringify(process.argv));
const ruta_entrega = path.resolve(args[2]);
console.log(ruta_entrega);

// ERRORES CRÍTICOS
let error_critico = null;

// SALIDA ESPERADA
let salida = "";
const ESPERADA = `
Good morning, its 11 hours

Número PI con 6 decimales: 3.141593

0 dec = 0 hex = 0 oct = 0 bin
1 dec = 1 hex = 1 oct = 1 bin
2 dec = 2 hex = 2 oct = 10 bin
3 dec = 3 hex = 3 oct = 11 bin
4 dec = 4 hex = 4 oct = 100 bin
5 dec = 5 hex = 5 oct = 101 bin
6 dec = 6 hex = 6 oct = 110 bin
7 dec = 7 hex = 7 oct = 111 bin
8 dec = 8 hex = 10 oct = 1000 bin
9 dec = 9 hex = 11 oct = 1001 bin
10 dec = a hex = 12 oct = 1010 bin
11 dec = b hex = 13 oct = 1011 bin
12 dec = c hex = 14 oct = 1100 bin
13 dec = d hex = 15 oct = 1101 bin
14 dec = e hex = 16 oct = 1110 bin
15 dec = f hex = 17 oct = 1111 bin
16 dec = 10 hex = 20 oct = 10000 bin
17 dec = 11 hex = 21 oct = 10001 bin
18 dec = 12 hex = 22 oct = 10010 bin
19 dec = 13 hex = 23 oct = 10011 bin
20 dec = 14 hex = 24 oct = 10100 bin

1 dec = 1 hex = 1 oct = 1 bin
3 dec = 3 hex = 3 oct = 11 bin
5 dec = 5 hex = 5 oct = 101 bin
7 dec = 7 hex = 7 oct = 111 bin
9 dec = 9 hex = 11 oct = 1001 bin
21 dec = 15 hex = 25 oct = 10101 bin
23 dec = 17 hex = 27 oct = 10111 bin
25 dec = 19 hex = 31 oct = 11001 bin

Hola en chino se escribe así:  嗨，你好吗

El programa ha acabado de ejecutar: Tue Sep 04 2018 11:07:56 GMT+0200 (Romance Daylight Time)
`;
const LONG_SALIDA_EXP = ESPERADA.split(/\r?\n\r?\n/).length;

//TESTS
describe("Práctica Tipos", function () {

    it(`1: Comprobando que existe el archivo de la entrega...`, async function () {
        this.puntuacion = 1;
        this.msg_ok = `Se ha encontrado el archivo '${ruta_entrega}'`;
        this.msg_err = `No se ha encontrado el directorio '${ruta_entrega}'`;
        const [error_ruta, ruta_ok] = await to(fs.pathExists(ruta_entrega));
        if (error_ruta) {
            error_critico = this.msg_err;
        }
        ruta_ok.should.be.equal(true);
    });

    it(`2: Ejecutando el archivo 'mod1_tipos_sent.js'`, async function () {
        this.puntuacion = 1;
        if (error_critico) {
            this.msg_err = error_critico;
            false.should.be.equal(true);
        } else {
            this.msg_ok = "El archivo se ha ejecutado con éxito";
            [error_ejecucion, salida] = await to(new Promise((resolve, reject) => {
                execFile('node', [ruta_entrega], {encoding: 'utf8'}, (err, stdout) =>
                    err ? reject(err) : resolve(stdout))
            }));
            if (error_ejecucion) {
                this.msg_err = `Error ejecutando el archivo, recibido: ${error_ejecucion}`;
                error_critico = this.msg_err;
            } else {
                salida = salida.split(/\r?\n\r?\n/);
            }
            should.not.exist(error_ejecucion);
        }
    });

    it(`3: Comprobando la longitud de la salida`, async function () {
        this.puntuacion = 1;
        if (error_critico) {
            this.msg_err = error_critico;
            false.should.be.equal(true);
        } else {
            this.msg_ok = "La longitud de la salida es correcta";
            long_salida = salida.length;
            this.msg_err = `La longitud de la salida no es la esperada.\n Esperados ${LONG_SALIDA_EXP} bloques, Leídos: ${long_salida} bloques`;
            long_salida.should.be.equal(LONG_SALIDA_EXP)
        }
    });

    it(`4: Comprobando el saludo inicial`, async function () {
        this.puntuacion = 1.5;
        if (error_critico) {
            this.msg_err = error_critico;
            false.should.be.equal(true);
        } else {
            console.log(salida[0]);
            this.msg_ok = "Se ha encontrado el saludo correcto";
            let hour = new Date().getHours();
            if ((6 < hour) && (hour <= 12)) {
                this.esperada = /[d[í|i]as|morning]/i;
            } else if (hour < 22) {
                this.esperada = /[tardes|afternoon]/i;
            } else {
                this.esperada = /[noches|night]/i;
            }
            this.msg_err = `No se ha encontrado el saludo correcto.\nEsperado: ${this.esperada}, Recibido: ${salida[0].trim()}`;
            Utils.busca(this.esperada, salida[0]).should.be.equal(true);
        }
    });

    it(`5: Comprobando que se imprime PI`, async function () {
        this.puntuacion = 1;
        if (error_critico) {
            this.msg_err = error_critico;
            false.should.be.equal(true);
        } else {
            this.msg_ok = "Se ha encontrado PI con 6 decimales";
            this.esperada = "3.141593";
            this.msg_err = `No se ha encontrado PI con 6 decimales.\nEsperado: ${this.esperada}, Recibido: ${salida[1].trim()}`;
            Utils.busca(this.esperada, salida[1]).should.be.equal(true);
        }
    });

    it(`6: Comprobando la tabla de equivalencia`, async function () {
        this.puntuacion = 1;
        if (error_critico) {
            this.msg_err = error_critico;
            false.should.be.equal(true);
        } else {
            this.msg_ok = "Se han encontrado todos los valores";
            this.error = false;
            this.lineas = salida[2].split(/\r?\n/);
            for (let d in this.lineas) {
                this.mireg = `.+?${d}.+?${(d >>> 0).toString(16)}.+?${(d >>> 0).toString(8)}.+?${(d >>> 0).toString(2)}.+?`;
                this.esperada = new RegExp(this.mireg);
                let ok = Utils.busca(this.esperada, this.lineas[d]);
                if (!ok) {
                    this.error = true;
                    this.msg_err = `No se ha encontrado el elemento ${d}.\nEsperado: ${this.esperada} Recibido: ${this.lineas[d].trim()}`;
                }
            }
            this.error.should.be.equal(false);
        }
    });

    it(`7: Comprobando la tabla de equivalencia de impares entre 10 y 20`, async function () {
        this.puntuacion = 1;
        if (error_critico) {
            this.msg_err = error_critico;
            false.should.be.equal(true);
        } else {
            this.msg_ok = "Se han encontrado todos los valores";
            this.error = false;
            this.lineas = salida[3].split(/\r?\n/);
            let i = 0;
            for (let d = 0; d <= 26; ++d) {
                if (((d % 2) === 1) && ((d < 10) || (d > 20))) {
                    this.mireg = `.+?${d}.+?${(d >>> 0).toString(16)}.+?${(d >>> 0).toString(8)}.+?${(d >>> 0).toString(2)}.+?`;
                    this.esperada = new RegExp(this.mireg);
                    let ok = Utils.busca(this.esperada, this.lineas[i]);
                    if (!ok) {
                        this.error = true;
                        this.msg_err = `No se ha encontrado el elemento ${i}.\nEsperado: ${this.esperada} Recibido: ${this.lineas[i].trim()}`;
                    }
                    i++;
                    this.error.should.be.equal(false);
                }
            }
        }
    });

    it(`8: Comprobando que se imprime unicode`, async function () {
        this.puntuacion = 1;
        if (error_critico) {
            this.msg_err = error_critico;
            false.should.be.equal(true);
        } else {
            this.msg_ok = "Se ha encontrado 'hola' en chino";
            this.esperada = "\u55e8\uff0c\u4f60\u597d\u5417";
            this.msg_err = `No se ha encontrado 'hola' en chino.\nEsperado: ${this.esperada}, Recibido: ${salida[4].trim()}`;
            Utils.busca(this.esperada, salida[4]).should.be.equal(true);
        }
    });

    it(`9: Comprobando que se imprime la fecha actual`, async function () {
        this.puntuacion = 1.5;
        if (error_critico) {
            this.msg_err = error_critico;
            false.should.be.equal(true);
        } else {
            this.msg_ok = "Se ha encontrado la fecha actual";
            this.fecha = new Date().getUTCFullYear().toString();
            this.esperada = new RegExp(this.fecha);
            this.msg_err = `No se ha encontrado el año actual.\nEsperado: ${this.esperada}, Recibido: ${salida[5].trim()}`;
            Utils.busca(this.esperada, salida[5]).should.be.equal(true);
        }
    });
})
;