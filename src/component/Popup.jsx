import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import WarningIcon from '@mui/icons-material/Warning';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '700px',
    height: '500px',
    bgcolor: 'white',
    border: '2px solid #000',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                // aria-labelledby="modal-modal-title"
                // aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Grid container justifyContent={'end'}>
                        <Grid item>
                            <Button>
                                <CloseIcon sx={{ color: 'red' }} />
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container sm={12} justifyContent={'center'} alignItems={'end'} height={200}>
                        <Grid item>
                            <WarningIcon sx={{ fontSize: '13rem' }} />
                        </Grid>
                    </Grid>
                    <Grid container sm={12} justifyContent={'center'} alignItems={'center'}  >
                        <Grid item>
                            <Typography sx={{ fontSize: '2rem' }}>Down-Time Exceed Limit</Typography>
                        </Grid>
                    </Grid>
                    <Grid container sm={12} justifyContent={'center'} alignItems={'center'}  >
                        <Grid item>
                            <Button variant='contained' size={'large'} sx={{ color: 'white', fontWeight: '800', fontSize: '1.2rem' }}>Go-To Log</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}