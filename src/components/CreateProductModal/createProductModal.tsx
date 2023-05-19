import {useContext} from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Context from '../../store/context';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export const CreateProductModal = () => {
    const {modalIsOpen, setModalIsOpen} = useContext(Context);
    console.log(modalIsOpen, 'SHOW CONTEXT');
    
    return (
        <Modal open={modalIsOpen} onClose={() => setModalIsOpen((prev) => !prev)}>
            <Box sx={style}>
                <Typography component='h2' variant='h4'>Modal header in here</Typography>
            </Box>
        </Modal>
    )
}