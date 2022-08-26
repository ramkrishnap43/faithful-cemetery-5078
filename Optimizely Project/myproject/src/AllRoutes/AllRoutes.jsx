import { Routes, Route } from "react-router-dom";
import Login from "../Components/Login";

export default function AllRoutes(){

    return(
        <Routes>
            {/* <Route path="/"  element={<Home />}/> */}
            <Route path="/login" element={<Login />} />
            



        </Routes>
    )
}