import React, {useState, useEffect, useRef } from 'react'

const useClickOutsideToggle = () => {
    const [expanded, setExpanded] = useState(false);
  const ref = useRef(null)
  useEffect(() => {
    const handleClickOutside  = (e) => {
      if (ref.current && !ref.current.contain(e.target)){
        setExpanded(false);
      }
    }

    document.addEventListener('mouseup', handleClickOutside);
    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    }
  }, [ref])
  return {expanded, setExpanded, ref}
}

export default useClickOutsideToggle
