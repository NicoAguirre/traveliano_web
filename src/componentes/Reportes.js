import React from 'react';
import { Select, MenuItem, FormControl, InputLabel, Grid } from '@mui/material';
import PieChart from './PieChart';
import BarChart from './BarChart';

const Reportes = () => {
    const [selectedOption1, setSelectedOption1] = React.useState('');
    const [selectedOption2, setSelectedOption2] = React.useState('');

    const handleChange1 = (event) => {
      setSelectedOption1(event.target.value);
    };

    const handleChange2 = (event) => {
      setSelectedOption2(event.target.value);
    };

    return (
    <div style={{ display: 'grid', width: '100vh' , marginTop: '68px' }}>
        <div style={{ overflow: 'auto' }}> 
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <FormControl fullWidth variant="outlined" size="small">
                    <InputLabel id="select-label-1" htmlFor="outlined-select" shrink>Usuario</InputLabel>
                        <Select
                            labelId="select-label-1"
                            value={selectedOption1}
                            label="Selecciona una opción"
                            onChange={handleChange1}
                        >
                            <MenuItem value="">
                                <em>Selecciona...</em>
                            </MenuItem>
                            <MenuItem value="opcion1">Opción 1</MenuItem>
                            <MenuItem value="opcion2">Opción 2</MenuItem>
                            <MenuItem value="opcion3">Opción 3</MenuItem>
                        </Select>
                </FormControl>
            </Grid>

            <Grid item xs={6}>
                <FormControl fullWidth size="small">
                    <InputLabel id="select-label-2" htmlFor="outlined-select" shrink>Fecha</InputLabel>
                    <Select
                        labelId="select-label-2"
                        value={selectedOption2}
                        label="Selecciona otra opción"
                        onChange={handleChange2}
                    >
                        <MenuItem value="">
                            <em>Selecciona...</em>
                        </MenuItem>
                        <MenuItem value="opcionA">Opción A</MenuItem>
                        <MenuItem value="opcionB">Opción B</MenuItem>
                        <MenuItem value="opcionC">Opción C</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
        <PieChart/>
        <BarChart/>
        </div>
    </div>
  );
};

export default Reportes;