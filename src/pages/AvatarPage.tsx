import avatarImg from "../assets/avatar.png";
const AvatarPage = () => {
  return (
    <div className="w-screnn h-screen bg-gray-200">
      <img src={avatarImg} alt="avatar" width={100} className="m-auto" />
      <h4 className="text-center">Avatar</h4>
    </div>
  )
}

export default AvatarPage