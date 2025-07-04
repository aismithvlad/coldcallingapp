/**
 * Phone number formatting utilities for the Cold Calling App
 */

/**
 * Format a phone number to standard US format: (555) 123-4567
 * @param {string} phone - Raw phone number
 * @returns {string} - Formatted phone number
 */
function formatPhoneNumber(phone) {
  if (!phone) return '';
  
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '');
  
  // Handle different lengths
  if (cleaned.length === 10) {
    // Format as (XXX) XXX-XXXX
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  } else if (cleaned.length === 11 && cleaned[0] === '1') {
    // Handle +1 country code
    return `+1 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7)}`;
  } else {
    // Return original if can't format
    return phone;
  }
}

/**
 * Validate if a phone number is in a valid format
 * @param {string} phone - Phone number to validate
 * @returns {boolean} - True if valid
 */
function isValidPhoneNumber(phone) {
  if (!phone) return false;
  
  const cleaned = phone.replace(/\D/g, '');
  return cleaned.length === 10 || (cleaned.length === 11 && cleaned[0] === '1');
}

/**
 * Extract clean digits from phone number for dialing
 * @param {string} phone - Formatted phone number
 * @returns {string} - Clean digits
 */
function getDialableNumber(phone) {
  if (!phone) return '';
  return phone.replace(/\D/g, '');
}

module.exports = {
  formatPhoneNumber,
  isValidPhoneNumber,
  getDialableNumber
};
