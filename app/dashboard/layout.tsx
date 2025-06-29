import Image from "next/image"
import { Bell, Menu, FolderClosed, Kanban, LogOut, User } from "lucide-react"

export default function DashboardLayout({
    children,
}:Readonly <{
    children:React.ReactNode
}>) {
  return (
    <div className="h-screen flex flex-row overflow-hidden">
        <SideBar />
        <div className="flex-3/4 flex flex-col overflow-hidden">
            <NavBar />
            {children}
        </div>
    </div>
  )
}

export function SideBar(){
    return(
        <div className="bg-blue-800 flex-1/12 flex flex-col items-center justify-between py-7">
            <div className="flex flex-col items-center gap-16">
                <div>logo</div>
                <div className="flex flex-col gap-4">
                    <button className="flex flex-row gap-2 bg-white rounded-xl md:rounded-lg p-1 lg:pr-14 xl:pr-20 2xl:pr-36">
                        <FolderClosed />
                        <p className="hidden md:flex">PROJECTS</p>
                    </button>
                    <button className="flex flex-row gap-2 bg-white rounded-xl md:rounded-lg p-1">
                        <Kanban />
                        <p className="hidden md:flex">KANBAN</p>
                    </button>
                    <button className="flex flex-row gap-2 bg-white rounded-xl md:rounded-lg p-1">
                        <User />
                        <p className="hidden md:flex">PROFILE</p>
                    </button>
                </div>
            </div>
            <button className="flex flex-row gap-2 bg-white rounded-xl md:rounded-lg p-1 lg:pr-14 xl:pr-20 2xl:pr-36">
                <LogOut/>
                <p className="hidden md:flex">LOGOUT</p>
            </button>
        </div>
    )
}

export function NavBar(){
    return(
        <div className="bg-gray-50 flex flex-row items-center justify-between px-4 py-2">
            <Menu />
            <p>KANTASTIC</p>
            <div className="flex flex-row items-center gap-4">
                <Bell width={20} height={20} />
                <div className="flex flex-row items-center gap-2 md:pr-24 md:pl-1 md:py-1 md:shadow md:drop-shadow-lg">
                    <Image
                    src={'/profile-pic.webp'}
                    alt="profile-pic"
                    width={35}
                    height={35}
                    className="rounded-full"
                    />
                    <div className="md:flex flex-col hidden">
                        <p className="text-sm">soukaina</p>
                        <p className="text-gray-400 text-sm">Morocco</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
