const KEYWORDS = [
  "activities assistant",
  "activity aide",
  "care assistant",
  "care giver",
  "caregiver",
  "certified clinical administrative assistant",
  "certified home health aide",
  "certified medication technician",
  "certified medication aide",
  "certified medicine aide",
  "certified medical assistant",
  "certified nurse aide",
  "certified nursing assistant",
  "certified residential medicine aide",
  "clinical technician",
  "cma",
  "cmt",
  "cna",
  "companion",
  "crma",
  "dialysis assistant",
  "dialysis tech",
  "direct health professional",
  "direct support professional",
  "direct support specialist",
  "dsp",
  "emergency room technician",
  "emergency technician",
  "geriatric nursing assistants",
  "gna",
  "home care aide",
  "home care worker",
  "home health aide",
  "hospice aide",
  "licensed nursing assistant",
  'lpn',
  "lna",
  "med tech",
  "medical assistant",
  "medication associate",
  "medication technician",
  "multi-skilled technician",
  "nurse aide",
  "nurse support technician",
  "nursing technician",
  "orderly",
  "patient care assistant",
  "patient care tech",
  "patient safety observer",
  "patient transporter",
  "pca",
  "pct",
  "pediatric multi-functional technician",
  "personal care aide",
  "personal care assistant",
  "personal care associate",
  "personal support worker",
  "phlebotomist",
  "psw",
  "residential counselor",
  "resident caregiver",
  "residential support companion",
  "restorative aide",
  "resident care advisor",
  "resident assistant",
  "sitter",
  "state-tested nursing assistant",
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
