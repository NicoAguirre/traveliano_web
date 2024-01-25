import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from './context/AuthProvider';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Dashboard from './componentes/Dashboard';
import Proyectos from './componentes/Proyectos';
import Calendario from './componentes/Calendario';
import ImportarHoras from './componentes/ImportarHoras';
import Reportes from './componentes/Reportes';

import axios from './api/axios';
const LOGIN_URL='/auth';

const Login = () => {
   


    const {setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef()

    const [user,setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success,setSuccess] = useState(false);

    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [isNavbarExpanded, setNavbarExpanded] = useState(false);

    const toggleSidebar = () => {
        console.log('click');
      setSidebarOpen(!isSidebarOpen);
      setNavbarExpanded(isSidebarOpen);
     
    };
  

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');

    },[user,pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ user,pwd}),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials:true
                }
            );
            const  accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({user, pwd, roles, accessToken})
            setUser('');
            setPwd('');
            setSuccess(true);
            const header = document.getElementById('header');
            const login = document.getElementById('login');
            header.remove();
            login.innerHTML='';
        }catch(err){
            if (!err?.response) {
                setErrMsg('Servidor no disponible');
            } else if (err.response?.status === 400) {
                setErrMsg('Usuario o contraseña incorrectos');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();

        }
        
    }

    

    return (
        <>
        {success ? (
                <Router>
                    {/**<div class="pantalla">**/}
                    <Navbar 
                        toggleSidebar={toggleSidebar}
                        isNavbarExpanded={isNavbarExpanded}
                    />
                    {/**<div className='flex'>**/}
                        <Sidebar isOpen={isSidebarOpen}/>
                        {/**<div className='context'>**/}
                            <Routes>
                                <Route path="/" exact={true} Component={Dashboard}/>
                                <Route path="/Proyectos" exact={true} Component={Proyectos}/>
                                <Route path="/Calendario" exact={true} Component={Calendario}/>
                                <Route path="/Importar" exact={true} Component={ImportarHoras}/>
                                <Route path="/Reportes" exact={true} Component={Reportes}/>
                            </Routes>  
                        {/**</div>**/}
                    {/**</div>**/}
                   {/**</div>**/}
                </Router>            
           
        ) : (

        <section id="login">
            
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h2>Planilla de horas</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Usuario:</label>
                <input
                    type="text" 
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                />

                <label htmlFor="password">Contraseña:</label>
                <input
                    type="password" 
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                />
                <button>Entrar</button>
            </form>
            
        </section>
        )}
        </>
    )
}

export default Login