import { useState, useRef, useEffect } from "react";
import { X, Minus } from 'lucide-react';
import SupportTextBox from "./SupportTextBox";
import useFetchData from "../../hooks/useFetchData"


export default function SupportBot(){
     const URLS = {
        SUPPORT_BOT: "http://localhost:3001/supportBot",
      };

      const [ 
        data, 
        isLoading, 
        isError, 
        error, 
        postedData, 
        setPostedData
    ] = useFetchData({ url: URLS.SUPPORT_BOT, method: "POST" });
    

    const [isOpen, setIsOpen] = useState(false);
    const [userMsg, setUserMsg] = useState("");
    const [msgHistory, setMsgHistory] = useState([]); 
    const dialogRef = useRef(null)
    const inputRef = useRef(null)
    const responsesRef = useRef(null)


    //gettting the date in miltary time, adding zeros too
    const time = new Date();
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const formattedTime = `${hours}:${minutes}`;

    function handleToggleDialog() {
        setIsOpen(prevState => !prevState);  
     }


     function handleKeyDown(e) {
        if (e.key === 'Enter') {
            const userMessage = e.target.value.trim();
            //only if the user has typed something in
            if (userMessage) {
                setUserMsg(userMessage);
                setMsgHistory((prev) => [...prev, userMessage]);
                setPostedData({ message: userMessage });
                inputRef.current.value = '';
            }
        }
    }
      
    useEffect(() => {
        //if data exists and has values 
        if (data && Object.keys(data).length > 0) {
            const responses = Object.values(data?.aiResponse);
            setMsgHistory((prev) => [...prev, responses]);
        }
    }, [data]);
    

    return (
        <>
            {isOpen ? ( 
                <dialog 
                    ref={dialogRef}
                    className="flex flex-col w-1/4 h-[80%] rounded-lg overflow-hidden translate-y-8  translate-x-[74dvw] fixed z-10"> 
                    <div className="h-[6%] bg-blue-900 flex justify-between p-3">
                        <p className="text-white">Poppin Online Assistant</p>
                        <div className="flex gap-2">
                            <Minus onClick={handleToggleDialog} className=" text-white relative cursor-pointer top-[25%]"/>
                            <X onClick={handleToggleDialog} className="text-white cursor-pointer"/>
                        </div>
                    </div>
                    <div className="h-[90%] relative grid place-content-center p-4 row-2">

                        {/* converting date i.e 9:00pm */}
                        <div className="w-full absolute bottom-60">                    
                            <div className="w-full absolute bottom-0 flex flex-col">
                            <p className="text-gray-800 mx-auto mb-3">Chat started at {formattedTime}</p>
        
                            {/* AI starting icon circle */}
                            <div ref={responsesRef} className="flex gap-2">
                                <div className="bg-blue-900 rounded-full w-10 h-10 text-white ml-2 mt-2 ">  
                                    <p className=" text-center translate-y-1/4 text-xl ">P</p>
                                </div>
                                <SupportTextBox text="Hello, I am the Popped Pinnacle Online Assistant chatbot. How can I help you?"/>
                            </div>

                            {/* todo map through users and api respsonses and add loading anims */}
                            <div className="flex flex-col">
                                    {msgHistory.map((eachMsg, index) => (
                                        <div key={index} className="w-full ">
                                            {index % 2 !== 0 ? (
                                                <div className="flex gap-2">
                                                     <div className="bg-blue-900 rounded-full w-10 h-10 text-white ml-2">  
                                                        <p className=" text-center translate-y-1/4 text-xl ">P</p>
                                                     </div>
                                                    <SupportTextBox key={index} user={index % 2 === 0} text={eachMsg}/>
                                                </div> 
                                                ) : (
                                            <div className="mr-3" >                                       
                                                 <SupportTextBox key={index} user={index % 2 === 0} text={eachMsg}/> {/*the user is even the computer is odd only one response from each at a time*/}
                                            </div> 
                                            )}
                                        </div>
                                    ))}
                            </div>
                            </div>
                        </div>
                        <div className="w-full h-32 bg-gray-200 absolute bottom-[-6%] p-3">
                        <input ref={inputRef} onKeyDown={handleKeyDown} className="h-1/2 bg-white text-black p-3 focus:border-none placeholder:normal-case placeholder:text-lg" type="text" style={{width: "100%"}}placeholder="Type your message..."/>
                        </div>
                    </div>
            </dialog>) : null}


            {/* this is the fixed div "Online Assisant" */}
            {!isOpen ? (
                <div onClick={handleToggleDialog} className="w-[10%] cursor-pointer shadow-black-900 shadow-lg h-15 p-3 text-white flex justify-center align-center rounded-3xl bg-blue-900 fixed right-[1%] bottom-[1%] z-50">
                    <p>Online Assistant</p>
                </div>
            ) : null}
        </>
    )
}