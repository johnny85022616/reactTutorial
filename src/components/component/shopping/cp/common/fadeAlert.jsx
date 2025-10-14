import { createContext, useContext, useState } from 'react';
import styled from 'styled-components';
// import '../../style/color.scss';

const AlertContext = createContext();

const FadeAlert = styled.div`
  position: fixed;
  top: ${({$isOpen})=> $isOpen? '50px': '-50px'};
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  transition: top .3s cubic-bezier(0.4, 0, 0.2, 1);
  background: #adadad;
  padding: 12px 24px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
`
export function FadeAlertProvider({ children }) {
  const [isOpen, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  function showAlert(message) {
    if(isOpen) return 
    setOpen(true);
    setMessage(message);
    setTimeout(()=>{
      setOpen(false)
    }, 3000)
  }

  return (
    <>
      <AlertContext.Provider value={{showAlert}}>
        {children}
        <FadeAlert $isOpen={isOpen}>{message}</FadeAlert>
      </AlertContext.Provider>
    </>
  );
}

export function useFadeAlert(){
  return useContext(AlertContext)
}
