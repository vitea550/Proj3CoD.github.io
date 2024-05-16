document.addEventListener("DOMContentLoaded", function() {
    const content = document.querySelector(".content");

    window.addEventListener("beforeunload", function(e) {
        e.preventDefault();
        content.classList.add("fade-out");

        // Adding a delay to ensure the animation plays before the page unloads
        setTimeout(() => {
            e.returnValue = "";
        }, 500);
    });
});