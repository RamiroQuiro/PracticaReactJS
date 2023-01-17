import {NavLink} from 'react-router-dom'
import TodoAPP from '../img/svg/TodoAPP.svg'
import home from '../img/svg/home.svg'
import calculator from '../img/svg/calculator.svg'
import shortURL from '../img/svg/shortURL.svg'
import galeria from '../img/svg/galeria.svg'
import canvas from '../img/svg/canvas.svg'
import git from '../componentes/RepositorioGitHub/img/git6.svg'
export default function Menu() {

  
const styles={
  NavLink:({isActive})=>isActive?` before:bg-orange-400/90 before:-top-0 before:absolute before:hover:max-h-2 before:duration-500 before:hover:duration-300 before:z-0 before:content-[''] before:w-4 before:h-4 before:block before:rounded-b-lg flex flex-col group   break-words rounded-full bg-opacity-40 justify-center items-center`:`before:bg-orange-400/90 before:duration-500  before:-top-0 before:absolute before:hover:max-h-2 before:hover:duration-500 before:z-0 before:content-[''] before:w-4 before:h-0 before:block before:rounded-b-lg flex flex-col group   justify-center items-center`,
  span:"duration-300 group-hover:translate-y-3 opacity-0 group-hover:opacity-100 font-medium translate-y-6 text-orange-600 delay-100 ",
}

const menu=[
  {
    name:"Home",
    path:"/",
    img:home,
  },{
  name:"TodoAPP",
  path:"/TodoAPP",
  img:TodoAPP,
},
{
  name:"Calculadora",
  path:"/Calculadora",
  img:calculator,

},
{
  name:"ShortURL",
  path:"/acortador",
  img:shortURL,
},
{
  name:"Galeria",
  path:"/galeriaTailwinsCss",
  img:galeria,
},
{
  name:"Canvas",
  path:"/canvas",
  img:canvas,
},
{
  name:"Repo",
  path:"/queryRepo",
  img:git,
},
// {
//   name:"Canvas",
//   path:"/editPhoto",
//   img:canvas,
// },
]


  return (
    <div className='flex w-screen mx-auto justify-center items-center fixed z-[70] text-gray-700'>
        <nav className='flex md:w-4/12 justify-around items-center text-sm font-bold py-6 shadow-lg  overflow-y-hidden h-9 hover:h-14 -translate-y-2.5 hover:translate-y-0 duration-300 bg-gradient-to-tr from-gray-50/80 via-gray-50/80 to-gray-200/70 backdrop-blur-sm rounded-b-3xl'>

          {menu.map((item,index)=>(
            <NavLink to={item.path} 
            key={index}
            className={styles.NavLink}>
              <img src={item.img} alt="home" className='absolute w-6 scale-75 group-hover:scale-100 group-hover:-translate-y-2 top-4 duration-200' />
              <span className={styles.span}>{item.name}</span>
            </NavLink>

          ))}
            
        </nav>
        
    </div>
  )
}
