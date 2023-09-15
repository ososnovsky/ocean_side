export default function Carousel() {
    return (
        <div id="carouselExampleAutoplaying" className="carousel slide shadow rounded mb-2" data-bs-ride="carousel">
            <div className="carousel-inner rounded">
                <div className="carousel-item active">
                    <img src="./src/images/photo1.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="./src/images/photo2.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="./src/images/photo15.jpeg" className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}







