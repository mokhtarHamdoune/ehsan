import React,{useEffect, useState} from 'react';
import {ProSidebar,Menu,MenuItem,SidebarHeader,SidebarContent,SidebarFooter} from 'react-pro-sidebar';
import {HomeOutlined,MessageOutlined,LogoutOutlined, StarOutlined,PlusCircleOutlined, UnorderedListOutlined} from '@ant-design/icons';
import 'react-pro-sidebar/dist/css/styles.css';
import './side-bar.style.css';
import {Link} from 'react-router-dom';

function SideBar (props){
    const [isCollopased,setIsCollpased] =useState(false);

    useEffect(()=>{
        function handleSideBarChange(e){
            e.target.innerWidth <= 668 ? setIsCollpased(true) : setIsCollpased(false);
        }

        window.addEventListener('resize',handleSideBarChange)
        return ()=>window.removeEventListener('resize',handleSideBarChange);
    })

    return(
        <ProSidebar collapsed={isCollopased}>
                <SidebarHeader>
                    <h2 className='side-bar-header'>Ehsan</h2>
                </SidebarHeader>
                <SidebarContent >
                    <Menu iconShape="circle" className='account-sidebar-menu'>
                        <MenuItem icon={<HomeOutlined style={{fontSize:20}} />}>
                            My Account
                            <Link to='/user'/>
                        </MenuItem>
                        <MenuItem icon={<PlusCircleOutlined style={{fontSize:20}} />}>
                            New Publication
                            <Link to='/new-publication'/>
                        </MenuItem>
                        <MenuItem icon={<UnorderedListOutlined style={{fontSize:20}} />}>
                            My Publications
                            <Link to='/my-publications'/>
                        </MenuItem>
                        <MenuItem icon={<MessageOutlined style={{fontSize:20}} />}>
                            Motive Messages
                            <Link to='/messages'/>
                        </MenuItem>
                        <MenuItem icon={<StarOutlined style={{fontSize:20}}/>} >
                            Favorite Messages
                            <Link to='/fav-messages'/>
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
    )
}

export default SideBar;