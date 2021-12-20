import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';

const FilterByCity = ({data, setDisplayFiltered}) => {
    const products = Array.from(data);
    
const [age, setAge] = React.useState('');

  const handleChange = (event) => {
      const value = event.target.value;
      setAge(value)
      if(value!==''){
        const input = products.filter(product =>product?.address?.city===value)
        setDisplayFiltered(input)
      }
      else{
          setDisplayFiltered(products)
      }
  };

    return (
        <div>
       <FormControl sx={{ m: 1, minWidth: 200,background:'#333' }}>
        <InputLabel id="demo-controlled-open-select-label" style={{color:'#fff'}}>City</InputLabel>
        <Select
        sx={{color:'#fff'}}
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value=''>
            <em>Show All</em>
          </MenuItem>
          <MenuItem value={'Palanpur'}>Palanpur</MenuItem>
          <MenuItem value={'Rajgarh (Alwar)'}> Rajgarh (Alwar)</MenuItem>
          <MenuItem value={'Korba'}>Korba</MenuItem>
          <MenuItem value={'Silvassa'}>Silvassa</MenuItem>
          <MenuItem value={'Tilda Newra'}>Tilda Newra</MenuItem>
          <MenuItem value={'Bargarh'}>Bargarh</MenuItem>
          <MenuItem value={'Titlagarh'}>Titlagarh</MenuItem>
          <MenuItem value={'Pasighat'}>Pasighat</MenuItem>
          <MenuItem value={'Cuttack'}>Cuttack</MenuItem>
          <MenuItem value={'Naharlagun'}>Naharlagun</MenuItem>
          <MenuItem value={'Raurkela'}>Raurkela</MenuItem>
          <MenuItem value={'Naihati'}>Naihati</MenuItem>
          <MenuItem value={'Manendragarh'}>Manendragarh</MenuItem>
          <MenuItem value={'Nadiad'}>Nadiad</MenuItem>
          <MenuItem value={'Sujangarh'}>Sujangarh</MenuItem>
          <MenuItem value={'Mavoor'}>Mavoor</MenuItem>
          <MenuItem value={'Malpura'}>Malpura</MenuItem>
          <MenuItem value={'Jhargram'}>Jhargram</MenuItem>
          <MenuItem value={'Bankura'}>Bankura</MenuItem>
          <MenuItem value={'Mahesana'}>Mahesana</MenuItem>
          <MenuItem value={'Phulabani'}>Phulabani</MenuItem>
          <MenuItem value={'Sankari'}>Sankari</MenuItem>
          <MenuItem value={'Taliparamba'}>Taliparamba</MenuItem>
          <MenuItem value={'Sunabeda'}>Sunabeda</MenuItem>
          <MenuItem value={'Ranavav'}>Ranavav</MenuItem>
          <MenuItem value={'Panamattom'}>Panamattom</MenuItem>
          <MenuItem value={'Bokaro Steel City'}>Bokaro Steel City</MenuItem>
          <MenuItem value={'Deesa'}>Deesa</MenuItem>
          <MenuItem value={'Simdega'}>Simdega</MenuItem>
          <MenuItem value={'Thrissur'}>Thrissur</MenuItem>
          <MenuItem value={'Hugli-Chinsurah'}>Hugli-Chinsurah</MenuItem>
          <MenuItem value={'Alappuzha'}>Alappuzha</MenuItem>
          <MenuItem value={'Chirkunda'}>Chirkunda</MenuItem>
          <MenuItem value={'Vadnagar'}>Vadnagar</MenuItem>
          <MenuItem value={'Mungeli'}>Mungeli</MenuItem>
          <MenuItem value={'Bhilai Nagar'}>Bhilai Nagar</MenuItem>
          <MenuItem value={'Jagdalpur'}>Jagdalpur</MenuItem>
        </Select>
      </FormControl>
    </div>
    );
};

export default FilterByCity;