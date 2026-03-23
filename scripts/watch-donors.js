const chokidar = require("chokidar");
const { exec } = require("child_process");
const path = require("path");

const filePath = path.join(process.cwd(), "data", "donors.xlsx");

console.log("👀 엑셀 변경 감지 시작...");
console.log(filePath);

chokidar.watch(filePath).on("change", () => {
  console.log("📄 엑셀 변경 감지 → 변환 시작");

  exec("npm run convert:donors", (err, stdout, stderr) => {
    if (err) {
      console.error("❌ 변환 실패:", err);
      return;
    }
    console.log(stdout);
  });
});