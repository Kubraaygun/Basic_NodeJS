// filesystem modulunu projeye dahil ediyoruz
const fs = require("fs");
// fs.readFileSync ile dosyamizin icerigini okuduk ve bu icerigi title(baslik) dfeğişkenine atadık
const title = fs.readFileSync("./title.txt", "utf-8");

const content = fs.readFileSync("./content.txt", "utf-8");