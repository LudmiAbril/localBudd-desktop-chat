import NavBar from "../components/ui/NavBar"
import ChatPage from "./ChatPage"
import AvatarPage from "./AvatarPage"
import { Route, Routes } from "react-router-dom"

const HomePage = () => {
    return (
        // no anidar dos veces routerbrowse (routes si)
        <div className="flex">
            <NavBar />
              <div className="flex-1"> 
            <Routes>
                <Route path="chat" element={<ChatPage />} />
                <Route path="avatar" element={<AvatarPage />} />
            </Routes>
            </div>
        </div>
    )
}

export default HomePage