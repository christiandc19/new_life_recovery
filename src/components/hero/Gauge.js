import React from "react";
import './Gauge.css'

const Gauge = (props) => {
    return (
        <>
        <section className="gauge">
                <div>
                        <h3>{props.Gauge}</h3>
                        <div className="bar-container">
                        <div class={props.ClassName}></div>
                    </div>
                    <div className="lang"><h4>{props.Header}</h4></div>
                    <div className="lang"><p>{props.Name}</p></div>
            </div>
        </section>
    </>
        
    )
}


export default Gauge