import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { FormControl, InputLabel, MenuList, Select } from '@mui/material';

const states = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 
  'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 
  'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 
  'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 
  'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

function StateSelector({ selectedState, setSelectedState }:any) {

  const handleChange = (event:any) => {
    setSelectedState(event.target.value);
  };

  return (
    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">State</InputLabel>
        <Select
            fullWidth
            label="State"
            variant="standard"
            value={selectedState}
            onChange={handleChange}>
                {states.map((state) => (
                    <MenuItem key={state} value={state}>
                        {state}
                    </MenuItem>
                ))}
        </Select>
    </FormControl>
  );
}

export default StateSelector;
