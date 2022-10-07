import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../components/Main";
import Test01 from "./Test01";
import Test02 from "./Test02";
import Test03 from "./Test03";

const NewCollection = () => {
    const [openTab, setOpenTab] = useState(0);
    const clickHandler = (id) => {
        setOpenTab(id);
        console.log(openTab);
    }
    return (
        <section className="NewCollection">
            <h2>NEW COLLECTION</h2>
            <ul>
                <li onClick={() => clickHandler(0)}>전체</li>
                <li onClick={() => clickHandler(1)}>네일</li>
                <li onClick={() => clickHandler(2)}>페디</li>
                <li onClick={() => clickHandler(3)}>케어&amp;툴</li>
            </ul>
            <div className="example">
                <Routes>
                    <Route path='/' element={<Test01 on={openTab} />}></Route>
                    <Route path='/' element={<Test02 />}></Route>
                    <Route path='/' element={<Test03 />}></Route>
                </Routes>
                <Test01 />
            </div>
        </section >
    )
}

export default NewCollection;