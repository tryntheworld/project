import Calendar from "../Calendar";
import PsnMeet from "../psnMeet";
const Content =() => { 
  return (
    <div>
      <PsnMeet/>
      <Calendar/>
      <Announce/>
      <div className='mb-96'>โปรแกรม</div>
      <div className='mb-96'>สื่อ</div>
    </div>
  )
}
export default Content;