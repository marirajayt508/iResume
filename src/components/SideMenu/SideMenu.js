import './css/sidemenu.css'
import './css/btn-colors.css'
import { statusTick } from './statusTick'
export const SideBar = () => { 

  /*const check = () => {
    localStorage.getItem("ContactStatus")?window.location.assign("/Resume"):alert("Complete Contact Details First")
  }*/
  const side = () =>{
    return <div>
    <div class="left-side">
    <div class="sidebar bg-dark">
        <br/>
        <a href="/BasicDetails" class="text-white"><br/><br/><strong>BasicDetails {localStorage.getItem("BasicStatus")?statusTick():""}</strong><br/></a>
        <a href="/ContactDetails" class="text-white"><br/><strong>Contact Details {localStorage.getItem("ContactStatus")?statusTick():""}</strong><br/></a>
        <a href="/ContactDetails" class="text-white"><br/><strong>Educational Details {localStorage.getItem("BasicStatus")?statusTick():""}</strong><br/></a>
        <a href="" class="text-white"><br/><strong>Area Of Intrest {localStorage.getItem("BasicStatus")?statusTick():""}</strong><br/></a>
        <a href="" class="text-white"><br/><strong>Certification Details {localStorage.getItem("BasicStatus")?statusTick():""}</strong><br/></a>
        <a href="" class="text-white"><br/><strong>Family Details {localStorage.getItem("BasicStatus")?statusTick():""}</strong><br/></a>
        <a href="" class="text-white"><br/><strong>Addtional Details {localStorage.getItem("BasicStatus")?statusTick():""}</strong><br/></a>
        <a class="text-white"><br/><strong>Declaration<br/>&nbsp;<br/>&nbsp;</strong></a>
  </div>
  
    </div>
      </div>
  }
    return <div>
      {
       sessionStorage.getItem("side")?side():""
      }
    </div>
}