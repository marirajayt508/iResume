import { Route,Routes,BrowserRouter } from "react-router-dom";
import { Generator } from "../components/Generator";
import { BasicDetails } from "../components/BasicDetails";
export const ResumeRouter = () => {
    <BrowserRouter>
    <Routes>
        <Route path="/Generator" element={<Generator/>}/>
        <Route path="/BasicDetails" element={<BasicDetails/>}/>
    </Routes>
    </BrowserRouter>
}