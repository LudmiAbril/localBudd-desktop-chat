import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../../store/UserStore";
import { MdOutlinePets } from "react-icons/md";
import { HiChatAlt2 } from "react-icons/hi";
import { TbLogout2 } from "react-icons/tb";

const NavBar = () => {
  const { updateUser } = useUserStore();
  const navigate = useNavigate();
  const logout = () => {
    updateUser({ configured: false });
    navigate("/");
  };
  const ButtonStyles =
    "cursor-pointer px-4 text-white text-lg hover:scale-105 transition flex items-center gap-3";
  return (
    <div className="bg-[var(--primary)] h-screen w-[12rem] flex flex-col space-y-6 py-4">
      <Link className={`${ButtonStyles} `} to="/home/chat">
        Chat
       <HiChatAlt2 size={23} />
      </Link>
      <Link className={ButtonStyles} to="/home/avatar">
        Avatar
        <MdOutlinePets size={20} />
      </Link>
      <p onClick={logout} className={`${ButtonStyles} mt-auto `}>
        Logout
        <TbLogout2 size={20} />
      </p>
    </div>
  );
};

export default NavBar;
