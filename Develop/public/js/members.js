$(document).ready(function() {
    // This fille just does a "GET" request to figure out which user is Logged in.
    // and updates the HTML on the page.
    $.get("/api/user_data").then(function(data) {
        $(".member-name").text(data.email);
    });
});