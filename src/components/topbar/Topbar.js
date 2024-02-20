import React from 'react'
import './Topbar.css'

import { MdLocationPin } from 'react-icons/md';
import { FiMail } from 'react-icons/fi';
import { AiOutlinePhone } from 'react-icons/ai';


const Topbar = () => {
  return (
    <div className='topbar'>
            <div className='topbar-content container'>
                <div className='address bar-box1 topbar-hide'>
                    <p><span><MdLocationPin />&nbsp;</span>240 S Rodeo Dr., Beverly Hills, CA 90212</p>
                </div>

                <div className='email bar-box2'>
                    <p><span><FiMail />&nbsp;</span> info@rodeorecovery.com</p>
                </div>

                <div className='number bar-box3'>
                    <p><span><AiOutlinePhone />&nbsp;</span> +1 (323)  596-1997</p>
                </div>

            </div>
      
    </div>
  )
}

export default Topbar
