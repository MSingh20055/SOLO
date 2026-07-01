const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/roadmap.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Find the start of the state logic
const stateIndex = content.indexOf('function countDsaSolved(s){');
if (stateIndex !== -1) {
  content = content.substring(0, stateIndex);
}

// Add export to constants
content = content.replace(/const STORAGE_KEY/g, 'export const STORAGE_KEY');
content = content.replace(/const TOTAL_DAYS/g, 'export const TOTAL_DAYS');
content = content.replace(/const BOSS_DAYS_1IDX/g, 'export const BOSS_DAYS_1IDX');
content = content.replace(/const NEETCODE_GROUPS/g, 'export const NEETCODE_GROUPS');
content = content.replace(/const NEETCODE_250/g, 'export const NEETCODE_250');
content = content.replace(/const DAY_CONTENT/g, 'export const DAY_CONTENT');
content = content.replace(/const ROADMAP/g, 'export const ROADMAP');
content = content.replace(/const CAT_META/g, 'export const CAT_META');
content = content.replace(/const RANKS/g, 'export const RANKS');
content = content.replace(/const BOSS_DAY_INDICES/g, 'export const BOSS_DAY_INDICES');
content = content.replace(/const ACHIEVEMENTS/g, 'export const ACHIEVEMENTS');

// Fix the ACHIEVEMENTS types (any for now)
content = content.replace(/check:s=>/g, 'check:(s: any)=>');
content = content.replace(/check:\(s\)=>/g, 'check:(s: any)=>');

fs.writeFileSync(filePath, content);
console.log('Transformed roadmap.ts');
