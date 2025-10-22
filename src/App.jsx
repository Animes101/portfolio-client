import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/route";
import ScrollButton from "./Components/scroll";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io";
import { AiFillMessage } from "react-icons/ai";

function App() {
  return (
    <div className="font-lora">
      <div className="fab fab-flower fixed right-0 bottom-[400px]">
        {/* a focusable div with tabIndex is necessary to work on all browsers. role="button" is necessary for accessibility */}
        <div
          tabIndex={0}
          role="button"
          className="btn btn-lg btn-circle btn-success"
        >
          <AiFillMessage />
        </div>

        {/* Main Action button replaces the original button when FAB is open */}
        <button className="fab-main-action btn btn-circle btn-lg">M</button>

        {/* buttons that show up when FAB is open */}
        <a href="https://www.linkedin.com/in/animes-barman-6470692b9/" target="_black" className="btn btn-lg btn-circle"><IoLogoLinkedin /></a>
        <button className="btn btn-lg btn-circle"><IoLogoWhatsapp /></button>
        <a href="https://mail.google.com/mail/u/0/#inbox" target="_black" className="btn btn-lg btn-circle"><MdEmail /></a>
        <a href="https://www.facebook.com/animes.barman.33" target="_black" className="btn btn-lg btn-circle"><FaFacebook /></a>
      </div>
      <RouterProvider router={router} />
      <ScrollButton />
    </div>
  );
}

export default App;
