'use client'
import { useState, createContext, useContext } from "react";

const FormDataContext = createContext();

export const useFormData = () => useState(FormDataContext);

export const FormDataProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        truckSerialNumber: '',
        truckModel: '',
        inspectionId: '',
        inspectorName: '',
        inspectionEmployeeId: '',
        dateTime: '',
        location: '',
        geoCoordinates: '',
        serviceMeterHours: '',
        inspectorSignature: '',
        customerName: '',
        catCustomerId: '',
        tirePressureLeftFront: '',
        tirePressureRightFront: '',
        tireConditionLeftFront: '',
        tireConditionRightFront: '',
        tirePressureLeftRear: '',
        tirePressureRightRear: '',
        tireConditionLeftRear: '',
        tireConditionRightRear: '',
        overallTireSummary: '',
    });

    return (
        <FormDataContext.Provider value={{ formData, setFormData }}>
            {children}
        </FormDataContext.Provider>
    )
}

