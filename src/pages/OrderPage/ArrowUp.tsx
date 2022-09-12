import { useEffect, useState } from 'react'
import styles from './OrderPage.module.scss'

export const ArrowUp = () => {
  const [prevPos, setPrevPos] = useState(0)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const callback = () => {
        var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
        if (st > prevPos){
            setShow(true)
        } else {
            setShow(false)
        }
        setPrevPos(st <= 0 ? 0 : st)
    }
    window.addEventListener('scroll', callback)
    return () => window.removeEventListener('scroll', callback)
  }, [prevPos])

  const clickHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return <div onClick={clickHandler} className={`${styles.arrowDownContainer} ${!show && styles.arrowFown_disabled}`}>
    <div>↑</div>
  </div>
}