import git1 from "./img/git1.svg";
import git2 from "./img/git2.svg";
import git3 from "./img/git3.svg";
import git4 from "./img/git4.svg";
import git5 from "./img/git5.svg";

export default function Background() {



  return (
    <div className="absolute w-full  h-[full] bg-red-100/10 backdrop-blur-sm z-0 top-0 left-0">
        <div className="w-80 bg-red-500/20 h-80 absolute rounded-full top-1/2 right-2 blur-[150px]"></div>
        <div className="w-96 bg-orange-500/20 h-96 absolute rounded-full -top-20 -left-20 blur-[150px]"></div>
      <div className="relative min-h-[100vh] h-[full] w-full  ">
        <img src={git1} alt="git1" className=" w-20 opacity-50 absolute top-32 left-32 -rotate-6 hover:blur-sm duration-200" />
        <img src={git2} alt="git2" className=" w-20 opacity-50 absolute top-1/2 right-14 -rotate-6  hover:blur-sm duration-200" />
        <img src={git3} alt="git3" className=" w-20 opacity-50 absolute top-10 left-1/4 -rotate-6  hover:blur-sm duration-200" />
        <img src={git4} alt="git4" className=" w-20 opacity-50 absolute top-20 right-32 -rotate-6  hover:blur-sm duration-200" />
        <img src={git5} alt="git5" className=" w-20 opacity-50 absolute top-48 left-1/2 -rotate-6  hover:blur-sm duration-200" />
        <img src={git1} alt="git1" className=" w-16 opacity-50 absolute top-1/3 right-96 rotate-12 hover:blur-sm duration-200" />
        <img src={git2} alt="git2" className=" w-20 opacity-50 absolute bottom-1/2 left-64 -rotate-12  hover:blur-sm duration-200" />
        <img src={git3} alt="git3" className=" w-20 opacity-50 absolute bottom-20 left-32 -rotate-12  hover:blur-sm duration-200" />
        <img src={git4} alt="git4" className=" w-20 opacity-50 absolute top-1/2 left-1/2 -rotate-6  hover:blur-sm duration-200" />
        <img src={git5} alt="git5" className=" w-20 opacity-50 absolute bottom-52 right-64 -rotate-6  hover:blur-sm duration-200" />
      </div>
    </div>
  );
}
