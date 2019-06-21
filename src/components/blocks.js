import React from 'react'
import { Link } from 'react-router-dom'
import Reveal from 'react-reveal'
import 'animate.css/animate.css'



let blocks = ({blocks}) => {
    if(blocks) {

        return blocks.map((item) => {

            return(
                <Reveal  key={item.id} effect="animated fadeInUp">
                    <div className={item.type}>
                        <div className="blockImage" style={{background : `url(/images/blocks/${item.image}) no-repeat center center / cover`}}>
                            <span>
                                <Link to={item.link}>{item.title}</Link>
                            </span>
                        </div>
                        <div className="blind"></div>
                    </div>
                </Reveal>
                
    
            )

        })

        
    }
}



const Blocks = (props) => {


    return(
        <div className="blockCover">
            {blocks(props)}
        </div>
                
    )

    
        

}

export default Blocks