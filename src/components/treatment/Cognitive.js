import React from 'react'
import './Cognitive.css'
import COGNITIVE from "../../assets/cognitive.webp";

const Cognitive = () => {
  return (
    <>
      
        <div className='cognitive'>

            <div className='cognitive-content container'>

                <div className='cognitive-flex'>

                    <div className='cognitive-left'>
                        <img src={COGNITIVE} alt="activities" />
                    </div>

                    <div className='cognitive-right'>
                        <h1>Cognitive Behavioral Therapy</h1>
                        <p>Cognitive behavioral therapy (CBT) is a form of psychological treatment that has been demonstrated to be effective for a range of problems including depression, anxiety disorders, alcohol and drug use problems, marital problems, eating disorders, and severe mental illness. Numerous research studies suggest that CBT leads to significant improvement in functioning and quality of life. In many studies, CBT has been demonstrated to be as effective as, or more effective than, other forms of psychological therapy or psychiatric medications.</p>
                        <br />
                        <p>What is Cognitive Behavioral Therapy?
                        Cognitive behavioral therapy (CBT) is a form of psychological treatment that has been demonstrated to be effective for a range of problems including depression, anxiety disorders, alcohol and drug use problems, marital problems, eating disorders, and severe mental illness. Numerous research studies suggest that CBT leads to significant improvement in functioning and quality of life. In many studies, CBT has been demonstrated to be as effective as, or more effective than, other forms of psychological therapy or psychiatric medications.

                        It is important to emphasize that advances in CBT have been made on the basis of both research and clinical practice. Indeed, CBT is an approach for which there is ample scientific evidence that the methods that have been developed actually produce change. In this manner, CBT differs from many other forms of psychological treatment.</p>

                        <div className='source'>
                            <p>Source: APA Div. 12 (Society of Clinical Psychology)</p>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </>
  )
}

export default Cognitive
