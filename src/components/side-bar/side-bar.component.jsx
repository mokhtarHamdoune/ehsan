import React,{useEffect, useState} from 'react';
import {ProSidebar,Menu,MenuItem,SidebarHeader,SidebarContent,SidebarFooter} from 'react-pro-sidebar';
import {HomeOutlined,MessageOutlined,LogoutOutlined, StarOutlined,PlusCircleOutlined, UnorderedListOutlined,MenuOutlined} from '@ant-design/icons';
import 'react-pro-sidebar/dist/css/styles.css';
import './side-bar.style.css';
import {Link,useRouteMatch} from 'react-router-dom';

function SideBar (props){
    let {url} = useRouteMatch();

    const [isCollopased,setIsCollpased] =useState(false);
    const [isSbToggled,setSbToggled]= useState(false);
    useEffect(()=>{
        function handleSideBarChange(e){
            (e.target.innerWidth <= 768 && e.target.innerWidth >= 576) ? setIsCollpased(true) : setIsCollpased(false);
        }

        window.addEventListener('resize',handleSideBarChange)
        return ()=>window.removeEventListener('resize',handleSideBarChange);
    })

    return(
        <>
        <div className='sidebar-toggle-btn' onClick={()=>setSbToggled(true)}>
            <MenuOutlined/>
        </div>
        <ProSidebar collapsed={isCollopased} breakPoint='sm'  toggled={isSbToggled} onToggle={(value)=>setSbToggled(value)}>
                <SidebarHeader>
                    <h2 className='side-bar-header'>Ehsan</h2>
                </SidebarHeader>
                <SidebarContent >
                    <Menu iconShape="circle" className='account-sidebar-menu'>
                        <MenuItem icon={<HomeOutlined style={{fontSize:20}} />}>
                            My Account
                            <Link to={url}/>
                        </MenuItem>
                        <MenuItem icon={<PlusCircleOutlined style={{fontSize:20}}/>}>
                            New Publication
                            <Link to={`${url}/new-pub`}/>
                        </MenuItem>
                        <MenuItem icon={<UnorderedListOutlined style={{fontSize:20}} />}>
                            My Publications
                            <Link to={`${url}/my-pubs`}/>
                        </MenuItem>
                        <MenuItem icon={<MessageOutlined style={{fontSize:20}} />}>
                            Motive Messages
                            <Link to={`${url}/messages`}/>
                        </MenuItem>
                        <MenuItem icon={<StarOutlined style={{fontSize:20}}/>} >
                            Favorite Messages
                            <Link to={`${url}/fav-msgs`}/>
                        </MenuItem>
                        <MenuItem icon={<LogoutOutlined style={{fontSize:20}} />}>
                            Logout
                            <Link to='/logout'/>
                        </MenuItem>
                    </Menu>
                </SidebarContent>
                <SidebarFooter>
                    <h2 className='side-bar-header'>Ehsan</h2>
                </SidebarFooter>
            </ProSidebar>
        </>
    )
}

export default SideBar;