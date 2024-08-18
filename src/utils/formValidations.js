// Function to validate email
export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
  
// Function to validate required fields
export const validateRequired = (value) => {
    return value.trim() !== '';
};
