import './App.css';
import React from "react";
import "./App.css";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {BrowserRouter, Route} from "react-router-dom";
import {updateNewPostText} from "./Redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

// import styles from "./components/Profile/Profile.module.css";

function App(props) {
    return (
        <div className="app-wrapper">
            <Header massage="что то написано"/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path="/dialogs" render={() => <DialogsContainer
                    // dialogsData={props.state.dialogPage.dialogsData}
                    // massageData={props.state.dialogPage.massageData}
                    // newMassageText={props.state.dialogPage.newMassageText}
                    // dispatch={props.dispatch}
                    store = {props.store}
                />}/>
                <Route path="/profile" render={() => <Profile
                    store = {props.store}
                />}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
            </div>
        </div>
    );
}

export default App;