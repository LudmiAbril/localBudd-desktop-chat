import { useUserStore } from "../store/UserStore";

const PronounsPicker = () => {
  const { pronouns: userPronouns, language, updateUser } = useUserStore();

  const pronouns = {
    'she/her': {
      en: "She/Her",
      es: "Ella"
    },
    'he/him': {
      en: "He/Him",
      es: "Él"
    }
  }

  const sectionText = language === 'en' ? "Which pronouns do you use?" : "Que pronombres usas?";

  return (
    <div>
      <h3>{sectionText}</h3>
      <select name="pronouns" id="pronouns" value={userPronouns} onChange={(e) => updateUser({ pronouns: e.target.value as Pronouns })}>
        {Object.entries(pronouns).map(([key, values]) => (
          <option key={key} value={key}>{values[language]}</option>
        ))}
      </select>
    </div>
  )
}

export default PronounsPicker