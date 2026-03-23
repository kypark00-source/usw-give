const XLSX = require("xlsx");
const fs = require("fs");
const path = require("path");

const excelPath = path.join(process.cwd(), "data", "donors.xlsx");
const outputPath = path.join(process.cwd(), "public", "donors.json");
const sheetName = "donors";

function normalizeVisible(value) {
  if (value === undefined || value === null) return false;
  return String(value).trim().toUpperCase() === "Y";
}

function normalizeCategory(value) {
  if (!value) return "uncategorized";

  const raw = String(value).trim();

  const map = {
    동문: "alumni",
    교수: "professor",
    직원: "staff",
    고액기부자: "high_value",
  };

  return map[raw] || raw;
}

try {
  if (!fs.existsSync(excelPath)) {
    throw new Error(`엑셀 파일을 찾을 수 없습니다: ${excelPath}`);
  }

  const workbook = XLSX.readFile(excelPath);
  const worksheet = workbook.Sheets[sheetName];

  if (!worksheet) {
    throw new Error(`시트 "${sheetName}" 를 찾을 수 없습니다.`);
  }

  const rows = XLSX.utils.sheet_to_json(worksheet, {
    defval: "",
  });

  const filteredRows = rows
    .map((row) => {
      const categoryRaw = String(row.category || "").trim();
      const name = String(row.name || "").trim();
      const amount = String(row.amount || "").trim();
      const note = String(row.note || "").trim();

      return {
        category: normalizeCategory(categoryRaw),
        name,
        amount,
        note,
        visible: normalizeVisible(row.visible),
        sort_order: Number(row.sort_order || 0),
        preview_text: `${name} ${categoryRaw} ${amount}`.trim(),
      };
    })
    .filter((row) => row.name && row.amount && row.visible);

  filteredRows.sort((a, b) => {
    if (a.category !== b.category) {
      return a.category.localeCompare(b.category, "ko");
    }
    return a.sort_order - b.sort_order;
  });

  const grouped = {};

  for (const row of filteredRows) {
    if (!grouped[row.category]) {
      grouped[row.category] = [];
    }

    grouped[row.category].push({
      name: row.name,
      amount: row.amount,
      note: row.note,
      sort_order: row.sort_order,
      preview_text: row.preview_text,
    });
  }

  fs.writeFileSync(outputPath, JSON.stringify(grouped, null, 2), "utf-8");

  console.log("완료: donors.json 생성됨");
  console.log(outputPath);
  console.log("엑셀 경로:", excelPath);
} catch (error) {
  console.error("변환 실패:", error.message);
  process.exit(1);
}