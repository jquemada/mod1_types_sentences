const fs = require('fs');
const archiver = require('archiver');

// Obtiene el nombre de la práctica de args[2]
const args = JSON.parse(JSON.stringify(process.argv));
if (!(args.length > 2)) {
    console.error("Falta el nombre de la práctica");
    process.exit(1);
}
const nombre = args[2];
const output = fs.createWriteStream(__dirname + "/../"+nombre+"_entregable.zip");
var archive = archiver('zip', {
    zlib: { level: 9 } // Sets the compression level.
});
archive.pipe(output);
archive.glob('*', {"ignore": ['node_modules']});
archive.finalize();
// zipper.sync.zip("../").compress().save(nombre+"_entregable.zip");