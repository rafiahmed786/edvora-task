import { Card, CardContent, CardMedia, Paper, Typography } from '@mui/material';
import './SingleProduct.css'
import React from 'react';

const SingleProduct = ({product}) => {
    const {product_name,  brand_name, date, discription, image, price, address}= product;

    // for item reveals from top
    window.addEventListener("scroll",reveal);

   function reveal(){
	   var reveals = document.querySelectorAll(".reveal");
	   for(var i = 0; i < reveals.length; i++){
		   var windowheight = window.innerHeight;
		   var revealtop = reveals[i].getBoundingClientRect().top;
		   var revealpoint = 0;

		   if(revealtop < windowheight - revealpoint){
			   reveals[i].classList.add("active");

		   }else{
			reveals[i].classList.remove("active");
		   }
	   }
   };

    return (
         
             <Card  sx={{ width: 450, margin:'10px',padding:'15px 20px', background:'#333',color:'#fff' }}>
      <div className='reveal'>
        <Paper sx={{display:'flex', justifyContent: 'center',boxShadow: 0,background:'#333',color:'#fff'}}>
            <CardMedia sx={{imageFit: 'cover', width:'40%', marginRight: '25px', borderRadius:'10px'}}
          component="img"
          image={image}
          alt="green iguana"
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div">
            {product_name}
          </Typography>
          <Typography variant="h5" gutterBottom color="#ddd">
            {brand_name}
          </Typography>
          <Typography variant="h5" >
            ${price}
          </Typography>
        </CardContent>
        </Paper>
        <CardContent>
           <Paper sx={{display:'flex', justifyContent: 'space-between', boxShadow:0,color:'#fff',background:'#333'}}>
               <Typography variant="p">
            Location: {address?.city}, {address?.state}
           </Typography>
           <Typography variant="p">
           Date: {date.slice(0,10)}
           </Typography>
           </Paper>
           <Typography  varient='h6' sx={{marginTop:'10px'}}>
               {discription}
           </Typography>
        </CardContent>
      
      
        </div>
    </Card>
    );
};

export default SingleProduct;