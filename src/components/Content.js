import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showContent, searchItem } from '../actions/contentActions';
import './styles/Content.css';
import { Link } from 'react-router-dom';


class Content extends Component {

    componentDidMount() {
        this.props.showContent();
    }

    render() {
        const { results } = this.props;
        return (
            <>
                <div className="search__container"> 
                    <label>Buscar</label>
                    <input 
                        type="text" 
                        onChange={ this.props.searchItem }
                        name="nameItem"
                        placeholder="¿Qué película deseas?"
                    />
                </div>
                <div className="content__container">
                    {
                        results.map((item, index) => {
                            return (
                                
                                <div key={index} className="card">
                                    <Link to={`/${item.id}`}>
                                        <img src={item.image_small} alt=""></img>
                                    </Link>
                                </div>
                                
                            )
                        })
                    }
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({
    items: state.content.items,
    results: state.content.results
})

export default connect(mapStateToProps, { showContent, searchItem }) (Content);