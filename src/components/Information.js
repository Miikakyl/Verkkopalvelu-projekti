import '../styles/Information.css'

const Information = (props) => {
    return (
        <div id="Information">

            <div className="col-12 ">
            <img src={props.banner} alt=""/>
            </div>

            <div className="col-12">
                <p>30 päivän palautusoikeus</p>
                <p>Ilmainen toimitus ja palautus</p>
            </div>

            <div className="col-12">
                <h1>{props.bannerHeader}</h1>
            </div>


            <div className='col-12'>
            </div>

            <div className="container-fluid information">
                <div className="col-xs-12 col-md-12 col-xl-12">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={props.carousel1} className="d-block w-100" alt="" />
                                <div className="carousel-caption d-block">
                                    <h5>Keitä olemme?</h5>
                                    <p>Olemme suomalainen yritys joka myy jalkineita urheilusta oloiluun.</p>
                                </div>
                        </div>
                        <div className="carousel-item">
                            <img src={props.carousel2} className="d-block w-100" alt="" />
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
                </div>
        </div>
    );
}

export default Information;