import React from 'react';
import './user_account.style.css';
import SideBar from '../side-bar/side-bar.component';
import UserProfile from '../user-profile/user-profile.component';
import NewPub from '../new_pub/new_pub.component';
import {Route,Switch, useRouteMatch} from 'react-router-dom';
function UserAccount (props){
    let {path} = useRouteMatch();
    return (
        <div className='account-container'>
            <SideBar/>
            <Switch>
                <Route path={`${path}/new-pub`}>
                    <NewPub />
                </Route>
                <Route path={path}>
                    <UserProfile/>
                </Route>
            </Switch>
        </div>
    );
}

export default UserAccount;