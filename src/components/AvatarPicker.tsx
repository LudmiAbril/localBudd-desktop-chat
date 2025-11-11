import { useUserStore } from "../store/UserStore";

const AvatarPicker = () => {
    const { language, updateUser, chatAvatar } = useUserStore();

    const avatar = {
        "bunny": {
            en: "Bunny",
            es: "Conejo"
        },
        "cat": {
            en: "Cat",
            es: "Gato"
        },
        "panda": {
            en: "Panda",
            es: "Panda"
        }
    }

    const sectionText = language === 'en' ? "Pick an avatar" : "Elije un avatar";

    return (
        <div>
            <h3>{sectionText}</h3>
            <select name="avatar" id="avatar" value={chatAvatar} onChange={(e) => updateUser({ chatAvatar: e.target.value as ChatAvatar })}>
                {
                    Object.entries(avatar).map(([key, value]) => (
                        <option key={key} value={key}>{value[language]}</option>
                    )
                    )
                }
            </select>
        </div>
    )
}

export default AvatarPicker