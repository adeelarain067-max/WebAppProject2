// Form validation functions
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone.replace(/\D/g, ''));
}

function validateName(name) {
    return name.trim().length >= 2;
}

// Form submission handler
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Reset errors
    document.querySelectorAll('.error').forEach(error => error.textContent = '');
    document.getElementById('successMessage').classList.add('hidden');
    
    // Get form values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const course = document.getElementById('course').value;
    
    let isValid = true;
    
    // Validate name
    if (!validateName(fullName)) {
        document.getElementById('nameError').textContent = 'Name must be at least 2 characters long';
        isValid = false;
    }
    
    // Validate email
    if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address';
        isValid = false;
    }
    
    // Validate phone
    if (!validatePhone(phone)) {
        document.getElementById('phoneError').textContent = 'Please enter a valid 10-digit phone number';
        isValid = false;
    }
    
    // Validate course
    if (!course) {
        document.getElementById('courseError').textContent = 'Please select a course';
        isValid = false;
    }
    
    // If valid, show success message
    if (isValid) {
        document.getElementById('successMessage').classList.remove('hidden');
        this.reset();
    }
});

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { validateEmail, validatePhone, validateName };
}