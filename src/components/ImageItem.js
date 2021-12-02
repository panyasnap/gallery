import {useState} from "react";


const ImageItem = (props) => {
    const [comments, setComments] = useState('');


    const sendComment = () => {
        if (comments) {
            setComments('')
            props.setPrintComment([...props.printComment, comments])

        }
    }

    return (
        <div className='container-fluid image-item__background modal__img ' onClick={props.toggleImg}>
            <div className='row image-image__background col-7' onClick={e => e.stopPropagation()}>
                <div className='col-6 mt-3'>
                    <img className='col-12' src={props.imagesItem} alt='img'/>
                    <div className='float-end ml-3'>
                        <div onClick={props.changeLike}
                             className={!props.favorite ? 'heart mr-2' : 'heart__like mr-2'}/>
                    </div>
                    <div className='mt-3'>
                        <button onClick={() => props.changeImg(-1)} className='btn btn-dark pr-3'>prev</button>
                        <button onClick={() => props.changeImg(1)} className='btn btn-dark pl-2'>next</button>
                    </div>
                </div>
                <div className='col-6'>
                    <form className='form-group mt-3'><textarea type='reset'
                                                                className='form-control  col-6' rows="3"
                                                                placeholder='Ваш комментарий...'
                                                                onChange={e => setComments(e.target.value)}
                                                                value={comments}/></form>
                    <div className='d-flex flex-row-reverse'>
                        <button onClick={sendComment} className='btn btn-dark mr-1 mt-2 text-end'>send</button>
                    </div>
                    <div className=''> {props.printComment ? props.printComment.map((item, index) => <div
                        className={props.printComment === [] ? 'd-block mt-3' : 'comment d-block mt-3'}
                        key={index}>{item}</div>) : null}</div>


                </div>
            </div>
        </div>
    );
};


export default ImageItem;