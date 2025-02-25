import React from 'react'
import '../styles/NowCard.css'
import Image from "next/image"


const NowCard = () => {
    return (
        <>
            <div className='mleft1'>
                <div className='dfc'>
                    <div className='mleftww'>
                        <h2>Get Started Now</h2>
                        <div className="input_name">
                            <p className='text_name'>Name</p>
                            <input className='input_own' type="text" placeholder='Enter your name' />
                        </div>
                        <div className="input_name">
                            <p className='text_name'>Email address</p>
                            <input className='input_own' type="email" placeholder='Enter your e-mail' />
                        </div>
                        <div className="input_name">
                            <p className='text_name'>Password</p>
                            <input className='input_own' type="password" placeholder='Enter your password' />
                        </div>
                        <div className="df">
                            <input className='check' type="checkbox" />
                            <p className='agree'>I agree to the terms & policy</p>
                        </div>
                        <div>
                            <button className='btn_style'>Signin</button>
                            <hr className='hr' />
                        </div>
                    </div>
                    <div className="all">
                        <div className="google">
                            <Image className='mtop' src="/google.png" width={19} height={19} alt="Google Logo" />
                            <p className='mleft'>Sign in with Google</p>
                        </div>
                        <div className="apple">
                            <Image className='mtop' src="/apple.png" width={19} height={19} alt="Apple Logo" />
                            <p className='mleft'>Sign in with Apple</p>
                        </div>
                    </div>
                    <div>
                        <p className='center'>Have an account? Sign In</p>
                    </div>
                </div>
                <div>
                    <img src='back.png' className='mleft_img' alt="Background" width={'350px'}/>
                </div>
            </div>
        </>
    )
}

export default NowCard
