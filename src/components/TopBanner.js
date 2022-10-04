import { useRef } from 'react';
import TopSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import { AiOutlineSwapRight } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { top_banner } from '../data/common';

const TopBanner = () => {
    const topSlider = useRef(null);
    return (
        <div className="TopBanner">
            <TopSlider
                arrows={false}
                autoplay={true}
                pauseOnFocus={false}
                pauseOnHover={false}
                ref={topSlider}
            >
                {
                    top_banner.map(it => {
                        return (
                            <div key={it.id}>
                                <Link to={it.link}>{it.content}<span>{it.span}</span> <AiOutlineSwapRight className='nexticon' /></Link>
                            </div>
                        )
                    })
                }
            </TopSlider>
        </div>
    )
}

export default TopBanner;
