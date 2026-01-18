//! index animation
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
});

const hiddenElements = document.querySelectorAll(".headline");
hiddenElements.forEach((el) => observer.observe(el));

//! copy DC username
const copyLabel = document.getElementById('copyLabel');

if (copyLabel) {
  copyLabel.addEventListener('click', () => {
      const content = '.merix_';
  
      navigator.clipboard.writeText(content).then(() => {
          alert("Username copied.");
      }).catch((err) => {
          console.error(err);
      });
  });
}

//! footer
const copyright = document.getElementById('copyrightDate');
copyright.innerText = `2023 - ${new Date().getFullYear()} Simtec Applications©`;



//! contact form
const webhookUrl = "https://discord.com/api/webhooks/1347888979617382511/JuelW517soxz0OPwhKwnQno-OD1jKtNyhoBnt-aJOeTwXJkzuDEaTpn0obfws1xS37Vk";

const feedbackForm = document.getElementById("feedbackForm");

if (feedbackForm) {
  feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault();
  
    const username = document.getElementById("username").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
  
    if (message.trim() === "") {
      document.getElementById("statusMessage").innerText = "Please enter a message!";
      return;
    }
  
    fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: `@everyone\nUsername:  ${username}\nSubject: ${subject}\nMessage: ${message}`,
      }),
    })
      .then((response) => {
        if (response.ok) {
          document.getElementById("statusMessage").innerText = "Message sent successfully!";
          document.getElementById("feedbackForm").reset();
        } else {
          document.getElementById("statusMessage").innerText = "Failed to send the message.";
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        document.getElementById("statusMessage").innerText = "An error occurred.";
      });
  });
}

//! play piece button
const audio = document.getElementById("audioPlayer");

let currentTrack = null;
let currentButton = null;

document.querySelectorAll(".play-btn").forEach(button => {
    button.addEventListener("click", () => {
        const track = button.dataset.audio;

        if (currentTrack === track) {
            if (audio.paused) {
                audio.play();
                button.textContent = "⏸ Pause";
            } else {
                audio.pause();
                button.textContent = "▶ Listen";
            }
            return;
        }

        if (currentButton) {
            currentButton.textContent = "▶ Listen";
        }

        currentTrack = track;
        currentButton = button;

        audio.src = track;
        audio.type = "audio/mpeg";
        audio.play();

        button.textContent = "⏸ Pause";
    });
});

audio.addEventListener("ended", () => {
    if (currentButton) {
        currentButton.textContent = "▶ Listen";
    }
    currentTrack = null;
    currentButton = null;
});