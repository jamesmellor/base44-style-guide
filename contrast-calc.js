// WCAG Contrast Ratio Calculator
const calculateLuminance = (r, g, b) => {
  const [rs, gs, bs] = [r, g, b].map(val => {
    val = val / 255;
    return val <= 0.03928 
      ? val / 12.92 
      : Math.pow((val + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
};

const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)
  ] : null;
};

const calculateContrastRatio = (color1, color2) => {
  const [r1, g1, b1] = hexToRgb(color1);
  const [r2, g2, b2] = hexToRgb(color2);
  const l1 = calculateLuminance(r1, g1, b1);
  const l2 = calculateLuminance(r2, g2, b2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return ((lighter + 0.05) / (darker + 0.05));
};

// Main calculation
const magenta = '#E91E8C';
const navy = '#23324f';
const ratio = calculateContrastRatio(magenta, navy);

console.log('=== WCAG Contrast Ratio Analysis ===\n');
console.log(`Foreground: ${magenta} (Electric Magenta)`);
console.log(`Background: ${navy} (BSU Navy)`);
console.log(`Contrast Ratio: ${ratio.toFixed(2)}:1\n`);

console.log(`WCAG AA (4.5:1): ${ratio >= 4.5 ? '✓ PASS' : '✗ FAIL'} (required for normal text)`);
console.log(`WCAG AAA (7:1): ${ratio >= 7 ? '✓ PASS' : '✗ FAIL'} (required for enhanced accessibility)\n`);

// Get luminance values
const [mr, mg, mb] = hexToRgb(magenta);
const [nr, ng, nb] = hexToRgb(navy);
const magentaLum = calculateLuminance(mr, mg, mb);
const navyLum = calculateLuminance(nr, ng, nb);

console.log(`Current luminance values:`);
console.log(`  Electric Magenta: ${magentaLum.toFixed(4)}`);
console.log(`  BSU Navy: ${navyLum.toFixed(4)}\n`);

console.log(`=== Color Adjustment Suggestions ===\n`);

// Test lighter magenta options
const lighterMagentas = [
  { hex: '#F54BA8', name: 'Lighter Magenta' },
  { hex: '#FF69B4', name: 'Hot Pink' }
];

console.log(`Testing lighter magenta alternatives on current navy:\n`);
lighterMagentas.forEach(alt => {
  const r = calculateContrastRatio(alt.hex, navy);
  console.log(`${alt.hex} (${alt.name}): ${r.toFixed(2)}:1 - ${r >= 4.5 ? '✓ AA' : ''}${r >= 7 ? ' ✓ AAA' : ''}`);
});

// Test lighter navy options
const lighterNavys = [
  { hex: '#3A5F8F', name: 'Lighter Navy' },
  { hex: '#4A7FBF', name: 'Medium Navy' }
];

console.log(`\nTesting lighter navy alternatives with current magenta:\n`);
lighterNavys.forEach(alt => {
  const r = calculateContrastRatio(magenta, alt.hex);
  console.log(`${alt.hex} (${alt.name}): ${r.toFixed(2)}:1 - ${r >= 4.5 ? '✓ AA' : ''}${r >= 7 ? ' ✓ AAA' : ''}`);
});

console.log(`\n=== Recommendation ===`);
console.log(`This color combination (${ratio.toFixed(2)}:1) is NOT accessible for text.`);
console.log(`Use only for non-text decorative elements.`);
console.log(`\nTo use magenta text on navy, you need to either:`);
console.log(`  1. Use a much lighter magenta (at least +40% lighter)`);
console.log(`  2. Use a much lighter navy (at least +50% lighter)`);
console.log(`  3. Place magenta text on a light background container`);
console.log(`  4. Use white/light text on navy instead`);
