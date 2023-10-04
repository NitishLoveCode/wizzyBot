import React, { useEffect, useState } from 'react'
import { IoMdAddCircleOutline } from "react-icons/io"
import { BsDatabase } from "react-icons/bs"
import axios from 'axios';
import serverBasePath from '../../../../constants';
import { useParams } from 'react-router-dom';
import LoadingDots from '../../loading/LoadingDots';
import FileCard from './FileCard';

// -------------driver.js-----------------

import { driver } from "driver.js";
import "driver.js/dist/driver.css";

// -----------------------------------------------
export default function Pdf() {

     // ---------------for driver.js-------------

    const driverObj = driver({
    showProgress: true,
    showButtons: ['next', 'previous'],
    steps: [
      { element: '#driver_Import_PDF_Content', popover: { title: 'Train Bot with PDF', description: 'You can train your bot with PDF content.', side: "left", align: 'start' }},
    ]
  });
  useEffect(()=>{
    setTimeout(()=>{
      const find_new_user=localStorage.getItem("embed-and-pdf")
      if(find_new_user===null){
        driverObj.drive();
        localStorage.setItem("embed-and-pdf",true)
      }
    },7000)
  },[])
  // --------------------------------


    const [files, setFiles] = useState([]); // State to keep track of uploaded files
    const { id } = useParams();
    const [trainedFiles, setTrainedFiles] = useState([]);
    const [uploadingFile, setUploadingFile] = useState(null); // State to keep track of the uploading file
    const [loading, setLoading] = useState(true);

    function handleFileUpload(e) {
        // Append new files to existing ones
        setFiles(files => [...files, ...e.target.files]);

        setUploadingFile(e.target.files[0].name);


        // Prepare FormData
        const formData = new FormData();
        Array.from(e.target.files).forEach(file => {
            formData.append('file', file);
        });
        formData.append('id', id);

        // Send files using axios
        let config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }

        axios.post(serverBasePath + '/train/files', formData, config)
            .then(response => {
                setUploadingFile(null); // Reset the uploadingFile state when finished
                setTrainedFiles(response.data);
                setFiles([])
                fetchFiles();
            })
            .catch(err => {
                console.log("Error in upload: ", err);
                setFiles([])
                setUploadingFile(null); // Reset the uploadingFile state when an error occurs
            });
    };

    function fetchFiles() {
        axios.get(`${serverBasePath}/train/files/${id}`, {
            withCredentials: true,
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json'
            },
        })
            .then(response => {
                setTrainedFiles(response.data.files);
                setLoading(false)
            })
            .catch(error => {
                console.log('error fetching uploaded files: ', error);
                setLoading(false)
            });
    }

    function deleteFiles(itemId) {
        const fileToRemove = trainedFiles.filter(question => question.id === id);
        if (fileToRemove.new !== true) {
          axios.delete(`${serverBasePath}/train/file`, {
            params: {
              itemId: itemId,
              chatbotId: id
            },
            withCredentials: true
          })
            .then(function (response) {
              if (response.status === 200) {
                setTrainedFiles([]);
                fetchFiles();
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      }

      function deleteAll(){
        trainedFiles.forEach(file => deleteFiles(file.id))
      }

    useEffect(fetchFiles, []);

    return (
        <>

            {loading ? <LoadingDots size={4} /> :

                <>
                    <div className='w-[95vw] sm:w-[50vw]'>
                        <div>
                            <h3 className='text-xl sm:text-3xl font-bold'>Import PDF Content</h3>
                        </div>
                        <div className='mb-20 '>
                            {/* file uploader button */}
                            <label htmlFor="pdf_file">
                                <div id='driver_Import_PDF_Content' className='border-[1px] flex items-center justify-center gap-4 active:scale-95 cursor-pointer bg-green-100 border-gray-700 w-fit p-2 mt-4 rounded-md pl-8 pr-8'>
                                    <IoMdAddCircleOutline className='text-2xl' />
                                    <h3>Choose file</h3>
                                    <input
                                        className='hidden'
                                        type="file"
                                        name="pdf_file"
                                        id="pdf_file"
                                        onChange={handleFileUpload} // attach event handler function
                                    />
                                </div>
                            </label>
                            {uploadingFile && <p className='mt-10 font-medium'>Uploading: {uploadingFile}</p>}


                        </div>
                        <hr />

                        {/* -------------------saved pdf content-------  */}
                        <div className='flex items-center justify-between mt-3'>
                            <h3 className='text-2xl font-bold'>Imported & Trained PDF Contents</h3>
                            <button className='border-[1px] active:scale-95 text-sm p-1 px-2 rounded-md' onClick={deleteAll}>Delete All</button>
                        </div>
                        <div className='flex-col items-center justify-center mt-6'>

                            <div className='h-[45vh] overflow-y-auto'>
                                {
                                    trainedFiles.length > 0 ? <>
                                        {
                                            trainedFiles.map(file => {
                                                return <FileCard
                                                    name={file.name}
                                                    chars={file.chars}
                                                    data={file.data}
                                                    id={file.id}
                                                    key={file.id}
                                                    deleteAction={deleteFiles}
                                                />
                                            })
                                        }
                                    </> : <>
                                        <div className='flex gap-2 flex-col items-center justify-center'>
                                            <BsDatabase className='text-4xl' />
                                            <h3>No item</h3>
                                        </div>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </>}
        </>


    );
}

{/* Conditional rendering to show if files have been uploaded */ }
// {files.length > 0
//     ? <p>Files uploaded: {files.map(file => file.name).join(', ')}</p>
//     : <h3>There are no items in the library.</h3>
// }










