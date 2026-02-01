# REAL-TIME-CHAT-APPLICATION
*COMPANY* : CODTECH IT SOLUTIONS
*NAME*: BELGE TEJASWINI ASHOK
*INTERN ID*:CTIS2651
*DOMAIN*:FRONTEND DEVELOPMENT
*DURATION*:4 WEEKS
*MENTOR*:NEELA SANTOSH
<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/6cc09a4f-771f-4a56-842f-24af8624b4d6" />
## 🔹 1️⃣ JavaScript Code Description (Functionality)

This **JavaScript code** is responsible for making the chat application **interactive**.

* `getElementById()` is used to select:

  * Send button
  * Message input field
  * Chat box
* Event listeners are added:

  * Clicking the **Send** button sends the message.
  * Pressing the **Enter** key also sends the message.
* `sendMessage()` function:

  * Reads the user’s input message.
  * Prevents sending empty messages.
  * Creates a new message div for the **user message** and displays it in the chat box.
  * Automatically scrolls the chat box to the latest message.
* `setTimeout()` is used to simulate a **real-time reply**.

  * After a short delay, a reply message (“Message received ✅”) is displayed.

👉 **Purpose of JavaScript:**
To handle **sending messages**, **keyboard events**, **automatic replies**, and **real-time chat behavior**.

---

## 🔹 2️⃣ CSS Code Description (Design & Styling)

This **CSS code** styles the chat application to make it visually attractive and user-friendly.

* The universal selector `*` resets margin and padding and sets a common font.
* `body` uses flexbox to center the chat container on the screen.
* `.container`:

  * Creates a card-like chat layout
  * Adds background color, padding, rounded corners, and shadow
* `.header`:

  * Centers the title and subtitle
  * Highlights the main heading color
* `.chat-box`:

  * Defines a fixed height for chat messages
  * Enables scrolling when messages overflow
* `.message`:

  * Styles chat bubbles
  * Limits message width and adds rounded corners
* `.sent`:

  * Styles user messages (right aligned, orange background)
* `.received`:

  * Styles received messages (left aligned, gray background)
* `.input-area`:

  * Aligns input field and send button in a row
* `.certificate`:

  * Displays small informational text at the bottom

👉 **Purpose of CSS:**
To provide a **clean chat UI**, proper message alignment, and a modern messaging experience.

---

## 🔹 3️⃣ HTML Code Description (Structure)

This **HTML code** creates the **structure of the Real-Time Chat Application**.

* `<!DOCTYPE html>` declares an HTML5 document.
* `<head>` section:

  * Sets character encoding
  * Defines the page title
  * Links the external CSS file
* `<body>` section includes:

  * A `.container` div holding the entire chat app
  * A `.header` displaying:

    * Organization name
    * Internship task number
    * Application title
  * `.chat-box`:

    * Displays chat messages
    * Contains default welcome messages
  * `.input-area`:

    * Text input field for typing messages
    * Send button
  * Certificate message at the bottom
* JavaScript file is linked at the end for functionality.

👉 **Purpose of HTML:**
To define the **layout and elements** of the chat application.

