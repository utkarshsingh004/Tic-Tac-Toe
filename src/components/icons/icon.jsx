import { FaPen, FaRegCircle, FaTimes } from "react-icons/fa";

function Icon({ name }) {
  if (name === "circle") {
    return <FaRegCircle style={{width: "50px", height: "50px" , color:"#242424"  }} className="icon" />;
  } else if (name === "cross") {
    return <FaTimes style={{ width: "50px", height: "50px", color:"#242424"  }} className="icon" />;
  } else {
    return <FaPen style={{width: "50px", height: "50px", color:"#242424" }} className="icon" />;
  }
}

export default Icon;
