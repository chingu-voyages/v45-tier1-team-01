import githubLogo from "../assets/githubMark.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <div className="footer-left">
          <p>Designed by:</p>
        </div>
        <div className="img-wrapper">
          <a target="_blank" href="https://github.com/CharanMN7" className="circle">
            <img
              src="https://avatars.githubusercontent.com/u/103265133?s=64&amp;v=4"
              alt="@CharanMN7"
              size="60"
              height="60"
              width="60"
              className="avatar circle"
              title="Charan"
            />
          </a>
          <a
            target="_blank"
            href="https://github.com/Sushants-Git"
            className="circle"
          >
            <img
              src="https://avatars.githubusercontent.com/u/100516354?s=64&amp;v=4"
              alt="@Sushants-Git"
              size="60"
              height="60"
              width="60"
              className="avatar circle"
              title="Sushant Mishra"
            />
          </a>
          <a target="_blank" href="https://github.com/ashiyaman" className="circle">
            <img
              src="https://avatars.githubusercontent.com/u/14231344?s=64&amp;v=4"
              alt="@ashiyaman"
              size="60"
              height="60"
              width="60"
              className="avatar circle"
              title="Ashiya Banu"
            />
          </a>
          <a
            target="_blank"
            href="https://github.com/itzmidinesh"
            className="circle"
          >
            <img
              src="https://avatars.githubusercontent.com/u/5523347?s=64&amp;v=4"
              alt="@itzmidinesh"
              size="60"
              height="60"
              width="60"
              className="avatar circle"
              title="Dinesh Anbazhagan"
            />
          </a>
        </div>
      </div>
      <div>
        <a
          href="https://www.chingu.io/"
          className="link-to-chingu"
          target="_blank"
        >
          Made for Chingu Voyage 45 &copy; 2023
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path d="M18.25 15.5a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-.75-.75h-9a.75.75 0 0 0 0 1.5h7.19L6.22 16.72a.75.75 0 1 0 1.06 1.06L17.5 7.56v7.19c0 .414.336.75.75.75z"></path>
          </svg>
        </a>
      </div>
      <div>
        <p>GitHub Repo:</p>
        <a
          href="https://github.com/chingu-voyages/v45-tier1-team-01"
          target="_blank"
        >
          <img
            style={{ width: "60px", height: "60px" }}
            src={githubLogo}
            alt="Github Logo"
          />
        </a>
      </div>
    </footer>
  );
}
