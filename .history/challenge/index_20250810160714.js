// filesystem modulunu projeye dahil ediyoruz
const fs = require("fs");
// fs.readFileSync ile title.txtnin icerigini okuduk ve bu icerigi title(baslik) dfeğişkenine atadık
const title = fs.readFileSync("./challenge/title.txt", "utf-8");
// fs.readFileSync ile content.tsx icerigini okuduk ve bu icerigi title(baslik) dfeğişkenine atadık
const content = fs.readFileSync("./challenge/content.txt", "utf-8");

fs.writeFileSync(`./${title}`, content);
console.log(`${title} title ismindeki dosya basariyla yazildi`);
