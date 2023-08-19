const forms = document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        
        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
        
    })
})      

links.forEach(link => {
    link.addEventListener("click", e => {
       e.preventDefault(); //preventing form submit
       forms.classList.toggle("show-signup");
    })
})

form.addEventListener("submit", function(event) {
    if (firstName.value.length < 3) {
      alert("First name must be at least 3 characters long.");
      event.preventDefault();
    }
    if (lastName.value.length === 0 || lastName.value.length > 20) {
      alert("Last name must be between 1 and 20 characters.");
      event.preventDefault();
    }
    if (!isValidEmail(email.value)) {
      alert("Please enter a valid email address.");
      event.preventDefault();
    }
    if (!isStrongPassword(password.value)) {
      alert("Password must be at least 8 characters long and contain both uppercase and lowercase letters.");
      event.preventDefault();
    }
    if (password.value !== confirmPassword.value) {
      alert("Passwords do not match.");
      event.preventDefault();
    }
  });