import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import FaBeer from 'react-icons/lib/fa/beer';
import logo from './logo.svg';
import styles from './App.css';
import { getUserData } from './reducers/app.js';

const cx = classNames.bind(styles);

class App extends Component {
    render() {
        const { user, getUserData } = this.props;

        return (
            <div className={cx('app')}>
                <div className={cx('app-header')}>
                    <img
                        src={logo}
                        className={cx('app-logo')}
                        alt="logo"
                        onClick={()=>{getUserData('Taiwan');}}
                    />
                    <h2> Welcome to {user.get('name')} </h2>
                    <FaBeer />
                </div>
                <p className={cx('app-intro')}>
                    To get started, edit <code> src / App.js </code> and save to reload.
                </p>
            </div>
        );
    }
}

export default connect((state) => ({
    user: state.app.get('user')
}), {
    getUserData
})(App);
