function Notebook({
    isOpen,
    messages,
    newMessage,
    setNewMessage,
    sendMessage,
    togglePanel,
    markAsRead,
}) {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="notebook">
          <h3>River's Notebook</h3>

          <div className="section">
            <h4>Messages</h4>

            <ul>
              {messages.map((msg) => (
                <li 
                  key={msg.id}
                  onClick={() => markAsRead(msg.id)}
                >
                  {msg.unread && "🔵 "}
                  <strong>{msg.sender}:</strong> {msg.text}
                </li>
              ))}
            </ul> 
          </div>

          <div className="section">
            <h4>Send Message</h4>

            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
            />

            <button onClick={sendMessage}>Send</button>
          </div>

          <button onClick={togglePanel}>Close</button>
        </div>
      );
    }

export default Notebook;