import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import style from './routine.module.css'

export default function Routine() {
  return (
    <div
      style={{
        width: '80%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Dia 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <img src="lunes.png" id="imagen-pequena" style={{ width: '100%', heigh: '100%' }} />
        </AccordionDetails>
      </Accordion>
      <br />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Dia 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <img src="martes.png" style={{ width: '100px', heigh: '80px' }} />
        </AccordionDetails>
      </Accordion>
      <br />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Dia 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <img src="miercoles.png" style={{ width: '100px', heigh: '80px' }} />
        </AccordionDetails>
      </Accordion>
      <br />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Dia 4</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <img src="jueves.png" style={{ width: '100px', heigh: '80px' }} />
        </AccordionDetails>
      </Accordion>
      <br />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Dia 5</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <img src="viernes.png" style={{ width: '100px', heigh: '80px' }} />
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
