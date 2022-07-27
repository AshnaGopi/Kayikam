import {Carousel} from "react-bootstrap";
import Img from "./Image";
import "../CertApp.css";

export default function Slideshow(props) {
    return (

            <Carousel variant={"dark"}

                      className={"carousel border border-2 border-dark"}>

                {props.images.map(imagedata =>
                    <Carousel.Item>
                        <Img data={imagedata} />
                    </Carousel.Item>)}

            </Carousel>
    )
}