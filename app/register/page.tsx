import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";

export default function Register() {
  return (
    <div className="flex flex-row h-screen ">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-7 px-7 sm:px-28 md:px-8 lg:px-24 xl:px-36 2xl:px-52">
            <div className="w-full flex items-center gap-2">
                <Icon name="Kanban" size={32} color="#1e40af" />
                <h1 className="text-3xl">One board. One vision. One team.</h1>
            </div>
            <h4 className="text-gray-400">Organize smarter, not harder.</h4>
            <form action="" className="flex flex-col gap-5 w-full ">
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder="John Doe" className="input bg-gray-100 focus:outline-none shadow drop-shadow-2xl w-full" />
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="">Email address</label>
                    <input type="text" placeholder="example@gmail.com" className="input bg-gray-100 focus:outline-none shadow drop-shadow-2xl w-full" />
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="">Password</label>
                    <input type="text" placeholder="*************" className="input bg-gray-100 focus:outline-none shadow drop-shadow-2xl w-full" />
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="">Confirm Password</label>
                    <input type="text" placeholder="*************" className="input bg-gray-100 focus:outline-none shadow drop-shadow-2xl w-full" />
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <button className="btn btn-primary shadow drop-shadow-sm flex items-center gap-2">
                        <Icon name="User" size={18} /> SIGN UP
                    </button>
                    <button className="btn btn-outline shadow drop-shadow-sm flex items-center gap-2">
                        <Image
                        src='/google.svg'
                        alt="google image"
                        width={17}
                        height={17} />
                        <p>Sign up with Google</p>
                    </button>
                </div>
            </form>
            <div className="flex flex-row gap-2">
                <p>Already have an account?</p>
                <Link href={'/login'} className="underline text-primary flex items-center gap-1">
                  <Icon name="LogOut" size={16} /> Sign in
                </Link>
            </div>
        </div>
        <div className="bg-blue-800 hidden md:w-1/2 md:flex items-center justify-center">
            <Image
            src='/kanban-icon-register.svg'
            alt="kanban-icon"
            width={800}
            height={800}
             />
        </div>
    </div>
  )
}
