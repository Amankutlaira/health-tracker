import medData from "../../../../public/medicationCard.json";

const Schedule = () => {
    const medicines = medData;

    return (
        <div style={{ overflow: "hidden", height: "680px"}}>
            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    display: "block",
                    maxHeight: "580px",
                }}
                className="medicine-table"
                aria-label="Medication Schedule"
            >
                <thead style={{backgroundColor: "#f1f1f1", zIndex: 1 }}>
                    <tr>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Medicine</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Dosage</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Frequency</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>End Day</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Notes</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Taken</th>
                    </tr>
                </thead>
                <tbody>
                    {medicines.map((med) => (
                        <tr key={med.id}>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{med.name}</td>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{med.dosage}</td>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{med.frequency}</td>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{med.endDate || "N/A"}</td>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{med.notes || "No notes"}</td>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{med.taken ? "Yes" : "No"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Schedule;