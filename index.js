const KEYWORDS = [
  "activities assistant",
  "activity aide",
  "bsn",
  "care assistant",
  "care giver",
  "caregiver",
  "ccma",
  "certified medic",
  "chha",
  "clinical administrative assistant",
  "clinical tech",
  "cma",
  "cmt",
  "cna",
  "companion",
  "crma",
  "dialysis",
  "direct care",
  "direct health",
  "direct support"
  "dsp",
  "emergency room tech",
  "emergency tech",
  "er tech",
  "geriatric",
  "gna",
  "habilitation tech",
  "health tech",
  "hha",
  "home aide",
  "home care
  "home health",
  "homemaker",
  "hospice",
  "hospitality",
  "lna",
  "lpn",
  "lvn",
  "maa",
  "med assistant",
  "med tech",
  "medical administrative assistant",
  "medical assistant",
  "medication",
  "medicine aide",
  "medicine tech",
  "multi-skilled tech",
  "nst",
  "nurse",
  "nursing",
  "ob tech",
  "obstetrics tech",
  "orderly",
  "palliative care assistant",
  "patient care assistant",
  "patient care tech",
  "patient safety observer",
  "patient transporter",
  "pca",
  "pct",
  "pediatric multi-functional tech",
  "personal care",
  "personal support",
  "phlebotom",
  "practical nurs",
  "psw",
  "rca",
  "rehab",
  "resident",
  "restorative",
  "rn",
  "rna",
  "safety observation",
  "sitter",
  "stna",
];

function titleIncludesKeyword(title) {
  const lowerCased = title.toLowerCase();
  for (const keyword of KEYWORDS) {
    if (lowerCased.includes(keyword)) {
      return true;
    }
  }
  return false;
}

module.exports = { titleIncludesKeyword };
