function Notebook({
    isOpen,
    messages,
    newMessage,
    setNewMessage,
    sendMessage,
    togglePanel,
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
              {messages.map((msg, index) => (
                <li key={index}>{msg}</li>
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