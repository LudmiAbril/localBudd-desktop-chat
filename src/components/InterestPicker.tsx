import { useUserStore } from "../store/UserStore"

const InterestPicker = () => {
  const { language, interest: userInterest, updateUser } = useUserStore();

  const interests = {
    "coding": {
      en: "Coding",
      es: "Programación"
    },
    "task_managment": {
      en: "Taks Managment",
      es: "Administrar Tareas"
    },
    "learning": {
      en: "Learning",
      es: "Aprendizaje"
    },
    "daily_planning": {
      en: "Daily Planning",
      es: "Planeo de Rutina"
    }
  }

  const handleCheck = (interest: Interest) => {
    const updatedInterests: Interest[] = userInterest.includes(interest)
      ? userInterest.filter((i) => i !== interest)
      : [...userInterest, interest];

    updateUser({ interest: updatedInterests });
  }

  const sectionTexts = language === 'en' ? "Select your interests" : "Selecciona tus intereses";

  return (
    <div>
      <h3>{sectionTexts}</h3>
      {Object.entries(interests).map(([key, value]) => {
        const inputId = `interest-${key}`
        const isChecked = userInterest.includes(key as Interest) ? true : false
        return (
          <div>
            <input type="checkbox" id={inputId} value={key} checked={isChecked} onChange={(e) => handleCheck(e.target.value as Interest)} />
            <label htmlFor={inputId}>{value[language]}</label>
          </div>
        )
      })}
    </div>
  )
}

export default InterestPicker