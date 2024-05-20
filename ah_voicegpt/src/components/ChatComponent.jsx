import React, { useState } from "react";
import axios from "axios";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

const ChatComponent = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [listening, setListening] = useState(false);

  const handleListen = () => {
    if (listening) {
      recognition.stop();
      setListening(false);
    } else {
      recognition.start();
      setListening(true);
    }

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setMessage(transcript);
      handleChat(transcript);
    };

    recognition.onerror = (event) => {
      console.error(event.error);
      setListening(false);
    };
  };

  const handleChat = async (inputMessage) => {
    try {
      const { data } = await axios.post("http://localhost:5000/api/chat", {
        message: inputMessage,
      });
      setResponse(data.reply);
      speak(data.reply);
    } catch (error) {
      console.error(error);
    }
  };

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="space-y-4">
      <button
        onClick={handleListen}
        className="px-4 py-2 bg-neutral-300 dark:bg-neutral-700 text-black dark:text-white font-semibold rounded-lg focus:outline-none hover:bg-neutral-200 dark:hover:bg-neutral-600 transition duration-300"
      >
        {listening ? "Stop Listening" : "Start Listening"}
      </button>
      <div className="flex gap-2">
        <span className="text-xl font-semibold text-green-600">Message:</span>
        <span className="text-xl text-zinc-900 dark:text-zinc-100">
          {message}
        </span>
      </div>
      <div className="flex gap-2">
        <span className="text-xl font-semibold text-green-600">Response:</span>
        <span className="text-xl text-zinc-900 dark:text-zinc-100">
          {response}
        </span>
      </div>
    </div>
  );
};
export default ChatComponent;
