# 💖 Emotional Support Chatbot

An interactive, emotional support chatbot web application built using **HTML**, **CSS**, and **JavaScript**, trained on a custom **PDF guide** of emotional support topics. The chatbot responds to user queries with kind, caring, and humanized messages based on keyword matching.

## 🌟 Features

- 🧠 Keyword-based response system trained from a custom emotional support guide (`Emo_Supp_Guide.pdf`)
- 💬 Chat interface with animated message display
- 🎨 Soothing pink theme with gradients and soft shadows
- 👤 User and robot profile icons for a friendly, relatable chat experience
- 😊 Emoji-enhanced interactions and friendly tone
- 📂 All client-side: no backend or server required

## 🛠️ Technologies Used

- **HTML5** - Structure of the chatbot UI
- **CSS3** - Custom styling with pink gradient theme, shadows, and animation
- **JavaScript** - Core chatbot logic, PDF text extraction, keyword matching
- **[PDF.js](https://mozilla.github.io/pdf.js/)** - Used to load and read content from the emotional support PDF

## 📄 How It Works

1. The chatbot loads a structured emotional support PDF (`Emo_Supp_Guide.pdf`) using PDF.js.
2. User types a query (e.g., "tips for managing stress").
3. JavaScript extracts keywords from the user message and matches them against the topics in the PDF.
4. The chatbot displays the corresponding response from the PDF, formatted in a warm and supportive style.
5. If no keyword match is found, the bot replies with a default empathetic fallback message.

## 👤 Chat Avatars

- `robot.png`: Shown next to bot messages
- `user.png`: Shown next to user messages

These are circular avatars placed beside each message bubble for visual identity and a friendly appearance.

## 📁 Project Structure

emotional-support-chatbot/
├── index.html # Main chatbot UI
├── style.css # Stylesheet (pink theme, animations)
├── script.js # JavaScript logic for chatbot & PDF parsing
├── emo.pdf # Emotional Support Guide with 100+ topics
├── assets/
│ └── robot.png #Robot profile icon
│  ── user.png # User profile icon
└── README.md # Project documentation (this file)


## ✅ Requirements

- A modern browser (Chrome, Firefox, Edge)
- Live server extension or HTTP server to run locally (PDF.js requires HTTPS or localhost)

## 🚀 Getting Started

1. Clone or download the repository.
2. Place your `Emo_Supp_Guide.pdf` emotional guide in the root folder.
3. Open `index.html` using **Live Server** or a local HTTP server.
4. Start chatting and receive supportive responses! 💌

## 📘 PDF Structure (Training Data)

Your `Emo_Supp_Guide.pdf` should contain:
- 🏷️ **Topic**
- 🔑 **Keywords**
- 💬 **Humanized Response**

> Example:
> - Topic: Managing Stress  
> - Keywords: stress, overwhelmed, anxious  
> - Response: “I know exams can feel overwhelming, but remember, you're doing your best... ✨”

## 🙏 Credits

- Developed by Sanika Bhostekar.
- Emotional support topics crafted with empathy 💝

---


