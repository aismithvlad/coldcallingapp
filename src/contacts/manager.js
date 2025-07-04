module.exports = { addContact: function() { console.log("Adding contact..."); } };

// Import phone formatter utility
const { formatPhoneNumber, isValidPhoneNumber } = require('../utils/phoneFormatter');

// Enhanced add contact function with phone validation
function addContactWithValidation(name, phone, company) {
  if (!isValidPhoneNumber(phone)) {
    console.log(`❌ Invalid phone number: ${phone}`);
    return false;
  }
  
  const formattedPhone = formatPhoneNumber(phone);
  console.log(`✅ Adding contact: ${name} - ${formattedPhone}`);
  if (company) console.log(`   Company: ${company}`);
  
  // Here you would save to database/storage
  return {
    name,
    phone: formattedPhone,
    company: company || null,
    addedAt: new Date()
  };
}

module.exports.addContactWithValidation = addContactWithValidation;
