const KEYWORDS = [
  "activities assistant",
  "activity aide",
  "care assistant",
  "care giver",
  "caregiver",
  "certified clinical administrative assistant",
  "certified home health aide",
  "certified medication technician",
  "certified medicine aide",
  "certified nurse aide",
  "certified nursing assistant",
  "certified residential medicine aide",
  "clinical technician",
  "cma",
  "cmt",
  "cna",
  "companion",
  "crma",
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
  "lna",
  "med tech",
  "medical assistant",
  "medication technician",
  "multi-skilled technician",
  "nurse aide",
  "nurse support technician",
  "nursing technician",
  "patient care assistant",
  "patient care tech",
  "patient safety observer",
  "pca",
  "pct",
  "pediatric multi-functional technician",
  "personal care aide",
  "personal support worker",
  "psw",
  "residential counselor",
  "residential support companion",
  "restorative aide",
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
