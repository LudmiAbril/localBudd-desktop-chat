import { Link } from "react-router-dom"

const NavBar = () => {
  const ButtonStyles = "cursor-pointer px-4 py-2 text-white font-semibold hover:bg-[#6EC4A9]";
  return (
    <div className="bg-[var(--primary)] h-screen w-[12rem]">
      <div className="flex flex-col space-y-2">
        <Link className={ButtonStyles} to="/home/chat">Chat</Link>
        <Link className={ButtonStyles} to="/home/avatar">Avatar</Link>
      </div>
    </div>
  )
}

export default NavBar