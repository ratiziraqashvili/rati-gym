import React from 'react'
import { Stack, Typography} from "@mui/material"
import Icon from "../assets/icons/gym.png"
import waistImage from '../assets/icons/waist.jpg'
import quads from '../assets/icons/quads.png'
import backMuscle from '../assets/icons/backmuscle.png'
import calves from '../assets/icons/calves.png'
import chest from '../assets/icons/chest.png'
import upperArm from '../assets/icons/biceptricep.jpg'
import cardio from '../assets/icons/cardio.png'
import shoulder from '../assets/icons/shoulders.png'
import forearm from '../assets/icons/forearm.png'
import neck from '../assets/icons/neck.png'

const bodyPartImages = {
  waist: {
    src: waistImage,
    width: '80px',
    height: '80px',
  },
  'upper legs': {
    src: quads,
    width: '70px',
    height: '70px',
  },
  back: {
    src: backMuscle,
    width: '80px',
    height: '80px',
  },
  'lower legs': {
    src: calves,
    width: '80px',
    height: '80px',
  },
   chest: {
    src: chest,
    width: '80px',
    height: '80px',
  },
  'upper arms': {
    src: upperArm,
    width: '80px',
    height: '80px',
  },
  cardio: {
    src: cardio,
    width: '80px',
    height: '80px',
  },
  shoulders: {
    src: shoulder,
    width: '80px',
    height: '80px',
  },
  'lower arms': {
    src: forearm,
    width: '80px',
    height: '80px',
  },
   neck: {
    src: neck,
    width: '80px',
    height: '80px',
  },
};


const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  const imageProperties = bodyPartImages[item.bodyPart];

  return (
    <>
    <Stack
    type='button'
    alignItems='center'
    justifyContent='center'
    className='bodyPart-card'
    sx={{
        borderTop: bodyPart === item ? '4px solid #ff2625' : '',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        gap: '47px' }}
        onClick={() => {
            setBodyPart(item);
        }}
    > 
        {imageProperties && <img src={imageProperties.src} alt={item.bodyPart} style={{ 
          width: imageProperties.width,
          height: imageProperties.height,
          }} 
          />
          }
        <Typography fontSize='24px' fontWeight="bold" color='#3a1212' textTransform="capitalize">{item.bodyPart}</Typography>
    </Stack>
    </>
  )
}

export default BodyPart