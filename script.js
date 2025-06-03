function sendMessage() {
    const input = document.getElementById("userInput");
    const message = input.value;
    if (message.trim() === "") return;

    const chatlog = document.getElementById("chatlog");
    chatlog.innerHTML += "<div><b>You:</b> " + message + "</div>";

    fetch("/get", {
        method: "POST",
        body: JSON.stringify({ message: message }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(data => {
        chatlog.innerHTML += "<div><b>Bot:</b> " + data.response + "</div>";
        chatlog.scrollTop = chatlog.scrollHeight;
    });

    input.value = "";
}