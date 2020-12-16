import React, { useEffect, useState } from 'react';
import './drop_zone.style.css';
import {useDropzone} from 'react-dropzone';
import {DoubleRightOutlined,UploadOutlined} from '@ant-design/icons'
function DropZone ({dropMsg,handleImages}){
    const [files,setFiles] = useState([]);
    const {getRootProps,getInputProps} = useDropzone(
        {   
            accept:'image/*',
            onDrop:acceptedFiles =>{
                handleImages(acceptedFiles);
                setFiles(acceptedFiles.map(file => Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })));
            }
        }
    );
    useEffect(()=>{
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));}
    ,[files]);

    return (
        <div className='drop-container'>
            <div {...getRootProps({className:'drop-zone'})}>
                <input {...getInputProps()}/>
                <UploadOutlined style={{fontSize:50,color:'#eee'}}/>
                <p>{dropMsg}</p>
            </div>
            <div className='shown-files-container'>
                <h4>Uploaded files or images will be shown here <DoubleRightOutlined rotate={90} className='going_down' /></h4>
                <div className='thumbs-container'>
                    {
                        files.map(file=>
                        (<div className='thumb' key={file.name}>
                            <div className='thumb-inner'>
                                <img src={file.preview} alt={file.name}/>
                            </div>
                        </div>))
                    }
                </div>
            </div>
        </div>
    )
}

export default DropZone;