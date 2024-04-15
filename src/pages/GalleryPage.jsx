import Image1 from '../images/photo1.jpg';
import Image2 from '../images/photo2.jpg';
import Image3 from '../images/photo3.jpg';
import Image4 from '../images/photo4.jpg';
import Image5 from '../images/photo5.jpeg';
import Image6 from '../images/photo6.jpeg';
import Image7 from '../images/photo7.jpeg';
import Image8 from '../images/photo8.jpeg';
import Image9 from '../images/photo9.jpeg';
import Image10 from '../images/photo10.jpeg';
import Image11 from '../images/photo11.jpeg';
import Image12 from '../images/photo12.jpeg';
import Image14 from '../images/photo14.jpeg';
import Image15 from '../images/photo15.jpeg';
import Image16 from '../images/photo16.jpeg';
import Image17 from '../images/photo17.jpeg';
import Image18 from '../images/photo18.jpeg';
import Image19 from '../images/photo19.jpeg';
import Image20 from '../images/photo20.jpeg';
import Image21 from '../images/photo21.jpeg';
import Image22 from '../images/photo22.jpeg';
import Image23 from '../images/photo23.jpeg';
import Image24 from '../images/photo24.jpeg';
import Image25 from '../images/photo25.jpeg';
import Image26 from '../images/photo26.jpeg';
import Image27 from '../images/photo27.jpeg';
import Image28 from '../images/photo28.jpeg';
import Image29 from '../images/photo29.jpeg';
import Image30 from '../images/photo30.jpeg';
import Image31 from '../images/photo31.jpeg';
import Image32 from '../images/photo32.jpeg';
import Image33 from '../images/photo33.jpeg';
import Image34 from '../images/photo34.jpeg';
import Image35 from '../images/photo35.jpeg';
import Image37 from '../images/photo37.jpeg';
import Image38 from '../images/photo38.jpeg';

function GalleryPage() {
    const images = [Image18, Image16, Image4, Image3, Image5, Image6, Image7, Image8,
        Image9, Image10, Image11, Image12, Image14, Image15,
        Image17, Image19, Image20, Image21, Image22, Image23, Image24,
        Image25, Image26, Image27, Image28, Image29, Image30, Image31, Image32,
        Image33, Image34, Image35, Image37, Image38, Image1, Image2];

    return (
        <div className="gallery row rounded">
            {images.map((image, index) => (
                <div className="col-md-6 col-lg-4 rounded" key={index}>
                    <img className="img-fluid mt-3 rounded" key={index} src={image} alt={`Image ${index}`} />
                </div>
            ))}
        </div>
    );
}

export default GalleryPage;