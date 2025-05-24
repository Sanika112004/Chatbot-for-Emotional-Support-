let supportTopics = [];

async function loadPDFTopics() {
  try {
    const loadingTask = pdfjsLib.getDocument("Emo_Supp_Guide.pdf");
    const pdf = await loadingTask.promise;
    let fullText = "";

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      const pageText = content.items.map((item) => item.str).join(" ");
      fullText += pageText + "\n";
    }

    const entries = fullText.split("Topic:").slice(1);
    entries.forEach((entry) => {
      const parts = entry.split("●");
      const topic = parts[0]?.trim();
      const keywords =
        parts[1]
          ?.replace("Keywords:", "")
          .split(",")
          .map((k) => k.trim().toLowerCase()) || [];
      const response = parts[2]?.replace("Response:", "").trim() || "";

      if (topic && keywords.length && response) {
        supportTopics.push({ topic, keywords, response });
      }
    });

    console.log("Loaded topics:", supportTopics);
  } catch (error) {
    console.error("Error loading PDF:", error);
  }
}

function appendMessage(text, type) {
  const chatBox = document.getElementById("chatBox");

  const wrapper = document.createElement("div");
  wrapper.className = `message-wrapper ${type}-wrapper`;

  const avatar = document.createElement("img");
  avatar.className = "avatar";
  avatar.src = type === "user" ? "user.png" : "robot.png";

  const msgDiv = document.createElement("div");
  msgDiv.className = `message ${type}`;
  msgDiv.textContent = text;

  wrapper.appendChild(avatar);
  wrapper.appendChild(msgDiv);
  chatBox.appendChild(wrapper);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
  const inputElement = document.getElementById("userInput");
  const input = inputElement.value.trim().toLowerCase();
  if (!input) return;

  appendMessage(input, "user");
  inputElement.value = "";

  let matched = false;
  let response =
    "Sorry, I couldn't find an answer yet💔 but I'm still here for you 💖";

  if (input === "hello") {
    response =
      "Hey, I'm your emotional support buddy💖. I'm here for you😊 No judgment, just support and care. You're not alone 🌈🤗";
    matched = true;
  }

  for (let topic of supportTopics) {
    for (let keyword of topic.keywords) {
      if (input.includes(keyword)) {
        response = topic.response;
        matched = true;
        break;
      }
    }
    if (matched) break;
  }

  setTimeout(() => {
    appendMessage(response, "bot");
  }, 500);
}

function toggleEmojiPicker() {
  const emojiPicker = document.getElementById("emojiPicker");
  emojiPicker.style.display =
    emojiPicker.style.display === "none" || !emojiPicker.style.display
      ? "block"
      : "none";
}

function insertEmoji(emoji) {
  const inputElement = document.getElementById("userInput");
  inputElement.value += emoji;
  toggleEmojiPicker();
}

window.onload = loadPDFTopics;
window.onload = async () => {
  await loadPDFTopics();
  appendMessage(
    "Hi there!🤖 here for you 💌 Just type how you're feeling💖",
    "bot"
  );
};
