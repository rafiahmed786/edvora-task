import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';

const FilterByState = ({data, setDisplayFiltered}) => {
    const products = Array.from(data);
    
const [age, setAge] = React.useState('');

  const handleChange = (event) => {
      const value = event.target.value;
      setAge(value)
      if(value!==''){
          const input = products.filter(product =>product?.address?.state===value)
        setDisplayFiltered(input)
      }
      else{
          setDisplayFiltered(products)
      }
  };
    return (
         <div>
       <FormControl sx={{ m: 1, minWidth: 200 , background:'#333'}}>
        <InputLabel id="demo-controlled-open-select-label" style={{color:'#fff'}}>State</InputLabel>
        <Select
        sx={{color:'#fff'}}
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Show All</em>
          </MenuItem>
          <MenuItem value={'Rajasthan'}>Rajasthan</MenuItem>
          <MenuItem value={'Gujarat'}>Gujarat</MenuItem>
          <MenuItem value={'Chhattisgarh'}>Chhattisgarh</MenuItem>
          <MenuItem value={'Odisha'}>Odisha</MenuItem>
          <MenuItem value={'Tamil Nadu'}>Tamil Nadu</MenuItem>
          <MenuItem value={'Arunachal Pradesh'}>Arunachal Pradesh</MenuItem>
          <MenuItem value={'Dadra and Nagar Haveli'}>Dadra and Nagar Haveli</MenuItem>
          <MenuItem value={'West Bengal'}>West Bengal</MenuItem>
          <MenuItem value={'Kerala'}>Kerala</MenuItem>
          <MenuItem value={'Jharkhand'}>Jharkhand</MenuItem>
        </Select>
      </FormControl>
    </div>
    );
};

export default FilterByState;