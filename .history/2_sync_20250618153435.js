//Modul: Modul, node.js'in farkli islemleri tamamlamak icin kullandigi kod bloklaridir.
//FS (FileSystem)

//Node.js modullerinden bir tanesi.
//Sahip oldugu moduller sayesinde dosya islemleri (olusturma, silme, okuma, yazma)ve duzenlemeler yapabiliriz.

//Node.js modulleri kullnmak icin once cagirmamiz gerekir
//require => importa benzer, disaridan dosya (modul) cekmeye yarar.
const fs = require("fs");
//fs modulu ile dosya islemleri yapabiliriz.
//1) Dosya Okuma
const text = fs.readFileSync("./data/ornek.txt", "utf-8");
//readFileSync => senkron okuma islemi yapar, yani dosya okunana kadar bekler.
//okudugumuz dosyayi consolde gosterelim
console.log(text);
