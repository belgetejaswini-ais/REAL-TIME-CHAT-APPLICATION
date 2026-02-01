const sendBtn = document.getElementById("sendBtn");
const messageInput = document.getElementById("messageInput");
const chatBox = document.getElementById("chatBox");

sendBtn.addEventListener("click", sendMessage);
messageInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") sendMessage();
});

function sendMessage() {
    const messageText = messageInput.value.trim();
    if (messageText === "") return;

    // user message
    const userMsg = document.createElement("div");
    userMsg.classList.add("message", "sent");
    userMsg.innerText = messageText;
    chatBox.appendChild(userMsg);

    messageInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;

    // fake real-time reply
    setTimeout(() => {
        const reply = document.createElement("div");
        reply.classList.add("message", "received");
        reply.innerText = "Message received ✅";
        chatBox.appendChild(reply);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 800);
}
