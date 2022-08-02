import { createContext, useContext, useState } from "react";

const initialState = {
  /*State */
  memory: null,
  operation: null,
  currentValue: 0,
  resultado: 0,
  history: null,
  /* metodos */
  addOperation: (operation) => {},
  executeAction: (action) => {},
  clear: () => {},
  agregarNumber: (value) => {},
};

const AppContext = createContext(initialState);

export default function CalculadoraState({ children }) {
  const [memory, setMemory] = useState("");
  const [operation, setOperation] = useState(null);
  const [currentValue, setCurrentValue] = useState(0);
  const [resultado, setResultado] = useState(null);
  const [history, setHistory] = useState([]);
  const [isReset, setIsReset] = useState(true);

  const agregarNumber = (value) => {
    if(resultado){
      setResultado(null)
     setMemory(null) 
     setOperation(null)
    }
      if (isReset) {
        setCurrentValue(value);
        // setMemory(memory.concat(value))
        setIsReset(false);
      } else {
        setCurrentValue(currentValue + value);
        // setMemory(memory.concat(value))
    }
  };

  const handleAddOperation = (op) => {
    if (currentValue) {
      const newValue = currentValue.concat(op);
      if (!operation) {
        setMemory(newValue);
        setIsReset(true);
        setOperation(op);
      } else {
        setMemory(memory.concat(newValue));
        setIsReset(true);
      }
    }
  };


  const handleResutl = () => {

    let result = eval(memory.concat(currentValue));
    setMemory(memory.concat(currentValue));
    if (result) {
      setCurrentValue(result);
      setResultado(result);
      const resutladoHistory = {
        memoria: memory.concat(currentValue),
        resultadoHistory: result,
      };
      setHistory([ resutladoHistory,...history]);
      setIsReset(true);
    }
    setCurrentValue(result);
    setOperation(null);
    setIsReset(true);
  };

  const handleExecuteAction = (action) => {
    switch (action) {
      case "AC":
        setCurrentValue(0);
        setResultado(0);
        setMemory("");
        setIsReset(true);
        setOperation(null);
        break;
      case "A":
        setCurrentValue(0);
        setIsReset(true);
        break;
      case "<==":
        setCurrentValue(parseInt(currentValue / 10));
        setIsReset(true);
        break;
      case "+/-":
        setCurrentValue(parseInt(currentValue) * -1);
        break;
      case ".":
        if (resultado) {
          setCurrentValue("0.");
          setResultado(null);
          setIsReset(false);
        }else{
          if(memory.length!=0){
            setCurrentValue( "0.");
            setIsReset(false);
          }
          if (!currentValue.toString().match(/[.]/g)) {
            if (currentValue.toString().length === 0) {
              setCurrentValue(currentValue.toString() + "0.");
            }
            setCurrentValue(currentValue + ".");
          setIsReset(false);
        }}
        break;
      case "=":
        if (resultado) {
          setResultado(null);
          setIsReset(false);
        }else{
        handleResutl();}
        break;
      default:
        break;
    }
  };

  const handleBorrarMemoria = () => {
    setHistory([]);
  };

  return (
    <AppContext.Provider
      value={{
        memory,
        operation,
        currentValue,
        resultado,
        history,
        handleBorrarMemoria,
        agregarNumber,
        addOperation: handleAddOperation,
        executeAction: handleExecuteAction,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export const useAppContext = () => {
  return useContext(AppContext);
};
