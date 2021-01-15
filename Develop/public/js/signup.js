$(document).ready(function() {
    // Get references to our form and inputs
    var signUpForm = $("form.signup");
    var emailInput = $("input#email-input");
    var loginForm = $("input#password-input");

    // When the signUp button is clicked, we validate there's an email and password entered
    signUpForm.on("Submit", function(event) {
        event.preventDefault();
        var userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.email || !userData.password) {
            return;
        }

        // If we have an email and password we run the SignUpUser function
        signUpUser(userData.email, userData.password);
        emailInput.val("");
        passwordInput.val("");
    });

    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(email, password) {
        $.post("/api/signup", {
            email: email,
            password: password
        }).then(function(){
            window.location.replace("/members");
        })
        // If errors, log the error
        .catch(function(handleLoginErr);
        
    }

    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }
});