import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, Typography } from '@material-ui/core'
import React from 'react'
import { Drawer,Box} from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Cookies from 'js-cookie';
import { useState } from 'react';

const FilterCourses = () => {
   
    return (
        <>
        
            <Typography> 100 result for searchData </Typography>
            <Accordion style={{backgroundColor:'var(--form)'}} defaultExpanded >
                <AccordionSummary 
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className='rate' 
                >
                    <Typography><b >Ratings</b></Typography>
                </AccordionSummary>
                <AccordionDetails className='rate'>
                    <Typography >
                        <div >
                            <FormControlLabel   
                                control={<Checkbox color="primary" />}
                                label="4.5 & more"
                            />
                            <FormControlLabel
                                control={<Checkbox color="primary" />}
                                label="4.0 & more"
                            />
                            <FormControlLabel
                                control={<Checkbox color="primary" />}
                                label="3.5 & more"
                            />
                            <FormControlLabel
                                control={<Checkbox color="primary" />}
                                label="3.0 & more"
                            />
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion  style={{backgroundColor:'var(--form)'}}defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography><b>Language</b></Typography>
                </AccordionSummary>
                <AccordionDetails className='rate'>
                    <Typography>
                        <div>
                            <FormControlLabel
                                control={<Checkbox color="primary" />}
                                label="English"
                            />
                            <FormControlLabel
                                control={<Checkbox color="primary" />}
                                label="hindi"
                            />
                            <FormControlLabel
                                control={<Checkbox color="primary" />}
                                label="Espanol"
                            />
                            <FormControlLabel
                                control={<Checkbox color="primary" />}
                                label="portugues"
                            />
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion style={{backgroundColor:'var(--form)'}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography><b>Video duration</b></Typography>
                </AccordionSummary>
                <AccordionDetails className='rate'>
                    <Typography>
                        <div>
                            <FormControlLabel
                                control={<Checkbox color="primary" />}
                                label="0-1 Hour"
                            />
                            <FormControlLabel
                                control={<Checkbox color="primary" />}
                                label="1-3 Hour"
                            />
                            <FormControlLabel
                                control={<Checkbox color="primary" />}
                                label="3-6 Hour"
                            />
                            <FormControlLabel
                                control={<Checkbox color="primary" />}
                                label="6-17 Hour"
                            />
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion style={{backgroundColor:'var(--form)'}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography><b>Topic</b></Typography>
                </AccordionSummary>
                <AccordionDetails className='rate'>
                    <Typography>
                        <div>
                            <FormControlLabel
                                control={<Checkbox color="primary" />}
                                label="Python"
                            />
                            <FormControlLabel
                                control={<Checkbox color="primary" />}
                                label="Web development"
                            />
                            <FormControlLabel
                                control={<Checkbox color="primary" />}
                                label="React js"
                            />
                            <FormControlLabel
                                control={<Checkbox color="primary" />}
                                label="Angular"
                            />
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion style={{backgroundColor:'var(--form)'}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography><b>Features</b></Typography>
                </AccordionSummary>
                <AccordionDetails className='rate'>
                    <Typography>
                        <div>
                            <FormControlLabel
                                control={<Checkbox color="primary" />}
                                label="Subtitles"
                            />
                            <FormControlLabel
                                control={<Checkbox color="primary" />}
                                label="Quizzes"
                            />
                            <FormControlLabel
                                control={<Checkbox color="primary" />}
                                label="Practice Sets"
                            />
                            <FormControlLabel
                                control={<Checkbox color="primary" />}
                                label="Coding Exercise"
                            />
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            
           
        </>
    )
}

export default FilterCourses





