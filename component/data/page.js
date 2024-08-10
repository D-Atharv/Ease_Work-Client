import React from "react";

const inspectionData = [
  {
    "Truck Serial Number": "7301234",
    "Truck Model": "730",
    "Inspection ID": 1001,
    "Inspector Name": "John Doe",
    "Inspection Employee ID": "EMP001",
    "Date & Time of Inspection": "2024-08-09 10:00:00",
    "Location of Inspection": "Location A",
    "Geo Coordinates of Inspection": {
      latitude: 40.712776,
      longitude: -74.005974,
    },
    "Service Meter Hours": 15000,
    "Inspector Signature": "Signature1",
    "Customer Name /Company Name": "Company A",
    "CAT Customer ID": "CAT1234",
    TIRES: {
      "Tire Pressure for Left Front": 32,
      "Tire Pressure for Right Front": 34,
      "Tire Condition for Left Front": "Good",
      "Tire Condition for Right Front": "Ok",
      "Tire Pressure for Left Rear": 30,
      "Tire Pressure for Right Rear": 32,
      "Tire Condition for Left Rear": "Good",
      "Tire Condition for Right Rear": "Needs Replacement",
      "Overall Tire Summary": "Overall tire condition is good",
      "Attached Tire Images": [
        "Ease_Work-Client/images/Screenshot 2024-02-06 235443.png",
      ],
    },
    BATTERY: {
      "Battery Make": "CAT",
      "Battery Replacement Date": "2023-05-01",
      "Battery Voltage": "12V",
      "Battery Water Level": "Good",
      "Condition of Battery": "N",
      "Any Leak/Rust in Battery": "No",
      "Battery Overall Summary": "The battery is in good condition",
      "Attached Battery Images": [
        "Ease_Work-Client/images/Screenshot 2024-02-06 235443.png",
      ],
    },
    EXTERIOR: {
      "Rust, Dent or Damage to Exterior": "Y",
      "Oil Leak in Suspension": "No",
      "Overall Summary": "Minor rust on the body",
      "Attached Exterior Images": [
        "Ease_Work-Client/images/Screenshot 2024-02-06 235443.png",
      ],
    },
    BRAKES: {
      "Brake Fluid Level": "Good",
      "Brake Condition for Front": "Good",
      "Brake Condition for Rear": "Ok",
      "Emergency Brake": "Good",
      "Brake Overall Summary": "Brakes are in good condition",
      "Attached Brake Images": [
        "Ease_Work-Client/images/Screenshot 2024-02-06 235443.png",
      ],
    },
    ENGINE: {
      "Rust, Dents or Damage in Engine": "Y",
      "Engine Oil Condition": "Good",
      "Engine Oil Color": "Clean",
      "Brake Fluid Condition": "Good",
      "Brake Fluid Color": "Clean",
      "Any Oil Leak in Engine": "Y",
      "Overall Summary": "Engine needs minor repairs",
      "Attached Engine Images": [
        "Ease_Work-Client/images/Screenshot 2024-02-06 235443.png",
      ],
    },
    "Voice of Customer": {
      Feedback: "Satisfied with the service",
      "Images Related to Issues Discussed with Customer": [
        "Ease_Work-Client/images/Screenshot 2024-02-06 235443.png",
      ],
    },
  },
  {
    "Truck Serial Number": "730EJ73245",
    "Truck Model": "730 EJ",
    "Inspection ID": 1002,
    "Inspector Name": "Jane Smith",
    "Inspection Employee ID": "EMP002",
    "Date & Time of Inspection": "2024-08-09 11:00:00",
    "Location of Inspection": "Location B",
    "Service Meter Hours": 15050,
    "Inspector Signature": "Signature2",
    "Customer Name /Company Name": "Company B",
    "CAT Customer ID": "CAT5678",
    TIRES: {
      "Tire Pressure for Left Front": 30,
      "Tire Pressure for Right Front": 33,
      "Tire Condition for Left Front": "Ok",
      "Tire Condition for Right Front": "Good",
      "Tire Pressure for Left Rear": 29,
      "Tire Pressure for Right Rear": 30,
      "Tire Condition for Left Rear": "Ok",
      "Tire Condition for Right Rear": "Good",
      "Overall Tire Summary": "Some wear on tires",
      "Attached Tire Images": [
        "Ease_Work-Client/images/Screenshot 2024-02-06 235443.png",
      ],
    },
    BATTERY: {
      "Battery Make": "ABC",
      "Battery Replacement Date": "2024-01-15",
      "Battery Voltage": "13V",
      "Battery Water Level": "Low",
      "Condition of Battery": "Y",
      "Any Leak/Rust in Battery": "Yes",
      "Battery Overall Summary": "Needs replacement",
      "Attached Battery Images": [
        "Ease_Work-Client/images/Screenshot 2024-02-06 235443.png",
      ],
    },
    EXTERIOR: {
      "Rust, Dent or Damage to Exterior": "N",
      "Oil Leak in Suspension": "No",
      "Overall Summary": "The exterior is in good condition",
      "Attached Exterior Images": [
        "Ease_Work-Client/images/Screenshot 2024-02-06 235443.png",
      ],
    },
    BRAKES: {
      "Brake Fluid Level": "Low",
      "Brake Condition for Front": "Needs Replacement",
      "Brake Condition for Rear": "Good",
      "Emergency Brake": "Ok",
      "Brake Overall Summary": "Brake fluid needs attention",
      "Attached Brake Images": [
        "Ease_Work-Client/images/Screenshot 2024-02-06 235443.png",
      ],
    },
    ENGINE: {
      "Rust, Dents or Damage in Engine": "N",
      "Engine Oil Condition": "Bad",
      "Engine Oil Color": "Brown",
      "Brake Fluid Condition": "Bad",
      "Brake Fluid Color": "Brown",
      "Any Oil Leak in Engine": "N",
      "Overall Summary": "Engine requires servicing",
      "Attached Engine Images": [
        "Ease_Work-Client/images/Screenshot 2024-02-06 235443.png",
      ],
    },
    "Voice of Customer": {
      Feedback: "Reported issues with brakes",
      "Images Related to Issues Discussed with Customer": [
        "Ease_Work-Client/images/Screenshot 2024-02-06 235443.png",
      ],
    },
  },
];
export default inspectionData;
