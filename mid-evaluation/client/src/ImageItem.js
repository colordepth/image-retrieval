import './ImageItem.css';

export default function ImageItem({ src, key }) {
    return(
        <div className='ImageItem'>
            <img src={src} key={key} />
        </div>
    );
}