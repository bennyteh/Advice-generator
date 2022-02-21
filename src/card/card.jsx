import React, { useEffect, useState } from 'react'
import { Container, Title, Quote, Img, Button, Emptybox, Picture} from './card-styled'
import divider from "../assets/pattern-divider-mobile.svg"
import dividerDesktop from "../assets/pattern-divider-desktop.svg"
import dice from "../assets/icon-dice.svg"
import axios from 'axios'

const Card = () => {

    const [advice, setAdvice] = useState([]);
    const [click, setClick] = useState(true)

    useEffect(()=> {
        if (!click) {
            return null
        }else {
            axios.get('https://api.adviceslip.com/advice')
            .then(res => {
                setAdvice(res.data.slip)
                setClick(false)
            })
            .catch(err => {
                console.log(err)
            })
        }
    },[(click)])

  return (
    <Container>
        <Title>Advice #{advice.id}</Title>
        <Quote>"{advice.advice}"</Quote>
        <Picture>
            <source media="(min-width: 520px)" srcSet={dividerDesktop}/>
            <img src={divider} alt="divider" />
        </Picture>
        <Emptybox>
            <Button onClick={()=>{setClick(true)}}><Img src={dice} padding={"0.5rem"}/></Button>
        </Emptybox>
    </Container>
  )
}

export default Card