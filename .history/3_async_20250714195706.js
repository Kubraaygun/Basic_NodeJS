const fs = require("fs");

/* 
ASENKRON 
Asenkron islemler basladiginda ayni anda kod calismaya baslar ve yurumeye devam eder.
node.js islemi arkaplanda yurutulur ve tamamlandiginda callback function ile sonuc dondurur, bu fonksiyonun icine islemin tamamlandiginda dait loglar vs de konulabilir.

Asenkron islemler node.js single-thread yapisindan dolayi performansi arttirir cunku bir islem devam ederken diger islemler engellenmeden yurutulebilir.

Asenkron Nerelerde Kullanilir?

Performansin onemli oldugu yerlerde ve kullanicinin beklemesini istemedigimiz yerlerde asenkron yontem kullanmaliyiz. Buyuk dosya varsa ya da daha fazla girdi ve cikti varsa asenkron tercih etmemiz gerekir.
*/
// fs.readFile("./data/ornek.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log("Hata Olustu", err);
//   } else {
//     console.log("Dosya Okundu: ", data);
//   }
// });

fs.writeFile("./data2/output2.txt", "7.sezon backendden selamlar", (err) => {
  if (err) {
    return console.log("Hata", err);
  } else {
    console.log("Dosya Yazma Islemi Tamamlandi!");
  }
});
