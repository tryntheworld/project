import Announce from "../Announcer";
import Calendar from "../Calendar";
import PsnMeet from "../psnMeet";
import Applications from "../Applications";

const Content =() => { 
  return (
    <div className="grid gap-y-4">
      <PsnMeet/>
      <Calendar/>
      <Announce/>
      <Applications/>
    </div>
  )
}
export default Content;