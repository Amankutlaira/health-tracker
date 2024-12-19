import React from 'react';

const Cards = () => {
  const medicines = [
    { name: "Medicine1", description: "Description1", Time: "Time1" },
    { name: "Medicine2", description: "Description2", Time: "Time2" },
    { name: "Medicine3", description: "Description3", Time: "Time3" },
    { name: "Medicine4", description: "Description4", Time: "Time4" },
    { name: "Medicine5", description: "Description5", Time: "Time5" },
    { name: "Medicine6", description: "Description6", Time: "Time6" },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        gap: "30px",
        justifyContent: "center",
        overflowY: 'scroll',
        scrollbarWidth: "none",
        height: "575px",
        paddingTop: "10px",
      }}
      id="container"
    >
      {medicines.map((medicine, index) => (
        <div
          key={index}
          id={`medicine-${index + 1}`} // Unique ID for each card
          style={{
            backgroundColor: "lightgreen",
            width: "400px",
            height: "200px",
            borderRadius: "20px",
          }}
        >
          <h2
            style={{
              paddingBottom: "25px",
              backgroundColor: "lightblue",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
              textAlign: "center",
            }}
          >
            {medicine.name}
          </h2>
          <h4 style={{ paddingBottom: "20px" }}>{medicine.description}</h4>
          <h3 style={{ paddingBottom: "15px" }}>{medicine.Time}</h3>
        </div>
      ))}
    </div>
  );
};

export default Cards;