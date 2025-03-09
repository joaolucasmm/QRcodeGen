import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

function Insert() {
    return (
        <>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <Button variant="contained">Generate</Button>
        </>
    )
}

export default Insert
