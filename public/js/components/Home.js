import React from "react";
import Nav from '../containers/nav-container'
import Footer from './footer'

class Home extends React.Component {

    componentWillMount() {
        this.props.getAllGoods();
    }

    componentDidUpdate() {
        this.props.getAllGoods();
    }

    render() {

        const goods = this.props.goods.map((good, index)=> {
            return <div key={index}>
                <div id="boderStyle">
                    <img src={good.picture} alt="图片" id="pre" width="150px" height="150px"/>
                    <div id="descript">
                        <div>名字：{good.goodsName}</div>
                        <div>描述：{good.goodsDescript}</div>
                        <div>价格：{good.goodsPrice}</div>
                        <div>数量：{good.goodsCount}</div>
                        <div>联系方式：{good.goodsContact}</div>
                    </div>
                </div>
                <br/>
            </div>
        });

        return (
            <div>
                <Nav/>
                <div id="goodStyle">
                    {goods}
                </div>
                {/*<Footer/>*/}
            </div>
        );
    }
}

export default Home;
