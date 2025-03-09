import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Code.css'

function Insert({ genImage }) {
    const [url, setUrl] = useState(`http://api.qrserver.com/v1/create-qr-code/?data=${genImage}&size=500x500`);

    useEffect(() => {
        setUrl(`http://api.qrserver.com/v1/create-qr-code/?data=${genImage}&size=500x500`);
    }, [genImage]);

    return (
        <Card sx={{ maxWidth: 500 }} className='code'>
            <CardMedia
                sx={{ height: 500 }}
                image={url}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{mt: 2, mb: 2}}>
                    QR Code to {genImage}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Click in the download button to save this QR Code image.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={async () => {
                    const response = await fetch(url);
                    const blob = await response.blob();
                    const downloadLink = document.createElement("a");
                    downloadLink.href = URL.createObjectURL(blob);
                    downloadLink.download = "QRcode.png";
                    downloadLink.click();
                }}>Download</Button>
            </CardActions>
        </Card>
    )
}

export default Insert