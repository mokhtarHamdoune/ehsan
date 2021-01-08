import React from 'react';
import './user_account.style.css';
import SideBar from '../side-bar/side-bar.component';
import UserProfile from '../user-profile/user-profile.component';
import NewPub from '../new_pub/new_pub.component';
import MyPubsPage  from '../my-pubs-page/my-pubs.component';
import ListMsgs from '../list-msgs-page/list-msgs.component';
import MessagePage from '../messag-page/message.component';
import PubDetails from '../pub-details/pub-details.component';
import {Route,Switch, useRouteMatch} from 'react-router-dom';
function UserAccount (props){
    let {path} = useRouteMatch();
    return (
        <div className='account-container'>
            <SideBar />
            <Switch>
                <Route path={`${path}/new-pub`}>
                    <NewPub />
                </Route>

                <Route path={`${path}/my-pubs/details/:pub_id`} render={(props)=><PubDetails myPub {...props}/>}/>

                <Route path={`${path}/my-pubs`}>
                    <MyPubsPage/>
                </Route>
                <Route path={`${path}/messages/:msg_id`} component={MessagePage} />
                
                <Route path={`${path}/messages`} component={ListMsgs}/>

                <Route path={path} component={UserProfile}/>

            </Switch>
        </div>
    );
}

export default UserAccount;