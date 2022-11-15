import React from 'react';
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const tabContentStyle = {
    padding: 16,
};

function TabContainer({value }) {
    return (
        <AppBar position='static'>
            <Tabs value={value}>
                <Tab label='Item One' componet={Link} to='/' />
                <Tab label='Item Two' componet={Link} to='/page2' />
                <Tab label='Item Third' componet={Link} to='/page3' />
            </Tabs>
        </AppBar>
    );
}

export default function App() {
    return (
        <Router>
            <Route
                exact
                path='/'
                render={() => (
                    <>
                    <TabContainer value={0}/>
                    <Typography component='div' style={tabContentStyle}>
                    Item One
                    </Typography>
                    </>
                )}
            />
            <Route
                exact
                path='/page2'
                render={() => (
                    <>
                    <TabContainer value={1}/>
                    <Typography component='div' style={tabContentStyle}>
                    Item Two
                    </Typography>
                    </>
                )}
            />
            <Route
                exact
                path='/page3'
                render={() => (
                    <>
                    <TabContainer value={2}/>
                    <Typography component='div' style={tabContentStyle}>
                    Item Three
                    </Typography>
                    </>
                )}
            />
        </Router>
    );
    
}
