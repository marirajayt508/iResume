import { Route,Routes,BrowserRouter } from "react-router-dom";
import { Heropage } from "../components/HeroPage/HeroPage";
import { BasicDetails } from "../components/BasicDetails";
import { ContactDetails } from "../components/ContactDetails";
import { NotFound } from "../components/404";
import { Resume } from "../components/Resume";


export const Routers = () => {
  return  <BrowserRouter>
    <Routes>
    <Route path='/' element={< Heropage/>}/>
    <Route path="/BasicDetails" element={<BasicDetails/>} />
    <Route path="/ContactDetails" element={<ContactDetails/>} />
    <Route path='/Resume' element={< Resume/>}/>
    <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>

}
/*<Route path='/' element={< Heropage/>}/>*/