
import './App.css'
import Meeting from './sections/Meeting'
import Navbar from './sections/Navbar'
import Contact from './sections/contact'
import Content from './sections/rightSection'

import {useState,useEffect} from 'react'
import axios from 'axios'


function App() {
        const [workList,setWorklist] = useState([]);
        const [newsList, setNewsList] = useState([]);
        const [psnList, setPsnList] = useState([]);
        const [meetList, setMeetList] = useState([]);

        useEffect(() => {
          axios.get('https://jolopo-loei.moph.go.th/php-api/work_api.php').then((workList) => setWorklist(workList.data));
        }, []);

        useEffect(() => {
          axios.get('https://jolopo-loei.moph.go.th/php-api/news_api.php').then((newsList) => setNewsList(newsList.data));
        }, []);

        useEffect(() => {
          axios.get('https://jolopo-loei.moph.go.th/php-api/psn_api.php').then((psnList) => setPsnList(psnList.data));
        }, []);

        useEffect(() => {
          axios.get('https://jolopo-loei.moph.go.th/php-api/meet_api.php').then((meetList) => setMeetList(meetList.data));
        }, []);
		
  return (

      <div className='mt-14 mx-auto max-w-6xl grid grid-cols-[40%_60%]'>
        <div>
          <div className='sticky top-14 grid grid-rows[20%_40%_25%] h-[100vh]'>
            <Meeting api_meetList={meetList}/>
            <Navbar/>  
            <Contact/> 
          </div>
        </div>
        <Content sendWorkList={workList} sendNewsList={newsList} sendPsnList={psnList}/>
      </div>

  )
}

export default App;
