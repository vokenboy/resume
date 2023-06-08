document.addEventListener("DOMContentLoaded", function() {
    const skillFills = document.querySelectorAll(".skill-fill");

    skillFills.forEach(function(skillFill) {
        const desiredPercent = skillFill.dataset.percent;
        skillFill.style.width = desiredPercent + "%";
    });
});