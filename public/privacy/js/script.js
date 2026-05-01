// Collapse/expand sections
document.querySelectorAll("section h2").forEach(header => {
    header.addEventListener("click", () => {
        const section = header.parentElement;
        section.classList.toggle("active");
    });
});