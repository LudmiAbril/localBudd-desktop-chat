import { useUserStore } from "../store/UserStore"

const LanguagePicker = () => {
  const { language, updateUser } = useUserStore();

  const languages = [
    { label: "English", value: "en" }, {
      label: "Español", value: "es"
    }
  ]

  const sectionText = language === 'en' ? "Select Language" : "Selecciona un idioma";

  return (
    <div className="flex flex-col">
      <h3>{sectionText}</h3>
      <select name="lang" id="lang" value={language} onChange={(e) => updateUser({ language: e.target.value as Language })}>
        {languages.map((lan, index) => (
          <option defaultValue={language} key={index} value={lan.value}>{lan.label}</option>
        ))}
      </select>
    </div>
  )
}

export default LanguagePicker