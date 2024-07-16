import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar =() => {
    return (
        <div className='flex flex-col gap-3 font-semibold'> 
          <div><FontAwesomeIcon className="mr-2 text-pink-500" icon={faArrowRight}/>ปสน.</div>
          <div>ตารางงาน</div>
          <div>ประชาสัมพันธ์</div>
          <div>โปรแกรม</div>
          <div>สื่อ</div>
        </div>
    )
}
export default Navbar;