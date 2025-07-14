const path = require("node:path");

// Dosya dizininde kullanilabilecek metodlar

const text = "./data/ornek.txt";
console.log("dirname(): ", path.dirname(text), "\n"); // klasor yolunun ismi
console.log("basename():", path.basename(text)); // dosyanin ismi
console.log("extname(): ", path.extname(text)); // dosyanin uzantisi
