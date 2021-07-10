import {useState, useEffect, useContext} from 'react';
import PageTitle from '../components/PageTitle';
import {UserContext} from '../contexts/UserContext';

function HomePage() {
    const [todayDate, setTodayDate] = useState();
    const [winWidth, setWinWidth] = useState();
    const {user} = useContext(UserContext);
    // set environment
    useEffect(()=>{
        const todayDateRaw = new Date();
        const month=todayDateRaw.getMonth()+1<10?`0${todayDateRaw.getMonth()+1}`:todayDateRaw.getMonth()+1;
        const day=todayDateRaw.getDate()<10?`0${todayDateRaw.getDate()}`:todayDateRaw.getDate();
        setTodayDate(`${todayDateRaw.getFullYear()}/${month}/${day}`);
        setWinWidth(window.innerWidth);
        window&&window.scrollTo(0,0);
    },[]);
    
    return (
        <div style={{backgroundColor: '#f1f1fa', padding: '70px 50px'}}>
       
        {/* <PageTitle maintitle='Timesheet Entry' subtitle={user.email&&`for ${user.firstname} ${user.lastname}`} /> */}
        <PageTitle maintitle='Ultimate Renovations Timesheets' subtitle= {`Welcome ${user.firstname} ${user.lastname}.`}/>
        <h4 style={{textAlign: 'center', marginBottom: '40px'}}>Today is {todayDate}</h4>
        <div style={{width: '100%', height: '100vh', boxSizing: 'borderBox'}}>
        <div style={{width: '60%', paddingBottom: '50px', marginLeft: '20%', boxSizing: 'borderBox'}}>
            <img style={{width: '100%'}} src="/img/ultimate_renovations-white_logo.png" alt="Ultimate Renovations large logo" />
        </div>
        </div>
        </div>
    )
}

export default HomePage;