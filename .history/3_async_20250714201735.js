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

// fs.writeFile("./data2/output2.txt", "7.sezon backendden selamlar", (err) => {
//   if (err) {
//     return console.log("Hataad", err);
//   } else {
//     console.log("Dosya Yazma Islemi Tamamlandi!");
//   }
// });

// fs.unlink("./data/bozuk.txt", (err) => {
//   if (err) {
//     return console.log("Dosya Silme Islemi Sirasinda Hata Olustu", err);
//   } else {
//     console.log("Bozuk Dosya Silindi!");
//   }
// });

// Zincirleme Islemler => orn. okuma isleminin yazma islemine bagimli oldugu durum
fs.writeFile(
  "./data/newOutput.txt",
  "merhaba,guncellenmis yazi budur",
  (err) => {
    if (err) {
      return console.log("Dosya Yazma Islemi Sirasinda Hata Olustu", err);
    }
    //callback=> fonksiyon tamamlandiginda (hatali ya da hatasiz) calisacak fonksiyona denir.
    // yukarida yazdigimiz dosyayi oku ve bize gonder (bu ister asenkron ister senkron olsun)

    const text = fs.readFileSync("./data/newOutput.txt", "utf-8");
    console.log("Dosya Okundu: \n\n Kaydedilen Metin:\n\n :", text);
  }
);
