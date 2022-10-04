import { TwitterTimelineEmbed } from "react-twitter-embed";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";


const Widgets = () => {
   return (
      <div className="px-2 mt-2 col-span-2 hidden lg:inline">
         {/* Search box */}
         <div className="mt-2 flex items-center space-x-2 bg-gray-100 p-3 rounded-full">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            <input type="text" placeholder="Search Twitter" className="bg-transparent flex-1 outline-none" />
         </div>

         {/* Twitter timeline embed */}
         <TwitterTimelineEmbed
            sourceType="profile"
            screenName="sonnysangha"
            options={{ height: 1000 }}
         />
      </div>
   )
}

export default Widgets