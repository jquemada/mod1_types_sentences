/*
  Lanzador del corrector
  Recibe un parámetro de configuración (directorio o url de la práctica)
 */

const Mocha = require("mocha");
const ruta_practica = "./tests/mod1_types_sentences.test.js";

let puntuacion = 0;
let puntuacion_total = 0;

new Mocha({
    reporter: function () {
    }
})
    .addFile(ruta_practica)
    .run()
    .on('pass', function (test) {
        puntuacion += test.ctx.puntuacion;
        puntuacion_total += test.ctx.puntuacion;
        process.stdout.write(
            `\nPrueba: ${test.title}
         Puntuacion: ${test.ctx.puntuacion}/${test.ctx.puntuacion}
         Observaciones: ${test.ctx.msg_ok}\n`
        );
    })
    .on('fail', function (test, err) {
        if ((test.title !== '"after all" hook') && (test.title !== '"before all" hook')) {
            puntuacion_total += test.ctx.puntuacion;
            process.stdout.write(
                `\nPrueba: ${test.title}
         Puntuacion: 0/${test.ctx.puntuacion}
         Observaciones: ${test.ctx.msg_err}\n`);
        } else {
            console.error("Error lanzador: " + err);
        }
    })
    .on('end', function (test) {
        process.stdout.write(`Resultado Final: ${puntuacion}/${puntuacion_total}`);
    });