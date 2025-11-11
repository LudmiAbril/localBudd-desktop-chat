import { useUserStore } from "../store/UserStore"

const NameInput = () => {
  const { name, updateUser, language } = useUserStore();
  const sectionText = language === 'en' ? "How would you like to be called?" : "Como quieres que te llamen?";
  return (
    <div>
      <h3>{sectionText}</h3>
      <input type="text" name="name" id="name" value={name} onChange={(e) => updateUser({ name: e.target.value as string })} />
    </div>
  )
}

export default NameInput