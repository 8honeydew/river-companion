import { useState } from 'react';

function App() {
  const [messages, setMessages] = useState([
    "Hi! I'm River.",
    "I'm happy to see you."
  ]);
  const [pet, setPet] = useState("🐱");
  const [isOpen, setIsOpen] = useState(false);

  const moods = [
      {pet: "😸", message: "I'm happy today!"},
      {pet: "😴", message: "Just woke up..."},
      {pet: "🐱", message: "What are you working on?"},
      {pet: "😹", message: "Hehe!"},
      {pet: "😼", message: "I knocked something off a table."},
      {pet: "😻", message: "You're doing so amazing."},
      {pet: "😿", message: "Pay attention to me..."},
      {pet: "😋", message: "Treats?"},
      {pet: "🤓", message: "Let's do some work!"}
    ];

  function handleClick() {
    const randomMood = 
      moods[Math.floor(Math.random() * moods.length)];
    
    setPet(randomMood.pet);

    setMessages((prev) => [randomMood.message, ...prev]);
  }

  function togglePanel() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <div
        className="river"
        onClick={togglePanel}
      >
        {pet}
      </div>

      {isOpen && (
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

          <button onClick={togglePanel}>Close</button>
        </div>
      )}
    </div>
  );
}

export default App;