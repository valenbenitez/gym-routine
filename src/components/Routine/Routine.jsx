import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import style from './routine.module.css'
import BasicModal from '../Modal/Modal'

export default function Routine() {
  const [open, setOpen] = useState(false)
  const [image, setImage] = React.useState('')

  function handleOpen(img) {
    setImage(img)
    setOpen(!open)
  }

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <BasicModal open={open} setOpen={setOpen} img={image} />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Dia 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <img src="lunes.png" onClick={() => handleOpen('lunes.png')} style={{ width: '100%', heigh: '300%' }} />
        </AccordionDetails>
      </Accordion>
      <br />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Dia 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <img src="martes.png" onClick={() => handleOpen('martes.png')} style={{ width: '100%', heigh: '300%' }} />
        </AccordionDetails>
      </Accordion>
      <br />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Dia 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <img
            src="miercoles.png"
            onClick={() => handleOpen('miercoles.png')}
            style={{ width: '100%', heigh: '300%' }}
          />
        </AccordionDetails>
      </Accordion>
      <br />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Dia 4</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <img src="jueves.png" onClick={() => handleOpen('jueves.png')} style={{ width: '100%', heigh: '300%' }} />
        </AccordionDetails>
      </Accordion>
      <br />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Dia 5</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <img src="viernes.png" onClick={() => handleOpen('viernes.png')} style={{ width: '100%', heigh: '300%' }} />
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
