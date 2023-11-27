import { useRef } from "react";
import ItemSlider from "./ItemSlider"
import './Slider.css'

export default function Slider(){
    const ref = useRef(100);
    const items = [
        {
            id: 1,
            imgUrl: "https://picsum.photos/536/354"
        },
        {
            id: 2,
            imgUrl: "https://picsum.photos/536/354"
        },
        {
            id: 3,
            imgUrl: "https://picsum.photos/536/354"
        },
        {
            id: 4,
            imgUrl: "https://picsum.photos/536/354"
        },     {
            id: 5,
            imgUrl: "https://picsum.photos/536/354"
        },
        {
            id: 6,
            imgUrl: "https://picsum.photos/536/354"
        },
        {
            id: 7,
            imgUrl: "https://picsum.photos/536/354"
        },
        {
            id: 8,
            imgUrl: "https://picsum.photos/536/354"
        }
    ]
    return (<div className="slider">
        {items.map((item) => <ItemSlider key={item.id} item = {item}/>)}
    </div>)
}