import { SVGProps } from "react"

interface Props {
   Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
   title: string
}

const SidebarRow = ({ Icon, title }:Props) => {
   return (
      <div className="flex max-w-fit cursor-pointer items-center space-x-2 px-4 py-3 rounded-full transition-all from-neutral-200 hover:bg-gray-100 group">
         <Icon className="h-6 w-6"/>
         <p className="hidden md:inline-flex group-hover:text-twitter text-base font-light lg:text-lg lg:font-normal">{title}</p>
      </div>
   )
}

export default SidebarRow