import {Resume} from "./Resume"
import { ResumeRouter } from "../router/ResumeRouter"
import {Appgrid} from "./Appgrid"
export function Flow() {
    return <div className="App">
      {
        localStorage.getItem("ContactStatus")?<Resume/>:<Appgrid/>
      }
      
  </div>
}



/*<NavBar/>
      <div class="row">
        <div class="col-md-2">
      <SideBar/>
      </div>
      <div class="col-md-8 container">
      {load()}
      <Routers/>
      </div>
      </div>*/