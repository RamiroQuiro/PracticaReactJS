import React from "react";
import './styles.css'
import CalculadoraState, { useAppContext } from "../../context/Context";
import BotoneraCalculator from "./BotoneraCalculator";
import History from "./History";
import calculadora from "../../img/svg/calculatorCard.svg";
import ScreenCalculator from "./ScreenCalculator";
export default function Calculadora() {
 
  const theme = {
    number:
      " bg-[#3B3B3B] hover:bg-[#323232]  text-white font-mono rounded m-[1px]  p-4 ",
    operator:
      " bg-[#323232] hover:bg-[#3B3B3B]  text-white rounded p-4 m-[1px]",
      igual:
      " bg-[#F38064] hover:bg-[#F88064]/80  text-white rounded p-4 my-[5px] col-start-1 col-end-6",
  };
  return (
    <CalculadoraState>
        <div className="flex  text-gray-50 bg-slate-100  justify-center items-center pt-16 md:px-0 px-5 h-full md:h-screen containerCalculadora ">
          <div className="flex bg-[#202020]/80 md:w-2/4 lg:w-2/4 rounded-lg backdrop-blur-sm  lg:h-5/6 shadow-xl shadow-red-300/50">
          <div className="w-3/5 p-4">
            <div className=" font-black ">
              <div className="text-2xl justify-center items-center text-yellow-500 flex gap-5">
                <img src={calculadora} alt="calculadora" className="w-10 rounded-lg" /> Caluladora ReactJS</div>
              <h2 className="text-xl text-center text-yellow-500">useContext</h2>
            </div>
            <ScreenCalculator />
            <div className="numeros grid grid-cols-5">
              <BotoneraCalculator
                type="action"
                value={"A"}
                className={theme.operator}
              />
              <BotoneraCalculator
                type="action"
                value="AC"
                className={theme.operator}
              />
              <BotoneraCalculator
                type="action"
                value="<=="
                className={theme.operator}
              />
              <BotoneraCalculator
                type="operator"
                value="/"
                className={theme.operator}
              />
              <BotoneraCalculator
                type="operator"
                value="%"
                className={theme.operator}
              />
              <BotoneraCalculator
                type="number"
                value={"7"}
                className={theme.number}
              />
              <BotoneraCalculator
                type="number"
                value="8"
                className={theme.number}
              />
              <BotoneraCalculator
                type="number"
                value="9"
                className={theme.number}
              />
              <BotoneraCalculator
                type="operator"
                value="*"
                className={theme.operator}
              />
              <BotoneraCalculator
                type="operator"
                value="-"
                className={theme.operator}
              />
              <BotoneraCalculator
                type="number"
                value="4"
                className={theme.number}
              />
              <BotoneraCalculator
                type="number"
                value="5"
                className={theme.number}
              />
              <BotoneraCalculator
                type="number"
                value="6"
                className={theme.number}
              />
              <BotoneraCalculator
                type="operator"
                value="+"
                className={theme.operator}
              />
              <BotoneraCalculator
                type="action"
                value="+/-"
                className={theme.operator}
              />
              <BotoneraCalculator
                type="number"
                value="1"
                className={theme.number}
              />
              <BotoneraCalculator
                type="number"
                value="2"
                className={theme.number}
              />
              <BotoneraCalculator
                type="number"
                value="3"
                className={theme.number}
              />
              <BotoneraCalculator
                type="number"
                value="0"
                className={theme.number}
              />
              <BotoneraCalculator
                type="action"
                value="."
                className={theme.operator}
              />
              <BotoneraCalculator
                type="action"
                value="="
                className={theme.igual+""}
              />
            </div>
          </div>
         <History/>
          </div>
        </div>
    </CalculadoraState>
  );
}
