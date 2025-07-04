// Quick test for the phone formatter utility
const { formatPhoneNumber, isValidPhoneNumber, getDialableNumber } = require('./src/utils/phoneFormatter');

console.log('🧪 Testing Phone Formatter Utility\n');

// Test cases
const testNumbers = [
  '5551234567',
  '555-123-4567',
  '(555) 123-4567',
  '+1-555-123-4567',
  '15551234567',
  'invalid'
];

testNumbers.forEach(number => {
  console.log(`Original: "${number}"`);
  console.log(`Formatted: "${formatPhoneNumber(number)}"`);
  console.log(`Valid: ${isValidPhoneNumber(number)}`);
  console.log(`Dialable: "${getDialableNumber(number)}"`);
  console.log('---');
});

console.log('✅ Phone formatter utility ready for use!');
