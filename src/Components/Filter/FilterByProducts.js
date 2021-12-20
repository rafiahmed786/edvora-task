import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const FilterByProducts = ({data,setDisplayFiltered}) => {

    const products = Array.from(data);
    
const [age, setAge] = React.useState('');

  const handleChange = (event) => {
      const value = event.target.value;
      setAge(value)
     if(value!==''){
          const input = products.filter(product =>product.product_name===value)
        setDisplayFiltered(input)
     }
     else{
         setDisplayFiltered(products)
     }
        
        
    
  };
    return (
         <div>
       <FormControl sx={{ m: 1, minWidth: 200 ,background:'#333',}}>
        <InputLabel id="demo-controlled-open-select-label" style={{color:'#fff'}}>Products</InputLabel>
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
          <MenuItem value={'Alphabet inc'}>Alphabet inc</MenuItem>
          <MenuItem value={'TCS corporation'}>TCS corporation</MenuItem>
          <MenuItem value={'Digits limited'}>Digits limited</MenuItem>
          <MenuItem value={'Microsoft inc'}>Microsoft inc</MenuItem>
          <MenuItem value={'Tencent Limited'}>Tencent Limited</MenuItem>
        </Select>
      </FormControl>
    </div>
    );
};

export default FilterByProducts;