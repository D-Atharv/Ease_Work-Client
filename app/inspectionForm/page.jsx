"use client";
import { useState, useEffect } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const questions = [
    "Truck Serial Number – Example 7301234, 730EJ73245, 73592849, 735EJBC9723",
    "Truck Model – Example 730, 730 EJ, 735, 745",
    "Inspection ID – Auto-incremented unique number",
    "Inspector Name",
    "Inspection Employee ID",
    "Date & Time of Inspection",
    "Location of Inspection",
    "Geo Coordinates of Inspection (optional, in case of remote location)",
    "Service Meter Hours (Odometer reading)",
    "Inspector Signature",
    "Customer Name/Company Name",
    "CAT Customer ID",
];

export default function InspectionPage() {
    const [transcript, setTranscript] = useState("");
    const [recognition, setRecognition] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isAnswered, setIsAnswered] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            if (SpeechRecognition) {
                const recognitionInstance = new SpeechRecognition();
                recognitionInstance.interimResults = true;
                recognitionInstance.continuous = false;

                recognitionInstance.addEventListener("result", (e) => {
                    const transcriptArray = Array.from(e.results)
                        .map((result) => result[0])
                        .map((result) => result.transcript)
                        .join("");
                    setTranscript(transcriptArray);
                    setIsAnswered(transcriptArray.length > 0);
                });

                recognitionInstance.addEventListener("end", () => {
                    if (recognition) {
                        recognition.stop();
                    }
                });

                recognitionInstance.addEventListener("error", (e) => {
                    console.error("Speech recognition error detected: " + e.error);
                    alert("An error occurred: " + e.error);
                });

                setRecognition(recognitionInstance);
            } else {
                alert("Your browser does not support the Web Speech API.");
            }
        }
    }, []);

    const handleStart = () => {
        if (recognition) {
            recognition.start();
        }
    };

    const handleStop = () => {
        if (recognition) {
            recognition.stop();
        }
    };

    const handleNext = () => {
        if (isAnswered && currentQuestionIndex < questions.length - 1) {
            setTranscript("");
            setIsAnswered(false);
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setTranscript("");
            setIsAnswered(false);
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-[#111111] p-6"
            style={{
                background: "radial-gradient(circle, #111111 0%, #333333 100%)"
            }}>
            <ThemeSwitcher />
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">Inspection Form</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                {questions[currentQuestionIndex]}
            </p>
            <textarea
                id="convert_text"
                className="border border-gray-300 rounded-lg p-4 w-full max-w-lg h-48  bg-[#EDEDED] dark:border-gray-700 shadow-md resize-none"
                value={transcript}
                readOnly
            ></textarea>
            <div className="flex space-x-4 mt-6">
                <button
                    onClick={handlePrevious}
                    disabled={currentQuestionIndex === 0}
                    className="bg-gray-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-600 transition duration-200 disabled:opacity-50"
                >
                    Previous
                </button>
                <button
                    onClick={handleNext}
                    disabled={!isAnswered || currentQuestionIndex === questions.length - 1}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-200 disabled:opacity-50"
                >
                    Next
                </button>
                <button
                    onClick={handleStart}
                    className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition duration-200"
                >
                    Start
                </button>
                <button
                    onClick={handleStop}
                    className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition duration-200"
                >
                    Stop
                </button>
            </div>
        </div>
    );
}
