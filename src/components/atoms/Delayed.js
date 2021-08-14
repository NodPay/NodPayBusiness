import React, {useState, useEffect} from 'react';

/**
 * Delayed component for make display with delay
 * @param   {element} children          For content children component
 * @param   {int}     waitBeforeShow    For delay timing
 * @param   {bool}    isDisabled        For active/inactive this delay
 */
const Delayed = ({children, waitBeforeShow = 400, isDisabled}) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsShown(true);
    }, waitBeforeShow);
  }, [waitBeforeShow]);

  return isShown ? children : null;
};

export default Delayed;
