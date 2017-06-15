import React from 'react';
import Home from '../components/Home';
import {connect} from 'react-redux';

const mapStateToProps = (state)=> {
    return {
        goods: state.goods.goods
    }
};

const mapDispatchToProps = (dispatch)=> {
    return {
        getAllGoods: () => {
            dispatch({type: "GET_ALL_GOODS"})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);