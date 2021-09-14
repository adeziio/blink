import React, { Component } from 'react';
import { Menu, Header, Icon, Popup, Button } from 'semantic-ui-react';
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
                size="large"
                secondary
                inverted
                color="pink"
                // widths={3} 
                className="navbar-container"
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
                >
                    Jennie
                </Menu.Item>
                <Menu.Item
                    as={Link}
                    to='/jisoo'
                    name='/jisoo'
                    active={activeItem === '/jisoo'}
                    onClick={this.handleItemClick}
                >
                    Jisoo
                </Menu.Item>
                <Menu.Item
                    as={Link}
                    to='/rose'
                    name='/rose'
                    active={activeItem === '/rose'}
                    onClick={this.handleItemClick}
                >
                    Rosé
                </Menu.Item>
                <Menu.Item
                    as={Link}
                    to='/lisa'
                    name='/lisa'
                    active={activeItem === '/lisa'}
                    onClick={this.handleItemClick}
                >
                    Lisa
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Popup
                            content='This is a personal fan page created because I love BLACKPINK (girl group by YG Entertainment). No copyright infringement is ever intended. Any articles, photos, videos, or audio clips used on the site are copyrighted to their respective owners. Copyright to photographs are owned by the respective photographers. If they want to see any photographs on this website removed, please contact adeziio@yahoo.com, specify which ones and give me time to remove them before taking any further action. I do not claim ownership of any materials displayed on this website.'
                            trigger={<Button className="disclaimer" icon='exclamation triangle' />}
                        />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}