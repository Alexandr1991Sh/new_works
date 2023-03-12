import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import Friends from "./Components/Friends/Friends";
import Test from "./Components/Test/Test";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import Dialogs from "./Components/Dialogs/Dialogs";

const App = (props) => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/Profile/*' element={<Profile
                        store={props.store}
                        // profilePage={props.State.profilePage}
                        // dispatch={props.dispatch}
                    />}/>
                    <Route path='/Dialogs/*' element={<DialogsContainer
                        store={props.store}
                        // dialogsPage={props.State.dialogsPage}
                        // dispatch={props.dispatch}
                    />}/>
                    <Route path='/News/*' element={<News state={props.State.news}/>}/>
                    <Route path='/Music/*' element={<Music/>}/>
                    <Route path='/Settings/*' element={<Settings/>}/>
                    <Route path='/Friends/*' element={<Friends
                        state={props.State.friendsPade}
                        dispatch={props.dispatch}
                    />}/>
                    <Route path='/Test/*' element={<Test state={props.State.testText}/>}/>
                </Routes>
            </div>
        </div>
    );
}


export default App;
