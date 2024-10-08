document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to my Roblox Scripting Portfolio!");
});

function copyToClipboard(username) {
    navigator.clipboard.writeText(username).then(
        () => {
            swal({
                title: "Copied!",
                text: `"${username}" has been copied to your clipboard!`,
                icon: "success",
                button: "Okay",
                className: "dark-swal",
            });
        },
        (err) => {
            console.error("Could not copy text: ", err);
        }
    );
}

const skills = document.querySelectorAll(".skill");

skills.forEach((skill) => {
    const originalText = skill.textContent;

    skill.addEventListener("mouseover", () => {
        skill.textContent = skill.getAttribute("data-description");
    });

    skill.addEventListener("mouseout", () => {
        skill.textContent = originalText;
    });
});