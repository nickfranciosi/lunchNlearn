import React, {Component} from 'react';

// components
import AuthPanel  from './components/authpanel';
import Navigation from './components/Navigation';

class Wrapper extends Component {

    render(){
        return (
            <div className="wrapper">
                {/*<Navigation />*/}
                {this.props.children}
            </div>
        );
    }
}

export default Wrapper;
