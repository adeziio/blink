import React, { Component } from 'react';
import { Menu, Header, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
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
            <Menu
                size="massive"
                secondary
                inverted
                className="navbar-container"
                stackable
            >
                <Menu.Item>
                    <Header as='h2' inverted color="white">
                        <Icon name='heart outline' />
                        <Header.Content>
                            BLIИK 블링크
                            <Header.Subheader>BLΛƆKPIИK 블랙핑크</Header.Subheader>
                        </Header.Content>
                    </Header>
                </Menu.Item>
                <Menu.Item
                    as={Link}
                    to='/jennie'
                    name='/jennie'
                    active={activeItem === '/jennie'}
                    onClick={this.handleItemClick}
                    className="navbar-item"
                >
                    Jennie
                </Menu.Item>
                <Menu.Item
                    as={Link}
                    to='/jisoo'
                    name='/jisoo'
                    active={activeItem === '/jisoo'}
                    onClick={this.handleItemClick}
                    className="navbar-item"
                >
                    Jisoo
                </Menu.Item>
                <Menu.Item
                    as={Link}
                    to='/rose'
                    name='/rose'
                    active={activeItem === '/rose'}
                    onClick={this.handleItemClick}
                    className="navbar-item"
                >
                    Rosé
                </Menu.Item>
                <Menu.Item
                    as={Link}
                    to='/lisa'
                    name='/lisa'
                    active={activeItem === '/lisa'}
                    onClick={this.handleItemClick}
                    className="navbar-item"
                >
                    Lisa
                </Menu.Item>
            </Menu>
        )
    }
}