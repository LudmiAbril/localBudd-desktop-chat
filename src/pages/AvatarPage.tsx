import AvatarPicker from "../components/AvatarPicker";
import { useUserStore } from "../store/UserStore";

const AvatarPage = () => {
  const { chatAvatar } = useUserStore();
  return (
    <div className="w-screnn h-screen bg-gray-500 flex flex-col justify-center items-center">
      <h4 className="text-center text-3xl pt-10">Mi Avatar</h4>
      <img
        src={`/src/assets/avatar-full-${chatAvatar}.png`}
        alt="interfaz"
        width={180}
        className="my-7"
      />
      <AvatarPicker />
    </div>
  );
};

export default AvatarPage;
