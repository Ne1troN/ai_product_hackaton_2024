import { BrowserRouter, Route, Routes } from "react-router-dom";

import ArchiveNewsScreen from "./screens/ArchiveNewsScreen";
import RecentNewsScreen from "./screens/RecentNewsScreen";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={ <RecentNewsScreen /> } />
        <Route path="/archive" element={ <ArchiveNewsScreen /> } />
      </Routes>
    </BrowserRouter>    
  );
}
