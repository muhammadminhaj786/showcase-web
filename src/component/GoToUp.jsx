import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import * as Unicons from '@iconscout/react-unicons';
import {  UilHeart, UilArrowUp } from '@iconscout/react-unicons'
import { FaArrowUp } from "react-icons/fa";

const GoToUp = () => {

    const [isVisible, setIsVisible] = useState(false)

    const goToBtn = ()=>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }

    const listenToScroll = ()=>{
        let heightToHidden = 250;
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop
        if(winScroll > heightToHidden){
            setIsVisible(true)
        }else{
            setIsVisible(false)
        }
    }
    

    useEffect(()=>{
        window.addEventListener("scroll",listenToScroll)
    }, [])

  return (
    <Wrapper>
    {isVisible && (
      <div className="top-btn" onClick={goToBtn}>
        <FaArrowUp className="top-btn--icon" />
        {/* <Unicons.UilArrowUp size='60px' /> */}
      </div>
    )}
  </Wrapper>
    
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .top-btn {
    font-size: 1.8rem;
    width: 4rem;
    height: 4rem;
    color: #fff;
    background-color: #FF47FF;
    box-shadow: blue;
    border-radius: 50%;
    position: fixed;
    bottom: 5rem;
    right: 5rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &--icon {
      animation: gototop 1.2s linear infinite alternate-reverse;
    }

    @keyframes gototop {
      0% {
        transform: translateY(-0.5rem);
      }
      100% {
        transform: translateY(1rem);
      }
    }
  }

  @media (max-width: blue) {
    .top-btn {
      right: 0;
      left: 40%;
    }
  }
`;


export default GoToUp