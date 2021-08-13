import React, {Component} from 'react';
import './tabsBtns.css';

class TabsBtns extends Component {
    render() {
        return (
            <div className="buttons_wrapper">
                <div className="left-btns">
                    <button className="tab-btn active">Хиты продаж</button>
                    <button className="tab-btn">Новинки</button>
                    <button className="tab-btn">Скидки</button>
                    <button className="tab-btn">Акции</button>
                </div>
                <div className="right-btns">
                    <span className="left-arrow arrow">1</span>
                    <span className="right-arrow arrow">1</span>
                </div>

            </div>
        );
    }
}

TabsBtns.propTypes = {};

export default TabsBtns;