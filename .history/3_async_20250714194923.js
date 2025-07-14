const fs = require("fs");

/* 
ASENKRON 
Asenkron islemler basladiginda ayni anda kod calismaya baslar ve yurumeye devam eder.
node.js islemi arkaplanda yurutulur ve tamamlandiginda callback function ile sonuc dondurur, bu fonksiyonun icine islemin tamamlandiginda dait loglar vs de konulabilir.

Asenkron islemler node.js single-thread yapisindan dolayi performansi arttirir cunku bir islem devam ederken diger islemler engellenmeden yurutulebilir.

Asenkron Nerelerde Kullanilir?

Performansin onemli oldugu yerlerde ve kullanicinin beklemesini istemedigimiz yerlerde asenkron yontem kullanmaliyiz. Buyuk dosya varsa ya da daha fazla girdi ve cikti varsa asenkron tercih etmemiz gerekir.
*/
fs.readFile("./data/ornek1.txt", "utf-8", (err, data) => {
  console.log("Dosya okundu!: ", data);
});
