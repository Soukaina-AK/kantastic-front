import { FolderClosed } from "lucide-react";

export default function Projects() {
  return (
    <div className="p-5 flex flex-col gap-5">
        <div className="flex flex-row items-center gap-1 text-sm">
            <FolderClosed width={17}/>
            <p>Projects</p>
        </div>
        <div className="flex flex-col gap-8">
            <ProjectsType />
            <ProjectsType />
            <ProjectsType />
        </div>
    </div>
  )
}

export function Card(){
    return(
        <div className="card card-side shadow drop-shadow-lg bg-white">
            <figure>
                <img
                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    )
}

export function ProjectsType(){
    return(
        <div className="flex flex-col gap-4">
                <h1 className="text-4xl">Latest Projects</h1>
                <div className="flex flex-row items-center gap-5">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
    )
}