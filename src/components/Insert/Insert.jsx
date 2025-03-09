import { useState} from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

function Insert({ setContent }) {
    const [input, setInput] = useState("");
    return (
        <>
            <TextField id="outlined-basic" label="QR Content" variant="outlined" onChange={e => setInput(e.target.value)}  multiline={true} minRows={2}/>
            <Button variant="contained" 
            onClick={() => {
                setContent(input);
            }}
            >Generate</Button>
        </>
    )
}

export default Insert
