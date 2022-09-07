import image1 from "./img/desfile.jpg";
import image2 from "./img/mural1.jpg";
import image3 from "./img/feriaArtesanal.jpg";
import image4 from "./img/talleres.jpg";
import image5 from "./img/psicologaConsultorio.jpg";
import image6 from "./img/tallerCeramica.jpg";
import TituloandDescription from "./TituloandDescription";
import DivImagenGaleria from "./DivImagenGaleria";
import DivImagenGaleria2 from "./DivImagenGaleria2";
import ContenedorGaleria from "./ContenedorGaleria";

export default function GaleriaNoticias() {
  const novedades = [
    {
      src: image1,
      h2: "Desfile Beneficio",
      descripcion:
        "El sabado 8 de Septiembre, se realizara el desfile beneficio para nuestra asociacion en la Ciudad de la Banda, Besares N°500",
      link: "",
      className: "",
    },
    {
      src: image2,
      h2: "Trabajo Mural",
      descripcion:
        "Mural realizado para un cliente, gracias por considerarnos, la misma nos ayuda a costear gastos muy necesarios artisticos y terapeuticos.",
      link: "",
      className: "",
    },
    {
      src: image3,
      h2: "En La Feria",
      descripcion: "En la feria artesanal. Visitanos.",
      link: "",
      className: "",
    },
    {
      src: image4,
      h2: "Talleres de artes y oficios.",
      descripcion:
        "Talleres de arte y de oficios integrador, dictado por profesinales en el ambito con trayectoria",
      link: "",
      className: "",
    },
    {
      src: image5,
      h2: "Lic. Irina Tévez",
      descripcion: "Nueva profesional en nuestro consultorio Quilla",
      link: "",
      className: "",
    },
    {
      src: image6,
      h2: "Taller de Ceramica",
      descripcion:
        "Coordinado por Marcelo Verón, dictado por Jose Maria Paz, Te esperamos los Sábados a las 9hs.",
      link: "",
      className: "",
    },
  ];

  return (
    <div className="flex w-full py-16 min-h-full bg-white-500/50 bg-gradient-to-tr from-red-100 to-neutral-200  flex-col justify-around items-center">
      {/* <IconCircle
        colorFill={"#A7CFFD50"}
        className="absolute right-16 w-96 h-96 top-0 bac"
      /> */}
      <div className="h- w-full items-center flex flex-col justify-center">
        <ContenedorGaleria
          codigo={<iframe
            src="https://carbon.now.sh/embed?bg=rgba%28241%2C244%2C247%2C1%29&t=verminal&wt=none&l=jsx&width=680&ds=false&dsyoff=100px&dsblur=0px&wc=false&wa=true&pv=56px&ph=56px&ln=true&fl=1&fm=Hack&fs=13.5px&lh=135%25&si=false&es=2x&wm=false&code=export%2520default%2520function%2520Button1%28%257Btext%252Clink%252Ccolor%252CclassName%257D%29%2520%257B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253CLink%2520%250A%2520%2520%2520%2520className%253D%257B%2560%2524%257BclassName%257D%2520bg-white%2520rounded-lg%2520group%2520text-center%2520hover%253Abg-gray-200%2520duration-200%2520text-gray-700%2520font-extrabold%2520shadow-lg%2520py-2%2520px-4%2520w-full%2520hover%253A-translate-y-1%2560%257D%250A%2520%2520%2520to%253D%257Blink%257D%253E%250A%2520%2520%2520%2520%257Btext%257D%2520%253Ci%2520className%253D%27text-lg%2520group-hover%253Aanimate-pulse%27%253E%25E2%259E%25A1%253C%252Fi%253E%250A%2520%2520%2520%2520%253C%252FLink%253E%250A%2520%2520%29%250A%257D%250A%250A%250Aexport%2520default%2520function%2520DivImagenGaleria%28%257BclassNameDiv%252Csrc%252Ch2%252Cdescripcion%252Clink%257D%29%2520%257B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%257B%2560%2524%257BclassNameDiv%257D%2520%2520flex-1%2520hover%253Aflex-grow-%255B10%255D%2520hover%253Aduration-1000%2520h-3%252F4%2520group%2520overflow-hidden%2520relative%2520hover%253Askew-x-0%2520%2520duration-500%2520rounded-lg%2560%257D%253E%250A%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520src%253D%257Bsrc%257D%250A%2520%2520%2520%2520%2520%2520alt%253D%257Bh2%257D%250A%2520%2520%2520%2520%2520%2520className%253D%2522w-full%2520h-full%2520grayscale-%255B35%2525%255D%2520group-hover%253Aobject-cover%2520object-cover%2520object-center%2520duration-1000%2520group-hover%253Agrayscale-0%2520rounded-lg%2522%252F%253E%250A%2520%2520%2520%2520%253Cdiv%250A%2520%2520%2520%2520%2520%2520className%253D%2522text-neutral-900%2520group-hover%253Aw-full%2520%2520%2520bg-blue-600%252F70%2520p-2%2520-rotate-90%2520origin-top-left%2520duration-300%2520text-center%2520absolute%2520bottom-0%2520left-0%2520%250Agroup-hover%253Askew-x-0%2520group-hover%253Abg-gradient-to-b%2520group-hover%253Afrom-blue-600%252F60%2520group-hover%253Avia-blue-600%252F50%2520group-hover%253Ato-red-400%252F30%2520group-hover%253Abackdrop-bm%2520group-hover%253Atext-white%2520group-hover%253Arotate-0%2520%2520group-hover%253Aduration-300%250A%2522%250A%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%253Ch2%2520className%253D%2522text-lg%2520font-bold%2520px-5%2520leading-5%2520rounded-lg%2520group-hover%253Atext-2xl%2520group-hover%253Amb-3%2522%253E%257Bh2%257D%253C%252Fh2%253E%2520%250A%2520%2520%2520%2520%2520%2520%253Cp%2520className%253D%2522hidden%2520text-white%2520group-hover%253Ablock%2520group-hover%253Adelay-150%2520duration-300%2520w-full%2520text-xs%2520opacity-0%2520group-hover%253Aopacity-100%2522%253E%257Bdescripcion%257D%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%253CButton2%250A%2520%2520%2520%2520%2520%2520className%253D%2522hidden%2520w-1%252F5%2520mx-auto%2520my-2%2520text-xs%2520px-0%2520py-0%2520group-hover%253Ablock%2520group-hover%253Adelay-150%2520duration-300%2520opacity-0%2520group-hover%253Aopacity-100%2522%250A%2520%2520%2520%2520%2520%2520link%253D%257Blink%257D%250A%2520%2520%2520%2520%2520%2520text%253D%257B%2522ver%2520m%25C3%25A1s%2522%257D%250A%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%250A%257D%250A"
            className="w-full h-full">
          </iframe>
          }>
          <div className="group ">
            <TituloandDescription
              classNameTitle={"text-4xl text-gray-700"}
              title={"Novedades"}
            />
            <div className="w-11/12 mx-auto relative flex items-center -mt-5 duration-500 justify-between overflow-hidden gap-2">
              <span className="absolute w-1/2 h-[500%] left-0 -translate-x-full group-hover:translate-x-[200%] duration-500 bg-orange-200/70 -rotate-45 blur-sm"></span>
              <span className="bg-orange-400 rounded-lg w-40 h-2"></span>
              <span className="bg-orange-400 rounded-lg w-8 h-2"></span>
              <span className="bg-orange-400 rounded-lg w-4 h-2"></span>
            </div>
          </div>
          <div className="flex justify-center w-11/12 h-4/5 gap-3 duration-1000 items-center overflow-hidden skew-x-6">
            {novedades?.map((element, i) => (
              <DivImagenGaleria
                classNameDiv={element.className}
                descripcion={element.descripcion}
                src={element.src}
                h2={element.h2}
                link={element.link}
                key={i}
              />
            ))}
          </div>
        </ContenedorGaleria>

        <ContenedorGaleria
        codigo={<iframe
          src="https://carbon.now.sh/embed?bg=rgba%28241%2C244%2C247%2C1%29&t=verminal&wt=none&l=jsx&width=680&ds=false&dsyoff=100px&dsblur=0px&wc=false&wa=true&pv=56px&ph=56px&ln=true&fl=1&fm=Hack&fs=13.5px&lh=135%25&si=false&es=2x&wm=false&code=import%2520React%2520from%2520%2522react%2522%253B%250Aimport%2520%257B%2520Link%2520%257D%2520from%2520%27react-router-dom%27%250A%250Aexport%2520default%2520function%2520Button1%28%257Btext%252Clink%252Ccolor%252CclassName%257D%29%2520%257B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253CLink%2520%250A%2520%2520%2520%2520className%253D%257B%2560%2524%257BclassName%257D%2520bg-white%2520rounded-lg%2520group%2520text-center%2520hover%253Abg-gray-200%2520duration-200%2520text-gray-700%2520font-extrabold%2520shadow-lg%2520py-2%2520px-4%2520w-full%2520hover%253A-translate-y-1%2560%257D%250A%2520%2520%2520to%253D%257Blink%257D%253E%250A%2520%2520%2520%2520%257Btext%257D%2520%253Ci%2520className%253D%27text-lg%2520group-hover%253Aanimate-pulse%27%253E%25E2%259E%25A1%253C%252Fi%253E%250A%2520%2520%2520%2520%253C%252FLink%253E%250A%2520%2520%29%250A%257D%250A%250A%250Aexport%2520default%2520function%2520DivImagenGaleria%28%257B%250A%2520%2520classNameDiv%252C%250A%2520%2520src%252C%250A%2520%2520h2%252C%250A%2520%2520descripcion%252C%250A%2520%2520link%252C%250A%257D%29%2520%257B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253C%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522%2520flex-1%2520hover%253Aflex-grow-%255B10%255D%2520rounded-3xl%2520hover%253Aduration-1000%2520h-3%252F4%2520group%2520relative%2520hover%253Askew-x-0%2520%2520duration-300%2520%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520className%253D%2522absolute%2520inset-0%2520border-2%2520invisible%2520group-hover%253Avisible%2520duration-500%2520border-gray-800%2520rounded-3xl%2520border-dashed%2522%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520className%253D%257B%2560%2524%257BclassNameDiv%257D%2520overflow-hidden%2520flex-1%2520hover%253Aflex-grow-%255B10%255D%2520rounded-3xl%2520hover%253A-translate-x-2%2520hover%253A-translate-y-4%2520hover%253Aduration-1000%2520h-full%2520group%2520relative%2520hover%253Askew-x-0%2520%2520duration-500%2560%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%257Bsrc%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%257Bh2%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520className%253D%2522w-full%2520h-full%2520%2520group-hover%253Aobject-cover%2520object-cover%2520object-center%2520duration-1000%2520group-hover%253Agrayscale-0%2520rounded-3xl%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520className%253D%2522text-white%2520group-hover%253Aw-full%2520rounded%2520w-full%2520h-full%2520overflow-hidden%2520%2520bg-gradient-to-b%2520from-rose-400%2520via-transparent%2520to-transparent%2520p-2%2520%2520duration-200%2520text-center%2520absolute%2520%2520bottom-0%2520left-0%2520translate-y-%255B70%2525%255D%2520group-hover%253A-translate-y-0%2520%250Agroup-hover%253Askew-x-0%2520group-hover%253Abg-gradient-to-b%2520group-hover%253Afrom-rose-600%252F60%2520hover%253Aabsolute%2520group-hover%253Avia-neutral-600%252F70%2520group-hover%253Ato-gray-400%252F30%2520%2520group-hover%253Atext-white%2520group-hover%253Arotate-0%2520%2520group-hover%253Aduration-300%2520shadow-lg%2520group-hover%253Apt-10%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch2%2520className%253D%2522%2520font-bold%2520px-5%2520leading-5%2520rounded-lg%2520group-hover%253Atext-2xl%2520group-hover%253Amb-3%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257Bh2%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520className%253D%2522hidden%2520text-white%2520group-hover%253Ablock%2520group-hover%253Adelay-150%2520duration-300%2520w-full%2520text-xs%2520opacity-0%2520group-hover%253Aopacity-100%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257Bdescripcion%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253CButton2%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520className%253D%2522hidden%2520w-1%252F5%2520mx-auto%2520my-2%2520text-xs%2520px-0%2520py-0%2520group-hover%253Ablock%2520group-hover%253Adelay-150%2520duration-300%2520opacity-0%2520group-hover%253Aopacity-100%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520link%253D%257Blink%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520text%253D%257B%2522ver%2520m%25C3%25A1s%2522%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252F%253E%250A%2520%2520%29%253B%250A%257D%250A"
          className="w-full h-full  overflow-hidden"
          sandbox="allow-scripts allow-same-origin">
        </iframe>}
        >
          <div className="group ">
            <TituloandDescription
              classNameTitle={"text-4xl text-gray-700"}
              title={"Novedades"}
            />
            <div className="w-11/12 mx-auto relative flex items-center -mt-5 duration-500 justify-between overflow-hidden gap-2">
              <span className="absolute w-1/2 h-[500%] left-0 -translate-x-full group-hover:translate-x-[200%] duration-500 bg-orange-200/70 -rotate-45 blur-sm"></span>
              <span className="bg-orange-400 rounded-lg w-40 h-2"></span>
              <span className="bg-orange-400 rounded-lg w-8 h-2"></span>
              <span className="bg-orange-400 rounded-lg w-4 h-2"></span>
            </div>
          </div>
          <div className="flex justify-center w-11/12 h-4/5 gap-3 duration-1000 items-center overflow-hidden skew-x-6">
            {novedades?.map((element, i) => (
              <DivImagenGaleria2
                classNameDiv={element.className}
                descripcion={element.descripcion}
                src={element.src}
                h2={element.h2}
                link={element.link}
                key={i}
              />
            ))}
          </div>
        </ContenedorGaleria>
      </div>
    </div>
  );
}
