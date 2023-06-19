import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

export default function Routine() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
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
          <img src="lunes.png" />
        </AccordionDetails>
      </Accordion>
      <br />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Dia 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <img src="martes.png" />
        </AccordionDetails>
      </Accordion>
      <br />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Dia 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <img src="miercoles.png" />
        </AccordionDetails>
      </Accordion>
      <br />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Dia 4</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <img src="jueves.png" />
        </AccordionDetails>
      </Accordion>
      <br />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Dia 5</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <img src="viernes.png" />
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
