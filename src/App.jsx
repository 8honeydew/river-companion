import { useState } from 'react';

function App() {
  const [message, setMessage] = useState("Hi! I'm River.");
  const [pet, setPet] = useState("🐱");

  function handleClick() {
    const moods = [
      {
        pet: "😸",
        message: "I'm happy today!"
      },
      {
        pet: "😴",
        message: "Just woke up..."
      },
      {
        pet: "🐱",
        message: "What are you working on?"
      },
      {
        pet: "😹",
        message: "Hehe!"
      },
      {
        pet: "😼",
        message: "I knocked something off a table."
      },
      {
        pet: "😻",
        message: "You're doing so amazing."
      },
      {
        pet: "😿",
        message: "Pay attention to me..."
      },
      {
        pet: "😋",
        message: "Treats?"
      },
      {
        pet: "🤓",
        message: "Let's do some work!"
      }
    ];

    const randomMood = 
      moods[Math.floor(Math.random() * moods.length)];
    
    setPet(randomMood.pet);
    setMessage(randomMood.message);
  }

  return (
    <>
      <div className="message-bubble">
        {message}
      </div>

      <div 
        className="river"
        onClick={handleClick}
      >
        {pet}
      </div>
    </>
  );
}

export default App;