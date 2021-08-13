import React, {Component} from 'react';
import banner12 from '../../assets/img/banner2.jpg';
class BannerItem extends Component {
    render() {
        return (
            <div className="Item banner-item">
                <div className="itemCard-photo">
                    <img src={banner12}/>
                </div>
            </div>
        );
    }
}

BannerItem.propTypes = {};

export default BannerItem;