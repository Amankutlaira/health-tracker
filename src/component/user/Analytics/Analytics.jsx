import { ProImg } from "../../../styles";

const Analytics = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-around",height:"75vh",width:"100%"}}>
        <img
        src="./appointment.jpg"
        alt=""
        style={{
            width: "50vh",
            height: "40vh",
            backgroundRepeat: "no-repeat",
            borderRadius:"20px"
        }}
        />
        <img
            src="./appointment.jpg"
            alt=""
            style={{
                width: "50vh",
                height: "40vh",
                bottom: "90px",
                position:"absolute",
                backgroundRepeat: "no-repeat",
                borderRadius:"20px"
            }}
        />
        <img
        src="./appointment.jpg"
        alt=""
        style={{
            width: "50vh",
            height: "40vh",
            backgroundRepeat: "no-repeat",
            borderRadius:"20px"
        }}
        />
    </div>
  );
};

export default Analytics;