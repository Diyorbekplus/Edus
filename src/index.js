import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Blog from './Pages/Blog/Blog';
import Courses from './Pages/Courses/Courses';
import Home from './Pages/Home/Home';
import Pages from './Pages/Pages/Pages';
import Shop from './Pages/Shop/Shop';
import "./Style/scss/Main.scss";
import { Provider } from 'react-redux';
import { store } from './Store/store';
import About from './Pages/Pages/About/About';
import Faq from './Pages/Pages/FAQ/Faq';
import Contact from './Pages/Pages/Contact/Contact';
import Events from './Pages/Pages/Events/Events';
import Galleries from './Pages/Pages/Galleries/Galleries';
import Membership from './Pages/Pages/Membership/Membership';
import Profile from './Pages/Pages/Profile/Profile';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route index element={<Home/>}/>
        <Route path='pages' element={<Pages/>}/>
        {/* Pages Links */}
        <Route path='about' element={<About/>}/>
        <Route path='faq' element={<Faq/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='events' element={<Events/>}/>
        <Route path='galleries' element={<Galleries/>}/>
        <Route path='membership' element={<Membership/>}/>
        <Route path='profile' element={<Profile/>}/>
        {/*  */}

        <Route path='courses' element={<Courses/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='blog' element={<Blog/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
