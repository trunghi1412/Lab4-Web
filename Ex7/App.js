
import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import First from './components/First'
import Second from './components/Second'
import Third from './components/Third'





export default function App({links}) {
    const [open, setOpen] = useState(false);

    function toggleDrawer({ type, key}) {
        if (type === 'keydown' && (key ==='Tab' || key ==='Shift')) {
            return;
        }
    
    setOpen(!open);
    }
    
    return (
        <Router>
            <Button onClick={toggleDrawer}>Open Nav</Button>
            <section>
                <Route path='/first' component={First} />
                <Route path='/second' component={Second} />
                <Route path='/third' component={Third} />

            </section>
            <Drawer open={open} onClose={toggleDrawer}>
                <div 
                  style={{width: 250}}
                  role='presentation'
                  onClick={toggleDrawer}
                  oneKeyDown={toggleDrawer}
                >
                  <List>
                    {links.map((link) => (
                        <ListItem button key={link.url} components={Link} to={Link.url}>
                            <Switch>
                                <Route 
                                    exact
                                    path={link.url}
                                    render={() => (
                                        <ListItemText
                                                primary={link.name}
                                                primaryTypographyProps={{color: 'primary'}}
                                                />
                                            )}
                                        />
                                        <Route
                                        path="/"
                                        render={() => <ListItemText primary={link.name} />}
                                        />
                                  
                            </Switch>
                        </ListItem> 
                    ))}
                    </List>  
                </div>
            </Drawer>
        </Router>
    )
}

App.defaultProps = {
    links: [
        {url: '/first', name:'First Page'},
        {url: '/second', name:'Second Page'},
        {url: '/Third', name:'Third Page'},

    ],
};
