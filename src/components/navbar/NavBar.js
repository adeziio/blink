import React, { Component } from 'react';
import { Header, Icon } from 'semantic-ui-react';
import { Navbar, Nav } from 'react-bootstrap';
import './NavBar.css';


export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: window.location.pathname,
            paths: ["/jennie", "/jisoo", "/rose", "/lisa"]
        }
    }

    handleItemClick = (e, { name }) => {
        this.setState({
            activeItem: name
        })
    }

    render() {
        let { paths, activeItem } = this.state;
        activeItem = paths.some((item) => item === activeItem) ? activeItem : "/jennie";

        return (
            <>
                <Navbar className="navbar-container" expand="lg" >
                    <Navbar.Brand href="/jennie">
                        <Header as='h2' inverted color="white">
                            <Icon name='heart outline' />
                            <Header.Content>
                                BLIИK 블링크
                                <Header.Subheader>BLΛƆKPIИK 블랙핑크</Header.Subheader>
                            </Header.Content>
                        </Header>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="navbar-item">
                            <Nav.Link href="/jennie" className={`navbar-item ${activeItem === "/jennie" ? "active" : ""}`}>
                                Jennie
                            </Nav.Link>
                            <Nav.Link href="/jisoo" className={`navbar-item ${activeItem === "/jisoo" ? "active" : ""}`}>
                                Jisoo
                            </Nav.Link>
                            <Nav.Link href="/rose" className={`navbar-item ${activeItem === "/rose" ? "active" : ""}`}>
                                Rosé
                            </Nav.Link>
                            <Nav.Link href="/lisa" className={`navbar-item ${activeItem === "/lisa" ? "active" : ""}`}>
                                Lisa
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Navbar>
            </>
        )
    }
}