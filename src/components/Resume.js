import { Generator } from "./Generator";
import { useNavigate } from "react-router-dom";

export const Resume = () => {
    const navigate = useNavigate()
    const opn = () => {
        window.open("", "Resume", "width=1000,height=1000");
    }
    const back = () =>{
        localStorage.clear("ContactStatus")
        navigate("/BasicDetails")
        window. location. reload(false)
    }
    return <div class="text-center"><br/><br/><br/>
    <strong class="text-white">Resume Download</strong>
    <hr/><div class="card container">
        <br/><Generator/><br/>
    </div>
    <button class="btn btn-danger" onClick={()=>back()}>Back</button><button class="btn btn-success">Download</button><button class="btn btn-success" onClick={()=>opn()}>Open</button>
    </div>
}