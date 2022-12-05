import '../styles/Information.css'
import bannerImage from "../Kuvat/Sivustokuvat/InformationBanner.jpg"
import carouselImage1 from "../Kuvat/Sivustokuvat/carouselPicture1.png"
import carouselImage2 from "../Kuvat/Sivustokuvat/carouselPicture2.jpg"

const Information = () => {
    return (
        <div id="Information">

            <div className="col-lg-12 d-lg-block">
                <img src={bannerImage} alt="" />
            </div>

                <div class="row">
                    <div class="col-6 m-0 p-0">
                        <p className='addTextLeft .d-none .d-sm-block'>30 päivän palautusoikeus</p>
                    </div>
                    <div class="col-6 m-0 p-0">
                        <p className='addTextRight .d-none .d-sm-block'>Ilmainen toimitus ja palautus</p>
                    </div>
                </div>

            <div className="col-12">
                <h2>Tietoa meistä</h2>
            </div>

            <div className='col-12'>
            </div>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={carouselImage1} class="d-block w-100" alt="" />
                                <div class="carousel-caption d-block">
                                    <h5>Keitä olemme?</h5>
                                    <p>Olemme suomalainen yritys joka myy jalkineita urheilusta oloiluun.</p>
                                </div>
                        </div>
                        <div className="carousel-item">
                            <img src={carouselImage2} class="d-block w-100" alt="" />
                                <div className="carousel-caption d-block">
                                    <h5>Mikä on meidän tavoitteemme?</h5>
                                    <p>Tehtävänämme on taata laadukkaiden jalkineiden saatavuus edullisilla hinnoilla.</p>
                                </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>


        </div>
    );
}

export default Information;