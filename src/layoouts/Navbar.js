import React, { Component } from 'react';
import Toolbar from './Toolbar';
import SideDrawer from './SideDrawer';
import Backdrop from './NavBar/components/Backdrop/Backdrop'



class App extends Component {
    state = {
        sideDrawerOpen: false
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen };
        });
    };

    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false })
    }

    drawerAfterClickDrop = () => {
        this.setState({ sideDrawerOpen: false })
    }

    render() {
        let backdrop;
        let sidedrop;

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />

        }


        return (
            <div style={{ height: "100 %" }}>

                <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} />

                {backdrop}
                {sidedrop}
            </div>
        );
    }
}

export default App;
