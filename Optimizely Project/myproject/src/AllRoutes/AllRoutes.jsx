import { Routes, Route } from "react-router-dom";
import FreeMark from "../Components/FreeMark";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Plans from "../Components/Plans";

export default function AllRoutes(){

    return(
        <Routes>
            
            <Route path='/' element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path='/plans' element={<Plans />} />
            <Route path='/freemark' element={<FreeMark />} />
        </Routes>
    )
}