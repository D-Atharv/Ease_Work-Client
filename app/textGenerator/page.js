"use client";
import { useState } from "react";

export default function TextGenerator() {
  const [transcript, setTranscript] = useState("");

  const handleClick = () => {
    if (
      !("webkitSpeechRecognition" in window) &&
      !("SpeechRecognition" in window)
    ) {
      alert("Your browser does not support the Web Speech API.");
      return;
    }
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;
    recognition.continuous = false;

    recognition.addEventListener("result", (e) => {
      const transcriptArray = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      setTranscript(transcriptArray);
    });

    recognition.addEventListener("error", (e) => {
      console.error("Speech recognition error detected: " + e.error);
      alert("An error occurred: " + e.error);
    });

    recognition.start();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Voice to Text Converter</h1>
      <textarea
        id="convert_text"
        className="border border-gray-300 rounded p-2 w-full h-64 mb-4"
        value={transcript}
        readOnly
      ></textarea>
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Voice to Text
      </button>
    </div>
  );
}
