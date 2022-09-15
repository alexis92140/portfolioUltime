import { Link } from "react-router-dom";
import lich from "../assets/lichking.png";

const PortfolioContent = () => {
  // THAT SECTION IS THE HELMET WHO DISPLAY THE MENU
  // const [hiddenMenu, setHiddenMenu] = useState(false);
  return (
    <div className="Content">
      <div className="Content__LichMenu">
        <img src={lich} alt="" style={{ width: "280px", height: "60vh" }} />
        <div
          className="Content__LichMenu__Links"
          // className={hiddenMenu ? "Content_LichMenu_Links" : "Links --opened"}
          // onClick={() => setHiddenMenu(true)}
          // onKeyDown={() => setHiddenMenu(true)}
          // role="button"
          // tabIndex={0}
        >
          <Link to="/about">
            {/* contact me is now in the more about me section */}
            <p className="section">More about me</p>
          </Link>
          <Link to="/work">
            <p className="section"> See my work</p>
          </Link>
          {/* <p className="section">Contact me</p> */}
        </div>
      </div>
    </div>
  );
};

export default PortfolioContent;
