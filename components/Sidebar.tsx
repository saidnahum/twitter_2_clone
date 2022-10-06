import React from "react";
import {
   HomeIcon,
   HashtagIcon,
   BellIcon,
   EnvelopeIcon,
   BookmarkIcon,
   RectangleStackIcon,
   UserIcon,
   EllipsisHorizontalCircleIcon
} from "@heroicons/react/24/outline"
import SidebarRow from "./SidebarRow";
import { useSession, signIn, signOut } from "next-auth/react";

const Sidebar = () => {

   const {data: session} = useSession();

   return (
      <div className="flex flex-col col-span-2 items-center px-4 md:items-start">
         <img className="m-3 h-10 w-10" src="https://links.papareact.com/drq" alt="" />
         <SidebarRow Icon={HomeIcon} title="Home"/>
         <SidebarRow Icon={HashtagIcon} title="Explore"/>
         <SidebarRow Icon={BellIcon} title=" Notifications"/>
         <SidebarRow Icon={EnvelopeIcon} title="Messages"/>
         <SidebarRow Icon={BookmarkIcon} title="Bookmarks"/>
         <SidebarRow Icon={RectangleStackIcon} title="Lists"/>

         <SidebarRow Icon={UserIcon} title={session ? "Sign Out" : "Sign In"} onClick={session ? signOut : signIn}/>
         <SidebarRow Icon={EllipsisHorizontalCircleIcon} title="More"/>
      </div>
   )
}

export default Sidebar
