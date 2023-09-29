import { Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Courses from '../../courses'
import FilterCourses from './FilterCourses'

const Mainfile = () => {

    return (
        <>
            <Grid container spacing={2} style={{ padding: "1rem" }}>
                <Grid item xs={2} >   
                    <FilterCourses/>
                </Grid>
                <Grid item xs={10} >
                    <Courses />
                </Grid>
            </Grid>
        </>
    )
}

export default Mainfile