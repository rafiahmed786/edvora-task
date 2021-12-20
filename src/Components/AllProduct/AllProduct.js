import SingleProduct from '../SingleProduct/SingleProduct';

const AllProduct = ({displayFiltered }) => {

        const products = Array.from(displayFiltered);
        

    return (
        <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}}>
            {
                products.map(product=> <SingleProduct
                key={product.name}
                product={product}
                ></SingleProduct> )
            }
        </div>
    );
};

export default AllProduct;