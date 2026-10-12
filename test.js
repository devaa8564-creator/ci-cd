const add = require('./index.js');
const assert = require('assert');

// Test: 1 + 2 should equal 3
try {
  assert.strictEqual(add(1, 2), 3);
  console.log("✅ Success: 1 + 2 = 3");
} catch (e) {
  console.error("❌ Failed: 1 + 2 did not equal 3");
  process.exit(1); // This tells GitHub Actions the job failed
}
