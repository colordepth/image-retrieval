import './Home.css';
import data from './data.json';
import ImageItem from './ImageItem';

export default function Home() {
    const images = data;

    return(
        <div className="Home">
            <header className="Navbar">
                Navbar
            </header>
            <div className='Content'>
                Recommended for you
                <div className='ImageGrid'>
                    { images.map((image, key) => 
                        <ImageItem src={image.src} key={key} />
                    ) }
                </div>
            </div>
        </div>
    );
}
