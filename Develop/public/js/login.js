$(document).ready(function() {
    // Get references to our form and inputs
    var loginForm = $("form.login");
    var emailInput = $("input#email-input");
    var loginForm = $("input#password-input");

    // When the form is submitted, we validate there's an email and password entered
    loginForm.on("Submit", function(event) {
        event.preventDefault();
        var userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.email || !userData.password) {
            return;
        }

        // If we have an email and password we run the LoginUSer function and clear the form
        loginUser(userData.email, userData.password);
        emailInput.val("");
        passwordInput.val("");
    });

    // LoginUser does a post to our "api/Login" route and if successful, redirects us to the members page.
    function loginUser(email, password) {
        $.post("/api/login", {
            email: email,
            password: password
        }).then(function(){
            window.location.replace("/members");
        })
        // If errors, log the error
        .catch(function(err){
            console.log(err);
        });
    }
});