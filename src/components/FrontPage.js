import '../styles/frontpage.css'
import AdvertisementBanner from './AdvertisementBanner'
import ProductCategory from './ProductCategory'

import kavelyImage from '../Kuvat/Sivustokuvat/KengätArtboard2.jpg'
import koripalloImage from '../Kuvat/Sivustokuvat/KengätArtboard3.jpg'
import skeittiImage from '../Kuvat/Sivustokuvat/KengätArtboard4.jpg'

const FrontPage = () => {
    return (
        <div className="container-fluid frontpage-container">
            <div className="row mx-0 my-1">
                <div className="cover p-0 col-lg-12">
                </div>
            </div>
            <div className="row mx-0 my-1">
                <AdvertisementBanner />
            </div>
            <div className="row mx-0 my-1 flex-lg-nowrap">
                <ProductCategory image={kavelyImage} categoryName={"Kävelykengät"}/>
                <ProductCategory image={koripalloImage} categoryName={"Koripallokengät"} />
                <ProductCategory image={skeittiImage} categoryName={"Skeittikengät"} />
            </div>
        </div>
    );
}
 
export default FrontPage;