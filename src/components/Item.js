import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showItem } from '../actions/itemActions';
import './styles/Item.css';


class Item extends Component {

    componentDidMount() {
        this.props.showItem(this.props.match.params.id);
    }

    render() {
        // console.log(this.props);
        // const { genres, backgroundImage } = this.props;
        // let date = this.props.date;
        // console.log(date);
        // console.log(genres)
        return (
            <>
                {/* <div style={{backgroundImage: `url(${this.props.backgroundImage})`}} className="cardItem"> */}
                <div style={{backgroundImage: `url(${this.props.backgroundImage})`}} className="cardItem">
                    <h3 className="cardItem__title">{ this.props.title }</h3>
                    <div className="cardItem__content__container">
                        <img className="imageItem" src={ this.props.imageLarge } alt={ this.props.imageLargeAlt }/>
                        <div className="cardItem__content">
                            <p className="item__title">{ this.props.originalTitle }</p>
                            <span>{ this.props.country }</span>
                            
                            <span className="bolder">{ this.props.date }</span>
                            <span className="bolder">{ this.props.duration }</span>
                            <span className="black bolder">{ this.props.language }</span>
                            <span className="black bolder">{ this.props.code }</span>
                            <div className="item__genre__container">
                            {
                                this.props.genres.map((genre, index) => {
                                    return (
                                        <span key={index} className="item__genre">
                                            {genre.desc}
                                        </span>
                                    )
                                })
                            }
                            </div>
                            <p>{ this.props.largeDescription }</p>
                            <div className="ranking__container">
                                <i className="fa fa-eye" aria-hidden="true"></i>
                                <p>{ this.props.rankingViews }</p>
                                <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                                <p>{ this.props.rankingVotes}</p>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <p>{ this.props.rankingAverage}</p>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({
    backgroundImage: state.item.item.backgroundImage,
    title: state.item.item.title,
    imageLarge: state.item.item.imageLarge,
    imageLargeAlt: state.item.item.imageLargeAlt,
    originalTitle: state.item.item.originalTitle,
    country: state.item.item.country,
    date: state.item.item.date,
    duration: state.item.item.duration,
    language: state.item.item.language,
    code: state.item.item.code,
    genres: state.item.genres,
    largeDescription: state.item.item.largeDescription,
    rankingViews: state.item.item.rankingViews,
    rankingVotes: state.item.item.rankingVotes,
    rankingAverage: state.item.item.rankingAverage
})

export default connect(mapStateToProps, { showItem }) (Item);