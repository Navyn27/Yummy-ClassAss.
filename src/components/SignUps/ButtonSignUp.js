import React from 'react'

function ButtonSignUp(props) {
  const { swap, setSwap, content } = props

  const handleClick= e =>{
    e.preventDefault()
  }

  return (
    <>
        <button  className={`px-[10rem] py-[.75rem] bg-myred text-[white] font-bold`} style={{display: content === 'Previous' || content === 'register' || content === 'Sign up' ? !swap ? 'none' : null : swap? 'none' : null }} onClick={content === 'Next' ? (e)=>{
          setSwap(true)
          handleClick(e)
           } : content !== 'register' && content !== 'Sign up' ? (e)=>{
             setSwap(false)
             handleClick(e)
             } : null}>{content}</button>
    </>
  )
}

export default ButtonSignUp
