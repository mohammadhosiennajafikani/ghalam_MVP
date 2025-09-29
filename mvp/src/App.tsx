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
      <div className=" min-h-screen min-w-screen font max-w-screen main-bg-color">
        <div className="pb-14 main-bg-color ">
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
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-dasharray="28" stroke-dashoffset="28" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M4 21v-1c0 -3.31 2.69 -6 6 -6h4c3.31 0 6 2.69 6 6v1"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="28;0"/></path><path d="M12 11c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4Z"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" values="28;0"/></path></g></svg> */}
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