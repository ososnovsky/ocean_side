export default function Carousel() {
    return (
        <div id="carouselExampleAutoplaying" className="carousel slide shadow rounded mb-2" data-bs-ride="carousel">
            <div className="carousel-inner rounded">
                <div className="carousel-item active">
                    <img src="./assets/praia.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="./assets/photo2-ba7fa2eb.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="./assets/photo15-0bfa798e.jpeg" className="d-block w-100" alt="..." />
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







