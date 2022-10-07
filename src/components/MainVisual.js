import { Link } from "react-router-dom";
import { AiOutlineRight, AiOutlineSwapLeft, AiOutlineSwapRight } from "react-icons/ai";
import MainSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import '../css/MainVisual.scss';
import { useRef } from "react";

const MainVisual = ({ content }) => {
    const MAINSLIDE = useRef(null);
    return (
        <section className="MainVisual">
            <MainSlider
                className="MainSlider"
                ref={MAINSLIDE}
                arrows={false}
                dots={true}
                pauseOnFocus={false}
                pauseOnHover={false}
            >
                {
                    content.map((it, idx) => {
                        return (
                            <figure className={`itm0${idx + 1}`} key={it.id}>
                                <div className="inner">
                                    <h2>{it.title}</h2>
                                    <div className="des">{it.des}</div>
                                    <Link to={it.link}>shop now <AiOutlineRight /></Link>
                                </div>
                            </figure>
                        )
                    })
                }
            </MainSlider>
            <div className="slideArrows">
                <AiOutlineSwapLeft onClick={() => MAINSLIDE.current.slickPrev()} />
                <AiOutlineSwapRight onClick={() => MAINSLIDE.current.slickNext()} />
            </div>
        </section>
    )
}

export default MainVisual;