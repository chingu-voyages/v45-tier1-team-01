import githubLogo from "../assets/githubMark.png";

export default function Footer() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderTop: "1px solid white",
        paddingTop: "20px",
        width: "90vw"
      }}
    >
      <div className="img-wrapper">
        <img src="https://contrib.rocks/image?repo=chingu-voyages/v45-tier1-team-01" />
      </div>
      <div>MeteorHub &copy; 2023</div>
      <div>
        <img
          style={{ width: "60px", height: "60px" }}
          src={githubLogo}
          alt="Github Logo"
        />
      </div>
    </div>
  );
}
