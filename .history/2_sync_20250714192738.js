//Modul: Modul, node.js'in farkli islemleri tamamlamak icin kullandigi kod bloklaridir.
//FS (FileSystem)

//Node.js modullerinden bir tanesi.
//Sahip oldugu moduller sayesinde dosya islemleri (olusturma, silme, okuma, yazma)ve duzenlemeler yapabiliriz.

//Node.js modulleri kullnmak icin once cagirmamiz gerekir
//require => importa benzer, disaridan dosya (modul) cekmeye yarar.
const fs = require("fs");

//---------------------------------------------------

//SENKRON (Sync)
//Senkron bir islem tamamlanincaya kadar, diger hicbir kodunn calismasina izin vermez
//Dolayisiyla islem bitene kadar alt satirlardaki hicbir kod calismaz.
//Senkron islemler ozellikle buyuk verilerde islem yaparken kullanildiginda bekleme suresini cok arttirir ve performansi dusurur.
// Bunun sebebi de node.js tek is parcacigiyla calistigindan bir senkron islem devam ederken diger islemler beklemeye alinir.

// senkronu nerede kullanabiliriz?
// Kucuk, basit islemlerde veya beklemenin kritik oldugu yerlerde kullaniriz.

//---------------------------------------------------
//fs modulu ile dosya islemleri yapabiliriz.
//1) Dosya Okuma
//readFileSync => senkron okuma islemi yapar, yani dosya okunana kadar bekler.
const text = fs.readFileSync("./data/ornek.txt", "utf-8");
//okudugumuz dosyayi consolde gosterelim
// console.log(text);

//2)Dosya Yazma
// Gonderilecek metnin icerigini hazirliyoruz..
const newText =
  "Merhaba, bu dosya senkron olarak yazildi!" +
  "Olusturulma Tarihi" +
  new Date().toLocaleDateString();
//eger verilen dizinde dosya zaten varsa gunceller, yoksa yenisini olusturup icerigini belirler.
// fs.writeFileSync("./data/output.txt", newText);
// console.log("\nDosya yazma islemi tamamlandi! \n ");

//3) Dosya Silme
// fs.unlinkSync("./data/bozuk.txt");
//console.log("Bozuk dosya silindi!");

// 4) Dizin (Klasor) Olusturma
fs.mkdirSync("challenge");
console.log("Challenge dizini olusturuldu!");

//5)Dosya/Dizinin Adini Degistirme

fs.renameSync("./challenge", "./important");
