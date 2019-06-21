import React from 'react'
import Slider from "react-slick";


const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 1,
    swipeToSlide: true,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true
}


let slides = ({slides}) => {
    if(slides) {

        return(

            <Slider {...settings}>
                {slides.map((item) => {

                    return(
                        <div key={item.id} className="sliderImage">
                            <div className="backImage" style={{background:`url(/images/covers/${item.cover}) no-repeat center center / cover`}}>
                                <div className="slideCaption">
                                    <h4>{item.title}</h4>
                                    <h1>{item.topic}</h1>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Slider>

        )
    }
}



const Featured = (props) => {


    return(
        <div className="slider">
            {slides(props)}
        </div>
                
    )

    
        

}

export default Featured