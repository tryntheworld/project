import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const navs = [
  {title:"ปสน.", sectionId:"Psn-section"},
  {title:"ตารางาน", sectionId:"Calendar-section"},
  {title:"ประชาสัมพันธ์", sectionId:"Announcer-section"},
  {title:"โปรแกรม และ สื่อ", sectionId:"Application-section"},

]
const Navbar =() => {
  const [isMouseEnter,setIsMouseEnter] = useState([]);
    return (
        <div className='flex flex-col px-5 gap-3 font-semibold mt-5 mb-5'
        
        > 
         {
          navs.map((nav, index) => (
            <div key={index} onClick={() => window.scrollTo({top: document.getElementById(nav.sectionId).offsetTop - 50, behavior: "smooth"})}
            className=' cursor-pointer flex'
            onMouseEnter={() => setIsMouseEnter({[nav.title]: true})}
            onMouseLeave={() => setIsMouseEnter({[nav.title]: false})}
            >
              <div><FontAwesomeIcon className={`mr-2 text-pink-500 ${isMouseEnter[nav.title] ? "":"hidden"}`} icon={faArrowRight}/></div>
              <div className={`${isMouseEnter[nav.title] ? "translate-x-4": "" } duration-500 ease-out`}>{nav.title}</div>
            </div>
            
          ))
         }
        </div>
    )
}
export default Navbar;