import React, {Component} from 'react';
import './categories.css';
import img1 from '../../assets/img/categories/categories6.jpg';
import img2 from '../../assets/img/categories/categories7.jpg';
import img3 from '../../assets/img/categories/categories8.jpg';
import img4 from '../../assets/img/categories/categories9.jpg';
import img5 from '../../assets/img/categories/categories10.jpg';
class Categories extends Component {
    render() {
        return (
            <div className="categories">
                <div className="container">
                    <div className="title">
                        <h2>Наши категории</h2>
                    </div>
                    <div className="categories_wrapper">
                        <div className="categorie_item" style={{ backgroundImage: `url(${img1})`}}>
                            <a className="categorie_btn" href="">Оборудование</a>
                        </div>
                        <div className="categorie_item" style={{ backgroundImage: `url(${img2})`}}>
                            <a className="categorie_btn" href="">Пластины</a>
                        </div>
                        <div className="categorie_item" style={{ backgroundImage: `url(${img3})`}}>
                            <a className="categorie_btn" href="">Товары для стемпинга</a>
                        </div>
                        <div className="categorie_item" style={{ backgroundImage: `url(${img4})`}}>
                            <a className="categorie_btn" href="">Расходники</a>
                        </div>
                        <div className="categorie_item" style={{ backgroundImage: `url(${img5})`}}>
                            <a className="categorie_btn" href="">Жидкости</a>
                        </div>
                        {/*<div className="categorie_item" style={{ backgroundImage: `url(${img5})`}}>*/}
                        {/*    <a className="categorie_btn" href="">Дизайны</a>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        );
    }
}

Categories.propTypes = {};

export default Categories;