import React from 'react';
import DataTable from 'react-data-table-component';
import {HeartOutlined,HeartFilled,DeleteOutlined} from '@ant-design/icons';
import './list-msgs.style.css';
//my dammy data
import dummyData from './my-dump-data';
//my costum style 
const costumStyles={
    table:{
        style:{
            backgroundColor:'transparent'
        }
    },  
    header:{
        style:{
            backgroundColor:'none'
        }
    },
    contextMenu: {
        style: {
            fontSize:'20px',
            fontFamily:'Lato, sans-serif',
            backgroundColor:'rgba(237, 27, 12,0.6)',
            color:'#fff'
        }
    },
    headCells:{
        style: {
          fontSize:'18px',
          fontFamily:'Lato, sans-serif'
        }
    },
    rows:{
        style:{
            fontSize:'16px',
            fontFamily:'sans-serif',
            backgroundColor:'rgba(255,255,255,0.8)' 
        }
    }
}
//columns 
const columns = (handleFavMsg)=>[
    {
        cell: row =>
        (<div onClick={()=>handleFavMsg(row)}>
            {
                row.isFaved ?<HeartFilled className='fav-msg' />  :<HeartOutlined className='fav-msg'/> 
            }  
        </div>),
        allowOverflow: true,
        button: true,
        width: '56px', // custom width for icon button
    },
    {
        name:'Full Name',
        selector:'full_name',
        sortable:true,
        center:true
    },
    {
        name:'Message',
        selector:'message',
        center:true
    },
    {
        name:'Date',
        selector:'date',
        sortable:true,
        center:true
    },
]
const contextActions = deleteHandler => (<DeleteOutlined className='delete-icon' onClick={deleteHandler}/>);
class  ListMsgs extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedRows: [],
            toggleCleared: false,
            data:[]
        };
        this.handleFavMsg = this.handleFavMsg.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSelectedRow=this.handleSelectedRow.bind(this);
        this.handleRowClick = this.handleRowClick.bind(this);
        console.log(props);
    }
    //just simulation for the moment 
    componentDidMount(){
        this.setState({data:dummyData});
    }
    componentWillUnmount(){
        this.setState({});
    }
    // handle favorite messages
    handleFavMsg(row){
        this.setState({data:this.state.data.map(currentData=>{
            if(currentData.id===row.id)currentData.isFaved = !currentData.isFaved;
            return currentData;
        })});
    }
    //method to handle the delete option
    handleDelete(){
        const {data,selectedRows,toggleCleared} =this.state;
        //selectedRows will automaticly be ampty after I think toggledCleard changed
        //so I dont need to update it (^ ^)
        this.setState({
            data:data.filter(current=>(!selectedRows.includes(current))),
            toggleCleared:!toggleCleared
        })
    }

    //input: is  a object  {allSelected: boolean, selectedCount: number, selectedRows:array}
    //if selectableRowsVisibleOnly used so just 10 items will selected so allSelected=true; 
    //mehod to handle the selected row using checkboxes
    handleSelectedRow(state){
        this.setState({selectedRows:state.selectedRows});
    }
    //method to handle row clicked to send the user to message selected
    //but I'm not sur for the moment if I use react-router dom correctly
    handleRowClick(row){
        const {location,history}  = this.props;
        history.push(`${location.pathname}/${row.id}`);
    }
    render(){
        const { data, toggleCleared } = this.state;
        return (
            //noHeader mean num of selected rows disappear
            <div className='list-msgs-container'>
                <div className='list-msgs-header'>
                    <h1>List of Motivation Messages</h1>
                </div>
                <div className='msgs-table'>
                    <DataTable 
                    columns={columns(this.handleFavMsg)} 
                    data={data}
                    customStyles={costumStyles}
                    striped
                    contextActions={contextActions(this.handleDelete)}
                    highlightOnHover 
                    pointerOnHover
                    selectableRows 
                    selectableRowsVisibleOnly
                    selectableRowsHighlight
                    pagination
                    onSelectedRowsChange={this.handleSelectedRow}
                    clearSelectedRows={toggleCleared}
                    onRowClicked={this.handleRowClick}/>
                </div>
            </div>
    
        );
    }
}
export default ListMsgs;