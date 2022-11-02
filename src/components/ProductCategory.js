import '../styles/productCategory.css'

const ProductCategory = (props) => {
    return (
        <div className="col-lg-4 m-0 p-0 d-flex justify-content-center align-items-center"
        style={{background: 'url' + '(' + props.image + ')', backgroundSize: 'cover',height:'60vh' }}>
            <div className="imageOverlay d-flex justify-content-center align-items-center">
                <h1>{props.categoryName}</h1>
            </div>
        </div>
      );
}
 
export default ProductCategory;