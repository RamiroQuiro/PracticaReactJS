import { Routes , Route} from 'react-router-dom'
import AcortadorURL from '../componentes/acortadorURL/AcortadorURL'
import TodoAPP from '../componentes/TodoAPP/TodoAPP'
import ModalOpen from '../componentes/ModalOpen'
import NotFound from '../componentes/NotFound'
import Redirect from '../componentes/acortadorURL/Redirect'
import Layout from '../layout/Layout'
import Home from '../componentes/Home'
import Calculadora from '../componentes/Calculadora/Calculadora'

export default function AppRouter() {

  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />}/ >
      <Route path="TodoAPP" element={<TodoAPP />} />
      <Route path="about" element={<ModalOpen />} />
      <Route path="acortador" element={<AcortadorURL />} />
      <Route path='/u/:url' element={<Redirect/>}/>
      <Route path='calculadora' element={<Calculadora/>}/>
     
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
  )
}