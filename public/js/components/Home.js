import React from "react";
import Nav from '../containers/nav-container'
import Footer from './footer'

class Home extends React.Component {

    componentWillMount() {
        this.props.getAllGoods();
    }

    render() {
        return (
            <div>
                <Nav/>
                <div>
                    {
                        this.props.goods === undefined ? "ssss" : this.props.goods.map((good)=> {
                            document.getElementById("aaa").innerHTML = `${good.goodsName}`;
                            document.getElementById('pre').src = `{good.picture}`;
                        })

                    }
                    <div id="aaa"></div>
                    <img src="" alt="图片" id="pre"/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Home;
