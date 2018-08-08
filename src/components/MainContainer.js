/**
 * Created by nap on 17/5/15.
 */
import React from 'react';
import { connect } from 'dva';

import l from './MainContainer.less';
import cx from 'classnames';
// import { getDatas } from '../services/common';
import $ from "jquery";

class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    componentDidMount() {
        this.getData()
    }
    getData = () => {
        let self = this;
        $.ajax({
            type: 'get',
            url: "http://animate.wzybnzy.cn/child/data.json",
            dataType: 'json',
            success: function (data) {
                console.log(data);
                setTimeout(() => {
                    self.getData()
                }, 500);
            },
            error: function(error) {
                console.log(error)
            }
        });
    }
    render() {
        return (
            <div className={cx(l.main)}>
               请问如果
            </div>
        );
    }
}

export default connect(state => {
    return {};
})(MainContainer);
