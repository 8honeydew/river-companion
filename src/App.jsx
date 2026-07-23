import { useState, useEffect } from 'react';
import Pet from './components/Pet';
import Notebook from './components/Notebook';
import SpeechBubble from './components/SpeechBubble';
import moods from  './data/moods';


function App() {
  const [messages, setMessages] = useState([
    "Hi! I'm River.",
    "I'm happy to see you."
  ]);
  const [pet, setPet] = useState("🐱");
  const [speech, setSpeech] = useState("");
  const [showSpeech, setShowSpeech] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const randomMood = 
        moods[Math.floor(Math.random() * moods.length)];
      
      setPet(randomMood.pet);
      setSpeech(randomMood.message);
      setShowSpeech(true);

      setTimeout(() => {
        setShowSpeech(false);
      }, 3000);
    }, 25000);

    return () => clearInterval(interval);
  }, []);

  function handleClick() {
    const randomMood = 
      moods[Math.floor(Math.random() * moods.length)];
    
    setPet(randomMood.pet);

    setSpeech(randomMood.message);

    setShowSpeech(true);

    setAnimationClass("bounce");

    togglePanel();  

    setTimeout(() => {
      setShowSpeech(false);
    }, 3000);

    setTimeout( () => {
      setAnimationClass("");
    }, 300); 
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

      <SpeechBubble 
        speech={speech} 
        showSpeech={showSpeech}
      />

      <Pet
        pet={pet}
        animation={animationClass}
        onClick={handleClick}
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