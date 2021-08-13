import React, {Component} from 'react';
import OwlCarousel from 'react-owl-carousel';
import '../../assets/css/owl.carousel.css';
import '../../assets/css/owl.theme.default.css';
import Item from "../ItemCard/Item";
import TabsBtns from "./TabsBtns/TabsBtns";

class Slider extends Component {
    render() {
        return (

                <div className="tab_sliders">
                    <div className="container">
                    <div className="tab_slider_top">
                        <TabsBtns />
                        <OwlCarousel className="owl-carousel owl-theme" items={5} dots={0} margin={20}>
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                        </OwlCarousel>
                        <OwlCarousel className="owl-carousel owl-theme" items={5} margin={20}>
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                        </OwlCarousel>
                    </div>

                </div>


            </div>

        );
    }
}

Slider.propTypes = {};

export default Slider;