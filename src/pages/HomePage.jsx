
import Carousel from "../Carousel";
import Description from "../Description";

export default function HomePage() {
    return (
        <>
            <div className="row rounded">
                <div className="">
                    <Carousel />
                </div>
                <div className="">
                    <Description />
                </div>
            </div>
        </>


    )
}