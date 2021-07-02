import {useState,useEffect} from 'react';
import axios from 'axios';
// components
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Signup from './components/Signup';
import TimesheetEntry from './components/TimesheetEntry';
import TimesheetView from './components/TimesheetView';
import EditTimesheet from './components/EditTimesheet';
// other internal
import {UserContext} from "./contexts/UserContext";
import {PageContext} from "./contexts/PageContext";
import {EditEntryContext} from "./contexts/EditEntryContext";
import AppCss from './styles/app.css';
import {USER_INIT} from './constants/inits';

function App() {
    const [user, setUser] = useState(USER_INIT);
    const [page, setPage] = useState("login"); // ['Login','Logout', 'Signup', 'TimesheetEntry', 'TimesheetView', 'EditTimesheet']
    const [editEntry, setEditEntry] = useState(USER_INIT);
    const [winWidth, setWinWidth] = useState(0);
    // reset window width on window resize
    useEffect(() => {
        setWinWidth(window.innerWidth);
        const handleResize = () => {
            setWinWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => { window.removeEventListener('resize', handleResize) }
    }, []);
    return (
        <>
            <header>            
                <PageContext.Provider value={{page, setPage}}>
                    <UserContext.Provider value={{user, setUser}}>
                        <EditEntryContext.Provider value={{editEntry, setEditEntry}}>
                            <Banner />
                            <NavBar />
                            {page.toUpperCase()==='LOGIN'&&<Login setPage={setPage}/>}
                            {page.toUpperCase()==='SIGNUP'&&<Signup setPage={setPage}/>}
                            {page.toUpperCase()==='EDITTIMESHEET'&&<EditTimesheet />}
                            {page.toUpperCase()==='TIMESHEETENTRY'&&<TimesheetEntry />}
                            {page.toUpperCase()==='TIMESHEETVIEW'&&<TimesheetView />}
                            
                        </EditEntryContext.Provider>
                    </UserContext.Provider>
                </PageContext.Provider>
            </header>
            <AppCss />
        </>
    );
}

export default App;
