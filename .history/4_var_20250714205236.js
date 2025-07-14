const path = require("node:path");

// Dosya dizininde kullanilabilecek metodlar

const text = "./data/ornek.txt";
console.log("dirname(): ", path.dirname(text), "\n"); // klasor yolunun ismi
console.log("basename():", path.basename(text), "\n"); // dosyanin ismi
console.log("extname(): ", path.extname(text), "\n"); // dosyanin uzantisi

//iki veya daha fazla yolu birlestirme
const newFilePath = ["/media", "photo", "profile.png"];
console.log("join():", path.join(...newFilePath), "\n"); // dizinleri birlestirir

// dosyanin mutlak konumunu bul
console.log("resolve():", path.resolve("./data/ornek.txt"), "\n"); // mutlak yolu verir
//yolu en basit hale getirme

console.log("normalize():", path.normalize("/users/start.tsx"), "\n"); // fazladan / varsa temizler
