import AOS from 'aos';
import 'aos/dist/aos.css';




function GoodItem(props) {
    const { id, name, image, description, price, releaseDate, addToBacket } = props


    AOS.init();
    return (
        <div>
            <div className="card" data-aos="zoom-out-up">
                <img src={image} className="card-img-top w-100" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name.slice(0, 15)}...</h5>
                    <p className="card-text">{description.slice(0, 15)}...</p>
                    <span className="price"><b>$</b>{price}</span>
                    <hr />
                    <span className="">{releaseDate}</span>
                    <button className="btn btn-primary w-100 mt-2" onClick={() => addToBacket({id, name, price})}>Buy Now</button>
                </div>
            </div>
        </div>
        
    );
}

export default GoodItem;