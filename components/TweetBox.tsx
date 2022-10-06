import {
   PhotoIcon,
   MagnifyingGlassCircleIcon,
   FaceSmileIcon,
   CalendarDaysIcon,
   MapPinIcon
} from "@heroicons/react/24/outline"
import { useSession } from "next-auth/react";
import React, { Dispatch, MouseEvent, SetStateAction, useRef, useState } from "react"
import toast from "react-hot-toast";
import { Tweet, TweetBody } from "../typings";
import { fetchTweets } from "../utils/fetchTweets";

interface Props {
   setTweets: Dispatch<SetStateAction<Tweet[]>>
}

const TweetBox = ({setTweets}: Props) => {

   const [input, setInput] = useState<string>("");
   const [image, setImage] = useState<string>("")

   const imageInputRef = useRef<HTMLInputElement>(null);

   const {data: session} = useSession();
   const [imageUrlBoxIsOpen, setImageUrlBoxIsOpen] = useState(false);

   const addImageToTweet = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();

      if(!imageInputRef.current?.value) return;

      setImage(imageInputRef.current?.value)
      imageInputRef.current.value = ""
      setImageUrlBoxIsOpen(false);
   };

   const postTweet = async () => {
      const tweetInfo: TweetBody = {
         text: input,
         username: session?.user?.name || "unknown User",
         profileImg: session?.user?.image || "http://links.papareact.com/gll",
         image: image
      };

      const result = await fetch(`/api/addTeet`, {
         body: JSON.stringify(tweetInfo),
         method: 'POST'
      });

      const json = await result.json();

      const newTweets = await fetchTweets();
      setTweets(newTweets);

      toast("Tweet Posted", {
         icon: "🚀"
      })

      return json;
   };

   const handleSubmit = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
      e.preventDefault();
      postTweet();
      setInput("");
      setImage("")
      setImageUrlBoxIsOpen(false);
   };

   return (
      <div className="flex space-x-2 p-5">
         <img className="h-14 w-14 object-cover rounded-full mt-4" src={session?.user?.image || "https://links.papareact.com/gll"} alt="ImageProfile" />

         <div className="flex flex-1 items-center pl-2">
            <form className="flex flex-1 flex-col">
               <input 
                  type="text" 
                  placeholder="what's Happening?" 
                  className="h-24 w-full text-xl outline-none placeholder:text-xl" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
               />
               <div className="flex items-center">
                  <div className="flex space-x-2 text-twitter flex-1">
                     <PhotoIcon onClick={() => setImageUrlBoxIsOpen(!imageUrlBoxIsOpen)} className="w-5 h-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150"/>
                     <MagnifyingGlassCircleIcon className="w-5 h-5"/>
                     <FaceSmileIcon className="w-5 h-5"/>
                     <CalendarDaysIcon className="w-5 h-5"/>
                     <MapPinIcon className="w-5 h-5"/>
                  </div>

                  <button 
                     className="bg-twitter px-5 py-2 font-bold text-white rounded-full disabled:opacity-40"
                     disabled={!input || !session}
                     onClick={handleSubmit}
                  >Tweet</button>
               </div>
               {imageUrlBoxIsOpen && (
                  <form className="mt-5 flex rounded-lg bg-twitter/80 py-2 px-4">
                     <input 
                        className="flex-1 bg-transparent p-2 text-white outline-none placeholder:text-white" 
                        type="text" 
                        placeholder="Enter Image URL..."
                        ref={imageInputRef}
                     />
                     <button type="submit" onClick={addImageToTweet} className="font-bold text-white">Add Image</button>
                  </form>
               )}

               {image && (
                  <img src={image} alt="" className="mt-10 h-40 w-full object-contain rounded-xl shadow-lg"/>
               )}
            </form>
         </div>
      </div>
   )
}

export default TweetBox