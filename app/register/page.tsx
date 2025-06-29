import Image from "next/image";
import Link from "next/link";

export default function Register() {
  return (
    <div className="flex flex-row h-screen ">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-7 px-7 sm:px-28 md:px-8 lg:px-24 xl:px-36 2xl:px-52">
            <div className="w-full">
                <h1 className="text-3xl">One board. One vision. One team.</h1>
                <h4 className="text-gray-400">Organize smarter, not harder.</h4>
            </div>
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
                    <button className="btn btn-primary shadow drop-shadow-sm">SIGN UP</button>
                    <button className="btn btn-outline shadow drop-shadow-sm">
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
                <Link href={'/login'} className="underline text-primary">Sign in</Link>
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
