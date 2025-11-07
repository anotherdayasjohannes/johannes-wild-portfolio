// Test if animations can be imported
try {
  const motion = require('motion');
  console.log('✅ Motion imported successfully');
  console.log('Available:', Object.keys(motion));
} catch (e) {
  console.log('❌ Motion import failed:', e.message);
}

try {
  const autoAnimate = require('@formkit/auto-animate/react');
  console.log('✅ Auto-Animate imported successfully');
} catch (e) {
  console.log('❌ Auto-Animate import failed:', e.message);
}
