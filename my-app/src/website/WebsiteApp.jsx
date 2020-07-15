import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer';
import Body from './Body';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CronoApp from '../crono/CronoApp';
import SnakeApp from '../snake/SnakeApp';
import SiteApp from '../firstSite/SiteApp';
import TemperatureApp from '../temperatureExcercise/TemperatureApp';

export default class WebsiteApp extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar/>
                    <Switch>
                        <Route path="/" exact component={Body}/>
                        <Route path="/chrono" component={CronoApp}/>
                        <Route path="/snake" component={SnakeApp}/>
                        <Route path="/termo" component={TemperatureApp}/>   
                        <Route path="/siteApp" component={SiteApp}/>        
                    </Switch>
                    <Footer/>
                </div>
            </Router>
        )
    }
}
