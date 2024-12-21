import { footer } from "../../../styles";

const Footer = () => {
  return (
    <>
      <div style={footer}>
        <h2>
          &copy; 2023 Company by XYZ | All Rights Reserved | Powered by Force
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "15%",
          }}
        >
          <div
            style={{
              backgroundImage: "url(./facebook.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "5vh",
              height: "5vh",
            }}
          ></div>
          <div
            style={{
              backgroundImage: "url(./twitter.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "5vh",
              height: "5vh",
            }}
          ></div>
          <div
            style={{
              backgroundImage: "url(./vimeo.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "5vh",
              height: "5vh",
            }}
          ></div>
          <div
            style={{
              backgroundImage: "url(./instagram.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "5vh",
              height: "5vh",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Footer;
