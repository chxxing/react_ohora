import { main_slider } from "../data/common";
import NewCollection from "../pages/NewCollection";
import MainVisual from "./MainVisual"

const Main = () => {
    return (
        <main>
            <MainVisual content={main_slider} />
            <NewCollection />
        </main>
    )
}

export default Main;