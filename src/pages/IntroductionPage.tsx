import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import { useUserStore } from "../store/UserStore";

const IntroductionPage = () => {
    const { updateUser, name } = useUserStore();
    const navigate = useNavigate();
    const saveUser = () => {
        updateUser({ configured: true })
        navigate("/");
    }

    return (
        <div><h3>Let's Begin, {name}!</h3>
            <p>This is your budd, cat. She will assist you in any topic you want. </p>
            <p>Also, you can feed, pet and interact with your budd.</p>
            <img src="" alt="imagenes de ejemplo" />
            <Button onClick={saveUser}>Start</Button>
        </div>
    )
}

export default IntroductionPage