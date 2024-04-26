document.addEventListener("DOMContentLoaded", function() {
    const pwShowHide = document.querySelectorAll(".eye-icon"),
          links = document.querySelectorAll(".link"),
          loginForm = document.querySelector(".login form"),
          signupForm = document.querySelector(".signup form");

    // Function to validate name
    function validateName(name) {
        const nameRegex = /^[a-zA-Z ]{6,}$/; // Allows only alphabets and spaces, minimum length 6
        return nameRegex.test(name);
    }

    // Function to validate password
    function validatePassword(password) {
        return password.length >= 6; // Checks if password length is at least 6
    }

    // Function to validate email
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Standard email pattern
        return emailRegex.test(email);
    }

    // Function to validate phone number
    function validatePhoneNumber(phoneNumber) {
        const phoneRegex = /^\d{10}$/; // Allows only 10 digits
        return phoneRegex.test(phoneNumber);
    }

    // Add event listener for eye icon clicks to toggle password visibility
    pwShowHide.forEach(eyeIcon => {
        eyeIcon.addEventListener("click", () => {
            const pwField = eyeIcon.parentElement.querySelector(".password");
            if (pwField.type === "password") {
                pwField.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
            } else {
                pwField.type = "password";
                eyeIcon.classList.replace("bx-show", "bx-hide");
            }
        });
    });

    // Add event listener for link clicks to toggle between login and signup forms
    links.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault(); // Prevent form submission
            document.querySelector(".forms").classList.toggle("show-signup");
        });
    });

    // Add event listener for login form submission
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault(); // Prevent form submission
        // Here you can add any additional login form validation or submission logic if needed
    });

    // Add event listener for signup form submission
    signupForm.addEventListener("submit", function(e) {
        e.preventDefault(); // Prevent form submission
        
        // Getting form fields for validation
        const nameField = document.querySelector(".signup input[name='name']");
        const phoneField = document.querySelector(".signup input[name='number']");
        const emailField = document.querySelector(".signup input[name='email']");
        const passwordField = document.querySelector(".signup input[name='password']");
        const confirmPasswordField = document.querySelector(".signup input[name='confirm_password']");

        // Validating each field
        const isValidName = validateName(nameField.value);
        const isValidPhone = validatePhoneNumber(phoneField.value);
        const isValidEmail = validateEmail(emailField.value);
        const isValidPassword = validatePassword(passwordField.value);
        const isPasswordConfirmed = passwordField.value === confirmPasswordField.value;

        // Displaying error messages if any field is invalid
        if (!isValidName) {
            alert("Please enter a valid name with at least 6 characters.");
            return;
        }
        if (!isValidPhone) {
            alert("Please enter a valid phone number with 10 digits only.");
            return;
        }
        if (!isValidEmail) {
            alert("Please enter a valid email address.");
            return;
        }
        if (!isValidPassword) {
            alert("Password should be at least 6 characters long.");
            return;
        }
        if (!isPasswordConfirmed) {
            alert("Passwords do not match. Please confirm your password.");
            return;
        }

        // If all fields are valid, you can submit the form or perform any additional actions here
        // signupForm.submit(); // Uncomment this line to submit the form
    });
});
