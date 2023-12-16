import './App.css';
import {Clothes} from "../Clothes/Clothes";
import {Electronics} from "../Electronics/Electronics";
import {Food} from "../Food/Food";
import {Route, Routes} from "react-router";
import {useDispatch} from "react-redux";
import {add} from "../../store/catalogSlice";
import data from "../../api/data.json";
import {useEffect} from "react";

export function App() {
    const dispatch = useDispatch();
    const importList = data;
    useEffect(() => {
        dispatch(add(importList))
    }, [])

  return (
    <div className="App">
        <Routes>
            <Route path='*' element={<Clothes />} />
            <Route path="/" element={<Clothes />} />
            <Route path="clothes" element={<Clothes />} />
            <Route path="electronics" element={<Electronics />} />
            <Route path="food" element={<Food />} />
        </Routes>
    </div>
  );
}

