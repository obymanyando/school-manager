import React, { useEffect } from "react";
import '../../assets/styles/back-to-top.css';
import { Events, animateScroll as scroll, scrollSpy} from 'react-scroll'

const BackToTop = () => {
    useEffect(() => {
        Events.scrollEvent.register('begin', function(to, element) {
            
        });

        Events.scrollEvent.register('end', function(to, element) {
        });

        scrollSpy.update();
        return function () {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        }
    }, []);

    const scrollToTop = () => {
        scroll.scrollToTop();
    }
    return (
        <p onClick={ () => { scrollToTop()}} href="#" className="back-to-top scroll"><i className="fa fa-chevron-up"></i></p>
    )

}

export default BackToTop
