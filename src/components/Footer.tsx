import { EmailIcon, GitHubIcon, LinkedInIcon } from "../utilities/svg";
import footerImg from "../assets/get-connected.jpg"; // Tell webpack this JS file uses this image

const Footer = () => {
  return (
    <footer id="footer" className="my-5">
      <div className="d-flex align-items-center justify-content-center h-100">
        <div className="d-flex flex-column gap-2 align-items-center justify-content-center">
          <img
            src={footerImg}
            alt="the-creation-of-Adam"
            className="rounded-5 border border-dark border-opacity-50"
          />
          ;<h2 className="text-center text-light-yellow">Let's Connect</h2>
          <div className="d-flex gap-2">
            <div>
              <a
                className="btn btn-dark px-3 py-2 text-uppercase text-light-yellow rounded-5 border-black  d-flex gap-1 align-items-center"
                href="mailto:trungha.dev@gmail.com"
              >
                <EmailIcon size={32} />
              </a>
            </div>
            <div>
              <a
                className="btn btn-dark px-3 py-2 text-uppercase text-light-yellow rounded-5 border-black  d-flex gap-1 align-items-center"
                href="https://github.com/earlybird-dev/vocab-builder"
                target="_blank"
              >
                <LinkedInIcon size={32} />
              </a>
            </div>
            <div>
              <a
                className="btn btn-dark px-3 py-2 text-uppercase text-light-yellow rounded-5 border-black  d-flex gap-1 align-items-center"
                href="https://github.com/earlybird-dev/vocab-builder"
                target="_blank"
              >
                <GitHubIcon size={32} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
