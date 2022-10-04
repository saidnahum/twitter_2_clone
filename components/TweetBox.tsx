import {
   PhotoIcon,
   MagnifyingGlassCircleIcon,
   FaceSmileIcon,
   CalendarDaysIcon,
   MapPinIcon
} from "@heroicons/react/24/outline"
import { useState } from "react"

const TweetBox = () => {

   const [input, setInput] = useState<string>("");

   return (
      <div className="flex space-x-2 p-5">
         <img className="h-14 w-14 object-cover rounded-full mt-4" src="https://links.papareact.com/gll" alt="" />

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
                     <PhotoIcon className="w-5 h-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150"/>
                     <MagnifyingGlassCircleIcon className="w-5 h-5"/>
                     <FaceSmileIcon className="w-5 h-5"/>
                     <CalendarDaysIcon className="w-5 h-5"/>
                     <MapPinIcon className="w-5 h-5"/>
                  </div>

                  <button 
                     className="bg-twitter px-5 py-2 font-bold text-white rounded-full disabled:opacity-40"
                     disabled={!input}
                  >Tweet</button>
               </div>
            </form>
         </div>
      </div>
   )
}

export default TweetBox