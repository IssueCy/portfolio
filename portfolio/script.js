
// index animation
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); 
        }
    });
});

const hiddenElements = document.querySelectorAll('.headline-container');
hiddenElements.forEach((el) => observer.observe(el));

// Discord username copy
document.addEventListener("DOMContentLoaded", () => {
    const copyLabel = document.getElementById('discordCopyLabel');

    copyLabel.addEventListener('click', () => {
        const username = copyLabel.textContent;

        navigator.clipboard.writeText(username).then(() => {
            alert('Username copied');
        }).catch(err => {
            console.error('Copy failed: ', err);
        });
    });
});

function contactAlert() {
    alert("You can contact me on Discord: \n- Click on my name to copy Discord username to clipboard \n- Click the Discord Icon to join my server!");
}

function contactAlertTwo() {
    alert("You can contact me on Discord; Use the socials-link on the Home-tab!");
}

function imgAlert() {
    alert("Sources:\n\nhttps://icons8.com\nhttps://www.flaticon.com\nhttps://fsymbols.com\n");
}