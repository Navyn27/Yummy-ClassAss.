import React from 'react'

function ButtonSignUp(props) {
  const { swap, setSwap, content } = props

  return (
    <>
        <button className={`px-[${content === 'Previous' || content === 'register' ? '9.5rem' : content === 'Sign up' ? '9.7rem' : '10.5rem' }] py-[1rem] rounded-[.2rem]  bg-myred text-[white] font-bold`} style={{display: content === 'Previous' || content === 'register' || content === 'Sign up' ? !swap ? 'none' : null : swap? 'none' : null }} onClick={content === 'Next' ? ()=>setSwap(true) : content !== 'register' && content !== 'Sign up' ? ()=>setSwap(false) : null}>{content}</button>
    </>
  )
}

export default ButtonSignUp
