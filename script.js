const letters = [
  {
    type: "text",
    content: `I know long distance is hard, love.
But every time you miss me, remember—
someone out here is loving you deeply,
believing in you endlessly,
and waiting patiently for the day I can finally hug you🥹🤍`
  },

  {
    type: "text",
    content: `Your art is beautiful because YOU are.
Even when you feel uninspired,
your hands still create magic.
Rest if you must — but never doubt your gift from God😊🎨✨`
  },

  {
    type: "text",
    content: `It’s okay to feel sad.
I wish I could hold your face right now and tell you:
You are not alone.
You are loved — so, so much 😘❤️`
  },

  {
    type: "text",
    content: `If you ever doubt yourself,
borrow my confidence in you.
I believe in you on the days you cannot.
Always.🤗`
  },

  {
    type: "text",
    content: `Happy 1 year of love, my lovelove 🥰😘❤️
Thank you for choosing me,
for loving me across the distance,
and for being my favorite person.
This website is just a tiny piece of how much I love you.🥰`
  },

  {
    type: "image",
    src: "received_815298697962168.png",
    caption: "Ikaw. Always ikaw. 🤍"
  }
];

function openLetter(index) {
  const letter = letters[index];
  const container = document.getElementById("letterText");

  container.innerHTML = "";

  if (letter.type === "text") {
    const p = document.createElement("p");
    p.textContent = letter.content;
    container.appendChild(p);
  }

  if (letter.type === "image") {
    const img = document.createElement("img");
    img.src = letter.src;
    img.className = "letter-image";

    const caption = document.createElement("p");
    caption.className = "image-caption";
    caption.textContent = letter.caption;

    container.appendChild(img);
    container.appendChild(caption);
  }

  document.getElementById("modal").style.display = "block";
}

function closeLetter() {
  document.getElementById("modal").style.display = "none";
}

window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
