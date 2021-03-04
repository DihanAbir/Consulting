
import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

function Contact() {

    const container = useRef(null)

    useEffect(() => {
      lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('../../assets/contact.json')
      })
    }, [])


    return (
        <div className="row">
            <div className="col-lg-6">
            <div className="container" ref={container}></div>
            </div>
            
        </div>
    )
}

export default Contact
