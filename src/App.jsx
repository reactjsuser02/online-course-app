import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, Outlet, useLocation } from 'react-router-dom';

import Layout from './pages/Layout';
import Home from './pages/Home';
import Courses from './pages/Courses';
import NotFound from './pages/NotFound';
import Course from './pages/Course';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';





function App() {
return (
    <BrowserRouter>
        {/* <Link className={check('/products')} to="products">Home</Link>
        <Link className={check('/products')} to="about">About</Link>
        <Link className={check('/products')} to="contact">Contact</Link>
        <Outlet /> */}
        {/* <br /> */}
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="courses" element={<Courses />}>
                    {/* <Route path='course2' element={<Course />} />
                    <Route path='course3' element={<Course />} />
                    <Route path='course4' element={<Course />} />
                    <Route path='course5' element={<Course />} /> */}
                </Route>
                <Route path='course1' element={<Course />} />
                <Route path='course2' element={<Course />} />
                <Route path='course3' element={<Course />} />
                <Route path='course4' element={<Course />} />
                <Route path='course5' element={<Course />} />
                <Route path='signup' element={<SignUp />} />
                <Route path='signin' element={<SignIn />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    </BrowserRouter>
);
}

export default App;
