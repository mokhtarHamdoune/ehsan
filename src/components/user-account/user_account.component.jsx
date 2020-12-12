import React from 'react';
import './user_account.style.css';
import SideBar from '../side-bar/side-bar.component';
import UserProfile from '../user-profile/user-profile.component'

class UserAccount extends React.Component{

    render(){
        return (
            <div className='account-container'>
                <SideBar/>
                <UserProfile/>
            </div>
        );
    }
}

export default UserAccount;