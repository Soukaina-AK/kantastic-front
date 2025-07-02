import Breadc from "../../components/Breadc";
import { AvatarList } from "./components/AvatarList";
import { Board } from "./components/Board";

export default function Kanban({params: {
    id
}} : {params: {id: string}} ) {

  return (
    <div className="p-5 flex flex-col gap-5 flex-[1]">
        <Breadc links={[
          { name: "Dashboard", href: "/dashboard/projects" },
          { name: "Kanban", href: `/dashboard/kanban/${id}` },
          { name: "Project Name" },
        ]} />

        <section className="flex items-center justify-between gap-4">
          <span className="flex items-center gap-2">
            <h1 className="text-2xl font-semibold">My Awsome Project</h1>
            <AvatarList />
          </span>
          <span className="flex items-center gap-2">
            <p>Show My Tasks Only</p>
            <input type="checkbox" defaultChecked className="toggle checked:bg-primary bg-gray-300" />
          </span>
        </section>


        <div className="flex-[1]  flex flex-row gap-4 overflow-x-auto">
          <Board />
        </div>

    </div>
  )
}
