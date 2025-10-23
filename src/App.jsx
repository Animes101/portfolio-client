import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/route";
import ScrollButton from "./Components/scroll";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io";
import { AiFillMessage } from "react-icons/ai";
import { MdConnectWithoutContact } from "react-icons/md";


function App() {
  return ( 
    <div className="font-lora">
      <div className="fab fab-flower fixed right-0 bottom-[400px]">
        {/* a focusable div with tabIndex is necessary to work on all browsers. role="button" is necessary for accessibility */}
        <div
          tabIndex={0}
          role="button"
          className="btn btn-lg btn-circle bg-buttonBankground dark:bg-backgroundDark border-textColor"
        >
          <AiFillMessage  className="text-backgroundDark dark:text-textColor"/>
        </div>

        {/* Main Action button replaces the original button when FAB is open */}
        <button className="fab-main-action bg-buttonBankground border-backgroundDark dark:bg-backgroundDark btn btn-circle btn-lg"><MdConnectWithoutContact className="text-backgroundDark dark:text-textColor" /></button>

        {/* buttons that show up when FAB is open */}
        <a href="https://www.linkedin.com/in/animes-barman-6470692b9/" target="_black" className="btn btn-lg btn-circle bg-buttonBankground border-textColor dark:bg-backgroundDark "><IoLogoLinkedin className="text-backgroundDark dark:text-textColor" /></a>
        <a href="" className="btn btn-lg btn-circle bg-buttonBankground border-textColor dark:bg-backgroundDark"><IoLogoWhatsapp  className="text-backgroundDark dark:text-textColor "/></a>
        <a href="https://mail.google.com/mail/u/0/#inbox" target="_black" className="btn btn-lg btn-circle bg-buttonBankground border-textColor dark:bg-backgroundDark "><MdEmail className="text-backgroundDark dark:text-textColor" /></a>
        <a href="https://www.facebook.com/animes.barman.33" target="_black" className="btn btn-lg btn-circle bg-buttonBankground border-textColor dark:bg-backgroundDark "><FaFacebook  className="text-backgroundDark dark:text-textColor"/></a>
      </div>
      <RouterProvider router={router} />
      <ScrollButton />
    </div>
  );
}

export default App;
