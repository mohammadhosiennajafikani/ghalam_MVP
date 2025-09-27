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
      <div className="min-h-screen min-w-screen pb-16 main-bg-color font ">
        <div className="p-6">
          <Routes>
            <Route path="/cafe" element={<Cafe />} />
            <Route path="/writer" element={<Writer />} />
            <Route path="/library" element={<Library />} />
            <Route path="/acount" element={<Acount />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </div>
        <nav className="flex hover:bg-amber-950 fixed bottom-0 left-0 w-full border-t shadow justify-around py-3 z-50 navbar flex-row">
          <NavLink
            to="/cafe"
          >
            <div className="flex tab-bootom">
              کافه
              <img src={cafe} alt="خانه" className="w-6 h-6" />
            </div>
          </NavLink>
          <NavLink
            to="/writer"
          >
            <div className="flex tab-bootom">
              نویسنده
              <img src={writer} alt="خانه" className="w-6 h-6" />
            </div>
          </NavLink>
          <NavLink
            to="/library"
          >
            <div className="flex tab-bootom">
              کتابخوانه
              <img src={library} alt="خانه" className="w-6 h-6 " />
            </div>
          </NavLink>
          <NavLink
            to="/acount"
          >
            <div className="flex tab-bootom">
              حساب کاربری
              <img src={acount} alt="خانه" className="w-6 h-6" />
            </div>
          </NavLink>
          <NavLink
            to="/search"
          >
            <div className="flex tab-bootom">
              جستجو
              <img src={search} alt="خانه" className="w-5 h-5" />
            </div>
          </NavLink>

        </nav>
      </div>
    </BrowserRouter>
  );
}



//     <div>
//        <div className="flex  bg-black">
//             s
//       </div>
//       <div className="fixed bottom-0 left-0 w-full bg-amber-400 border-t shadow flex justify-around py-3 z-50">
//         <BrowserRouter >
//           <div className="flex flex-col  bg-red-800 ">
//             <nav className="flex space-x-6 border-b py-4 bg-amber-400 shadowa justify-center">
//               <NavLink
//                 to="/cafe"
//                 end
//                 className={({ isActive }) =>
//                   isActive ? "text-red-600 font-bold" : "text-gray-600"
//                 }
//               >
//                 کافه
//               </NavLink>
//               <NavLink
//                 to="/writer"
//                 className={({ isActive }) =>
//                   isActive ? "text-red-600 font-bold" : "text-gray-600"
//                 }
//               >
//                 نویسنده
//               </NavLink>
//               <NavLink
//                 to="/library"
//                 className={({ isActive }) =>
//                   isActive ? "text-red-600 font-bold" : "text-gray-600"
//                 }
//               >
//                 کتابخوانه
//               </NavLink>
//               <NavLink
//                 to="/acount"
//                 className={({ isActive }) =>
//                   isActive ? "text-red-600 font-bold" : "text-gray-600"
//                 }
//               >
//                 حساب کاربری
//               </NavLink>
//               <NavLink
//                 to="/search"
//                 className={({ isActive }) =>
//                   isActive ? "text-red-600 font-bold" : "text-gray-600"
//                 }
//               >
//                 جستجو
//               </NavLink>
//             </nav>

//             <div className="p-6">
//               <div className=" flex align-bottom">
//                 <Routes>
//                   <Route path="/cafe" element={<Cafe />} />
//                   <Route path="/writer" element={<Writer />} />
//                   <Route path="/library" element={<Library />} />
//                   <Route path="/acount" element={<Acount />} />
//                   <Route path="/search" element={<Search />} />
//                 </Routes>
//               </div>
//             </div>
//           </div>
//         </BrowserRouter>
//       </div>
//     </div>