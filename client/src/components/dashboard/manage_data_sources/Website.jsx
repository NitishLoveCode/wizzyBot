import React, { useEffect, useState } from 'react'
import Input_field from '../../shared_components/Input_field'
import Button from '../../shared_components/Button'
import IncludedLink from './childs/IncludedLink'
import axios from 'axios'
import serverBasePath from '../../../../constants'
import { useParams } from 'react-router-dom'
import { LuRefreshCw } from "react-icons/lu";
import { AiOutlineArrowRight } from "react-icons/ai"
import { MdDeleteOutline } from "react-icons/md";
import LoadingDots from '../../loading/LoadingDots'
import toast from 'react-hot-toast';


// -------------driver.js-----------------

import { driver } from "driver.js";
import "driver.js/dist/driver.css";

// -----------------------------------------------

export default function Website() {

// ---------------for driver.js-------------
const driverObj = driver({
  showProgress: true,
  showButtons: ['next', 'previous'],
  steps: [
    { element: '#driver_Crawl_a_new_website', popover: { title: 'You can crawl you website here', description: 'If you have added new pages you can crawl its content for Train you chat Bot', side: "left", align: 'start' }},
    { element: '#driver_Fetch_single_link', popover: { title: 'Add content from new link', description: 'Train your bot with new page URL', side: "left", align: 'start' }},
  ]
});
useEffect(()=>{
  setTimeout(()=>{
    const find_new_user=localStorage.getItem("embed-and-website")
    if(find_new_user===null){
      driverObj.drive();
      localStorage.setItem("embed-and-website",true)
    }
  },6000)
},[])
// --------------------------------

  const [links, editLinks] = useState([]);
  const [singleLink, editSingleLink] = useState('');
  const [baseLink, setBaseLink] = useState('');
  const [untrainedLinks, setUntrainedLinks] = useState([]);
  const [clicked, setClicked] = useState(false);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [fetched, setFetched] = useState(false);

  function addLink(link, index) {
    editLinks(prev => {
      if (link.id === undefined) {
        link.id = index
      }
      return [...prev, link]
    })
  }
  function addUntrainedLink(link, index) {
    setUntrainedLinks(prev => {
      if (link.id === undefined) {
        link.id = index
      }
      return [...prev, link]
    })
  }

  function getLinks() {
    axios.get(serverBasePath + '/train/website/' + id, {
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      },
      withCredentials: true
    })
      .then((response) => {
        const data = response.data;
        editLinks([]);
        if (Object.keys(data).length !== 0) {
          data.links.map((link, index) => addLink(link, index))
        }
        setLoading(false);
      })
      .catch(err => {console.log(err) ;toast.error(err.message)});
  }


  function sendBaseLink() {
    setClicked(true)
    axios.post(serverBasePath + '/train/website/baseLink', {
      url: baseLink
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      withCredentials: true
    })
      .then((response) => {
        response.data.pagesData.map((link, index) => addUntrainedLink(link, index))

      })
      .catch(err => console.log(err));

  }

  function deleteUntrainedLink(id) {
    let temp = [...untrainedLinks];
    temp = temp.filter((link, index) => {
      if (id !== index) {
        return link;
      }
    });
    if (temp.length === 0) {
      setClicked(false);
    }
    setUntrainedLinks(temp)
  }

  function sendLinks(untrainedLinks) {


    axios.post(serverBasePath + '/train/website/links',
      { links: untrainedLinks, chatbotId: id },
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        withCredentials: true
      }
    )
      .then((response) => {
        const data = response.data;
        if (Object.keys(data).length !== 0 && response.status !== 400) {
          editLinks([]);
          setUntrainedLinks([]);
          setBaseLink('');
          setClicked(false);
          toast.success('Successfully trained chatbot on new data.')
          data.links.map((link, index) => addLink(link, index));

        }
      })
      .catch(err => console.log(err));
  }

  function trainSingleLink() {
    const linkToCheck = links.filter(link => link.link === singleLink);
    if (linkToCheck.length === 0) {
      sendLinks([{ link: singleLink }]);
    }
  }

  function deleteLinks(itemId, setClicked) {
    const linkToRemove = links.filter(question => question.id === id);
    if (linkToRemove.new !== true) {
      axios.delete(`${serverBasePath}/train/website/link`, {
        params: {
          itemId: itemId,
          chatbotId: id
        },
        withCredentials: true
      })
        .then(function (response) {
          if (response.status === 200) {
            toast.success('Successfully deleted.');
            getLinks();
            if (setClicked !== undefined) {
              setClicked(false);
            }
          }
        })
        .catch(function (error) {
          toast.error(error.response === undefined ? error.message : error.response);
        });
    }
  }

  function deleteAll(){
    links.forEach(link => {deleteLinks(link.id);})
  }

  useEffect(() => {
    if (fetched === false) {
      getLinks()
      setFetched(true);
    }
  }
    , []
  );

  return (
    <>
      {loading ? <LoadingDots size={4} /> :
        <>
        {/* <button onClick={notify}>Make me a toast</button> */}
          <div className="flex items-center gap-4 flex-col">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl sm:text-3xl font-bold">Crawl a new website</h3>
              <div id='driver_Crawl_a_new_website' className="flex sm:flex-row flex-col gap-2 items-center">
                <Input_field
                  placeholder={"https://www.example.com"}
                  style={"border-2 w-[95vw] outline-none rounded-md sm:w-[30vw] h-[6vh] pl-2"}
                  value={baseLink}
                  setValue={setBaseLink}
                />
                <Button
                  style={"bg-gray-800 w-[95vw] sm:w-[18vw] text-white p-2 pl-3 pr-3 rounded-md"}
                  text={"Fetch new links from domain"}
                  action={sendBaseLink}
                />
              </div>
            </div>
          </div>

          {
            clicked && <>
              {
                untrainedLinks.length === 0 ?
                  <LoadingDots size={2} color={'bg-black'} />
                  :
                  <div className=''>
                    {
                      untrainedLinks.map((webpage, index) => {
                        webpage.status = false
                        return (
                          <>
                            <IncludedLink
                              id={index}
                              key={index}
                              link={webpage}
                              deleteAction={deleteUntrainedLink}
                            />
                            <div className='my-2'></div>
                          </>
                        )
                      }

                      )
                    }
                    <Button
                      style={"bg-gray-800 w-[95vw] sm:w-[25vw] text-white p-2 pl-3 pr-3 mt-2 rounded-md"}
                      text={'Import content and add to my chatbot'}
                      action={() => { sendLinks(untrainedLinks) }}
                    />
                  </div>
              }
            </>

          }

          <div className='flex flex-col gap-4'>
            <h3 className='text-xl sm:text-3xl font-bold'>Fetch single link</h3>

            <div id='driver_Fetch_single_link'  className='flex flex-col sm:flex-row gap-2 items-center'>
              <Input_field
                placeholder={"https://www.example.com"}
                style={"border-2 rounded-md w-[95vw] sm:w-[30vw] h-[6vh] pl-2"}
                value={singleLink}
                setValue={editSingleLink}
                name='domain'
              />
              <Button style={"bg-gray-800 text-white w-[95vw] sm:w-[18vw] p-2 pl-3 pr-3 rounded-md"} text={"Fetch new links from domain"} action={trainSingleLink} />
            </div>
          </div>
          {/* -------------------Imported & Trained Web Pages------------------- */}


          <div className="flex w-full sm:w-[50vw] flex-col gap-2">
            <div className="flex w-full justify-between mb-10 gap-8 items-center">
              <div>
                <h3 className="text-md md:text-3xl font-bold">Imported Trained<br className="sm:hidden"></br> Web Pages</h3>
              </div>
              <div>
                <Button
                  style={"border-2 text-sm rounded-md border-black p-1 pl-2 pr-2"}
                  text={"Delete all"}
                  action={deleteAll}
                />
              </div>
            </div>
            {/* =================MORE OPTIONS============== */}
            <div className="flex sm:hidden items-center gap-2 justify-end">
              <h3>More</h3>
              <AiOutlineArrowRight />
            </div>


            {/* --------------------from here trained url------------------------------------- */}

            {
              links.map((webpage, i) => <IncludedLink
                link={webpage}
                key={i}
                deleteAction={deleteLinks}
              />)
            }
          </div>
        </>}
    </>
  );
}
