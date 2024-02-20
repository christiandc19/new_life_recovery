import React from 'react'
import './InsuranceHome.css'
import InsuranceHomeImg from "../../assets/insurance-section-img-min.webp";



const InsuranceHome = () => {
    return (
        <>
            <div className='insurance-home container'>
                <div className='insurance-home-flex'>

                    <div className='insurance-home-left'>
                        <img src={InsuranceHomeImg} alt="Happy Family" loading="lazy" />
                    </div>

                    <div className='insurance-home-right'>
                        <p>At New Life Recovery, we believe that quality healthcare should be accessible to all. That's why we're committed to working with a wide range of insurance providers to ensure our patients can receive the care they need without added financial stress. Explore our comprehensive list of accepted insurances above.</p><br/>

                        <p>Have questions about our accepted insurances or need assistance navigating your coverage? Feel free to reach out to our friendly team or fill out the form below. We're here to help you receive the care you deserve.</p>
                    </div>


                </div>
            </div>
        </>
    )
}

export default InsuranceHome
