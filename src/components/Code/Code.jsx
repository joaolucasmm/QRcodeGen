import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Insert() {
    return (
        <Card sx={{ maxWidth: 500 }}>
            <CardMedia
                sx={{ height: 500 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    QR Code to LINK
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Click in the download button to save this QR Code image.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Download</Button>
            </CardActions>
        </Card>
    )
}

export default Insert