document.addEventListener("DOMContentLoaded", function() {
    console.log("Portfolio site loaded successfully.");
});

document.querySelectorAll(".project a").forEach(link => {
    link.addEventListener("click", function(event) {
        alert("Redirecting to project details!");
    });
});
