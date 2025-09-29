import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Cafe from './pages/Cafe'
import Acount from "./pages/Acount";
import Library from "./pages/Library";
import Search from "./pages/Search";
import Writer from "./pages/Writer";

import './theme/light.css'

import library from './assets/icons/icons8_books.svg';
import cafe from './assets/icons/icons8_cafe_2.svg';
import writer from './assets/icons/icons8_writer_male.svg';
import search from './assets/icons/icons8_search.svg';
import acount from './assets/icons/icons8_person_1.svg';

export default function App() {
  return (
    <BrowserRouter>
      <div className=" min-h-screen min-w-screen font max-w-screen main-bg-color ">
        <div className="pb-14 main-bg-color left-0 right-0">
          <Routes>
            <Route path="/cafe" element={<Cafe />} />
            <Route path="/writer" element={<Writer />} />
            <Route path="/library" element={<Library />} />
            <Route path="/acount" element={<Acount />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </div>
        <nav className=" flex fixed  w-full navbar flex-row rounded-2xl h-14">
          <NavLink
            to="/cafe"
          >
            <div className=" tab-bootom">
              <img src={cafe} alt="cafe" className="w-6 h-6" />
              کافه
            </div>
          </NavLink>
          <NavLink
            to="/writer"
          >
            <div className="tab-bootom">
              <img src={writer} alt="writer" className="w-6 h-6" />
              نویسنده
            </div>
          </NavLink>
          <NavLink
            to="/library"
          >
            <div className=" tab-bootom">
              <img src={library} alt="library" className="w-6 h-6 " />
              کتابخوانه
            </div>
          </NavLink>
          <NavLink
            to="/acount"
          >
            <div className=" tab-bootom">
             <img src={acount} alt="acount" className="w-6 h-6" />
              حساب کاربری
            </div>
          </NavLink>
          <NavLink
            to="/search"
          >
            <div className=" tab-bootom">
              <img src={search} alt="خانه" className="w-6 h-6" />
              جستجو
            </div>
          </NavLink>
        </nav>
      </div>
    </BrowserRouter>
  );
}