import '../styles/frontpage.css'
import AdvertisementBanner from './AdvertisementBanner'

const FrontPage = () => {
    return (
        <div className="container-fluid frontpage-container">
            <div className="row">
                <div className="cover">
                </div>
            </div>
            <div className="row">
                <AdvertisementBanner />
            </div>
            <div className="row">
                
            </div>
        </div>
    );
}
 
export default FrontPage;