import React from "react";
import { cardCont, card1, card2 } from "../../../styles";
import { useState, useEffect } from "react";
import medData from "../../../../public/medicationCard.json"

const medicationData = medData

const Cards = () => {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    const formattedMedicines = medicationData.map((med) => ({
      id: med.id,
      name: med.name,
      dosage: med.dosage,
      frequency: med.frequency,
      endDate: med.endDate,
      notes: med.notes,
      taken: med.taken,
    }));
    setMedicines(formattedMedicines);
  }, []);

  return (
    <div style={cardCont} id="container">
      {medicines.map((medicine) => (
        <div
          id={medicine.id}
          style={{
            width: "400px",
            height: "300px",
            borderRadius: "20px",
            backgroundImage: "url(./card2.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "relative",
          }}
        >
          <h2 style={card2}>{medicine.name}</h2>
          <div style={{ padding: "10px" }}>
            <h4 style={{ fontFamily: "sans-serif", wordWrap: "break-word" }}>
              Dosage: {medicine.dosage}
            </h4>
            <h3 style={{ fontFamily: "sans-serif" }}>
              Frequency: {medicine.frequency}
            </h3>
            <h3 style={{ fontFamily: "sans-serif" }}>
              End Day: {medicine.endDate || "N/A"}
            </h3>
            <h3 style={{ fontFamily: "sans-serif" }}>
              Notes: {medicine.notes || "None"}
            </h3>
            <h3 style={{ fontFamily: "sans-serif" }}>
              Taken: {medicine.taken ? "Yes" : "No"}
            </h3>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              bottom: "10px",
              position: "absolute",
              width: "100%",
            }}
          >
            <button
              style={{
                backgroundImage: "url(./button.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "150px",
                height: "45px",
                border: "none",
                backgroundColor: "white",
                mixBlendMode: "multiply",
                borderRadius: "4vh",
              }}
            >
              Request Renewal
            </button>
            <button
              style={{
                backgroundImage: "url(./button.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "150px",
                height: "45px",
                border: "none",
                backgroundColor: "white",
                mixBlendMode: "multiply",
                borderRadius: "4vh",
              }}
            >
              Mark as Done
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;