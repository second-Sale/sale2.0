import React from 'react'

class Footer extends React.Component{
    render(){
        return <div className="footerStyle">
            <div>
                <div className="footer">
                    <span className="footer1">关于我们</span>
                    <span className="footer2">售后服务</span>
                    <span className="footer3">业务合作</span>
                    <span className="footer4">联系我们</span>
                </div>
                <div className="foot">
                    <span className="footer5">联系方式：15632896542</span>
                    <span className="footer6">qq：254782639</span>
                    <span className="footer7">公众号：second-sale</span>
                </div>
            </div>
        </div>
    }
}

export default Footer;