import React, { useState, useEffect, useRef } from 'react'
import { getOffset } from './util'

const panelStyles = {
  width: 500,
  minHeight: 200,
  right: 10,
  top: 80,
  backgroundColor: '#FFF',
  borderRadius: '3px',
  position: 'fixed',
  transition: 'top 250ms ease',
  border: '1px solid #dedede',
  padding: '1em'
}

const Sticky = ({ children }) => {
  const [isShowFloatPannel, setFloatPannel] = useState(false)
  const [left, setLeftPannel] = useState(0)
  const [top, setTopPannel] = useState(10)
  const isShowNavbar = false

  const infoRef = useRef()

  const onScroll = () => {
    const { scrollTop } = document.getElementsByTagName('html')[0]

    if (scrollTop > 250) {
      // Here we'll copy the relative poosition of pannel
      const left = getOffset(infoRef.current).left + 50
      setLeftPannel(left)
      setFloatPannel(true)

      if (isShowNavbar) {
        setTopPannel(80)
      } else {
        setTopPannel(10)
      }
    } else {
      setFloatPannel(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [isShowNavbar])

  return (
    <div ref={infoRef}>
      {isShowFloatPannel && (
        <div style={{
          ...panelStyles,
          top,
          left
        }}>
          { children }
        </div>
      )}
    </div>
  )
}

export default Sticky
