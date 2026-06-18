/**
 * Form validation utilities
 */

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone) => {
  const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
  return phoneRegex.test(phone);
};

export const validateMessage = (message) => {
  return message.trim().length >= 10;
};

export const validateForm = (formData, rules) => {
  const errors = {};

  Object.keys(rules).forEach((field) => {
    const rule = rules[field];
    const value = formData[field];

    if (rule.required && (!value || value.trim() === '')) {
      errors[field] = `${rule.label || field} is required`;
    } else if (rule.type === 'email' && value && !validateEmail(value)) {
      errors[field] = 'Invalid email address';
    } else if (rule.type === 'phone' && value && !validatePhone(value)) {
      errors[field] = 'Invalid phone number';
    } else if (rule.minLength && value && value.length < rule.minLength) {
      errors[field] = `${rule.label || field} must be at least ${rule.minLength} characters`;
    }
  });

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
