import { useState} from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

function Insert({ setContent }) {
    const [input, setInput] = useState("");
    return (
        <>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={e => setInput(e.target.value)} />
            <Button variant="contained" 
            onClick={() => {
                setContent(input);
            }}
            >Generate</Button>
        </>
    )
}

export default Insert
