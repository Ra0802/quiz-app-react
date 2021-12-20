import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom';
import { handleAmountChange, handleScoreChange } from '../redux/actions';

const FinalScreen = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { score } = useSelector(state => state);

    const handleBacktoHome = () => {
        dispatch(handleScoreChange(0));
        dispatch(handleAmountChange(10));
        navigate("/");
    }

    return (
        <Box mt={30}>
            <Typography variant="h3" fontWeight="bold" mb={3}>
                FINAL SCORE {score}
            </Typography>

            <Button variant="outlined" onClick={handleBacktoHome}>BACK TO HOME PAGE</Button>
        </Box>
    )
}

export default FinalScreen
