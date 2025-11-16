import { Link } from "react-router-dom"
import Button from "./ui/Button"

const Introduction = () => {
    return (
        <div><h3>Let's Begin, user!</h3>
            <p>This is your budd, cat. She will assist you in any topic you want. </p>
            <p>Also, you can feed, pet and interact with your budd.</p>
            <img src="" alt="imagenes de ejemplo" />
            <Button><Link to={"/home/chat"}>Start</Link></Button>
        </div>
    )
}

export default Introduction