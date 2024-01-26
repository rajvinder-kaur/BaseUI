import React from 'react'
import logo from "../assets/Subtract.svg"
import { sidebarLinks } from "../constants/sidebarLinks"
const Leftbar = () => {
    return (
        <div>
            <div className='w-56 bg-[#FFF]'>
                <div className='bg-[#FCFCFF] flex flex-row items-center'>
                    <img src={logo} alt='img' className='bg-[#FCFCFF] rounded-full h-14 w-14 m-10' />
                    <h1 className='font-semibold text-2xl'>Base</h1>
                </div>
                <div>
                    {
                        sidebarLinks.map((link) => (
                            <div>
                                <div>
                                    <img src={link.icon}/>
                                    <h3>{link.name}</h3>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Leftbar
