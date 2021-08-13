import React, {Component} from 'react';
import './item.css';
import banner12 from '../../assets/img/banner2.jpg';
class Item extends Component {
    render() {
        return (
            <div className="Item">
                <div className="itemCard-photo">
                    <img src={banner12} alt=""/>
                </div>
                <div className="itemCard-descr">Профессиональная лампа UV/LED Pro 6 48 Вт белая ParisNail</div>
                <div className="itemCard-price"><span className="leftSide">Цена</span><span className="rightSide">9 900 ₽</span></div>
                <div className="btn_wrap">
                    <button className="cart-btn">В корзину</button>
                </div>

                <div className="itemCardTop">
                    <img src="/src/assets/img/new.svg" className="new" alt="new"/>
                    <img src="/src/assets/img/top.svg" className="top" alt="top"/>
                    <img src="/src/assets/img/heart.svg" className="like" alt="like"/>
                </div>

            </div>
        );
    }
}

Item.propTypes = {};

export default Item;