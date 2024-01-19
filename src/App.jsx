import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import FormularioTarea from './components/FormularioTarea';
import Footer from './components/Footer';

const App =()=> {

  return (
    <>
    <main className='container mt-5'>
      <h1 className="text-light py-5 fw-bold text-center">"Lista De Tareas"</h1>
      <FormularioTarea></FormularioTarea>
    </main>
      <Footer></Footer>
    </>
  )
}

export default App
