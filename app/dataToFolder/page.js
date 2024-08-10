"use client";
import React from "react";
import inspectionData from "../../component/data/page";

const Page = () => {
  const downloadPDF = async () => {
    const response = await fetch("http://localhost:5000/api/generate-pdf", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inspectionData }),
    });

    if (response.ok) {
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "inspection_report.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
    } else {
      console.error("Failed to download PDF");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Inspection Data</h1>
      <button
        onClick={downloadPDF}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Download PDF
      </button>
    </div>
  );
};

export default Page;
