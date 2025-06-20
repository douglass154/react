import { ChevronLeft } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router";

const TaskPage = () => {
   const [searchParams] = useSearchParams();
   const navigate = useNavigate();

   const title = searchParams.get("title");
   const description = searchParams.get("description");

   return (
      <div className="main-container">
         <div className="w-[500px] space-y-4">
            <div className="flex justify-center items-center relative mb-6">
               <button onClick={() => navigate(-1)} className="absolute left-0 cursor-pointer text-slate-100">
                  <ChevronLeft className="size-7" />
               </button>
               <h1>Detalhes da Tarefa</h1>
            </div>

            <div className="container">
               <h2 className="text-xl font-bold text-slate-600">{title}</h2>
               <p className="text-slate-600">{description !== "" ? description : "Sem descrição"}</p>
            </div>
         </div>
      </div>
   );
};

export default TaskPage;
