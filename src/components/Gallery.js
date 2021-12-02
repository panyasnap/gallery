import React, {useState} from 'react';
import {images} from "../utils";
import ImageItem from "./ImageItem";


const Gallery = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [imagesItem, setImagesItem] = useState(0);
    const [i, setI] = useState(0);
    const [printComment, setPrintComment] = useState([])

    const [favorite, setFavorite] = useState(false);
    const toggleImg = (index) => {
        setI(index)
        setIsOpen(!isOpen)
        setImagesItem(images[index])
        setFavorite(false)
    }

    const changeImg = (page) => {
        let changedIndex = i + page
        if (i === 0 && page === -1) {
            changedIndex = images.length - 1
        } else if (i === images.length - 1 && page === 1) {
            changedIndex = 0
        }
        setI(changedIndex)
        setImagesItem(images[changedIndex])
        setFavorite(false)
        setPrintComment([])
    }

    const changeLike = () => {
        setFavorite(!favorite)
    }


    return (
        <div className='container'>
            {isOpen ?
                <div className='row'>
                    {images.map((item, index) => <img className='col-3 pb-4 ' onClick={() => toggleImg(index)}
                                                      src={item}
                                                      key={index} alt='img'/>)}
                </div>
                :

                <ImageItem printComment={printComment}
                           setPrintComment={setPrintComment}
                           changeImg={changeImg}
                           toggleImg={toggleImg}
                           changeLike={changeLike}
                           favorite={favorite}
                           imagesItem={imagesItem}/>

            }
        </div>
    );
};
export default Gallery;
