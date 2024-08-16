import Announce from "../Announcer";
import Calendar from "../Calendar";
import PsnMeet from "../psnMeet";
import Applications from "../Applications";


const Content =({ sendWorkList, sendNewsList }) => { 
  return (
    <div className="grid gap-y-4">
      <PsnMeet/>
      <Calendar api_workList={sendWorkList}/>
      <Announce api_newsList={sendNewsList}/>
      <Applications/>
    </div>
  )
}
export default Content;