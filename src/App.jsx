import { useState } from 'react';
import Pet from './components/Pet';
import Notebook from './components/Notebook';
import moods from  './data/moods';

function App() {
  const [messages, setMessages] = useState([
    "Hi! I'm River.",
    "I'm happy to see you."
  ]);
  const [pet, setPet] = useState("🐱");
  const [isOpen, setIsOpen] = useState(false);
  const [newMessage, setNewMessage] = useState("");

  function handleClick() {
    const randomMood = 
      moods[Math.floor(Math.random() * moods.length)];
    
    setPet(randomMood.pet);

    setMessages((prev) => [randomMood.message, ...prev]);
  }

  function togglePanel() {
    setIsOpen(!isOpen);
  }

  function sendMessage() {
    if (newMessage.trim() === "") {
      return;
    }

    setMessages((prev) => [newMessage, ...prev]);
    setNewMessage("");
  }

  return (
    <div>
      <Pet
        pet={pet}
        onClick={togglePanel}
      />

      <Notebook
        isOpen={isOpen}
        messages={messages}
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        sendMessage={sendMessage}
        togglePanel={togglePanel}
      />
    </div>
  );
}

export default App;