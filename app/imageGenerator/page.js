"use client";

import React, { useState } from "react";

const ImageTaker = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const uploadImage = async () => {
    if (!selectedImage) return;

    const formData = new FormData();
    formData.append("image", selectedImage);

    try {
      const response = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      if (result.success) {
        alert("Image uploaded successfully!");
      } else {
        alert("Failed to upload image.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 bg-slate-300">
      <h1 className="text-2xl font-bold mb-4">Upload and Display Image</h1>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mb-4"
      />
      {imagePreview && (
        <img
          src={imagePreview}
          alt="Selected"
          className="rounded-lg shadow-lg max-w-xs mb-4"
        />
      )}
      <button
        onClick={uploadImage}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Upload Image
      </button>
    </div>
  );
};

export default ImageTaker;
