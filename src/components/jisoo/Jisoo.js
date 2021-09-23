import React, { Component } from 'react';
import './Jisoo.css'
import { Grid, Image } from 'semantic-ui-react';
import jisoo1 from "./../../img/jisoo/jisoo1.gif";
import jisoo2 from "./../../img/jisoo/jisoo2.gif";
import jisoo3 from "./../../img/jisoo/jisoo3.gif";
import jisoo4 from "./../../img/jisoo/jisoo4.gif";
import jisoo5 from "./../../img/jisoo/jisoo5.gif";
import jisoo6 from "./../../img/jisoo/jisoo6.gif";
import jisoo7 from "./../../img/jisoo/jisoo7.gif";
import jisoo8 from "./../../img/jisoo/jisoo8.gif";
import jisoo9 from "./../../img/jisoo/jisoo9.gif";
import jisoo10 from "./../../img/jisoo/jisoo10.gif";

export default class Jisoo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount = () => {
        document.title = "Jisoo";
    }

    render() {
        return (
            <div className="container">
                <h4 className="title">Jisoo Kim 김지수 / Jichuu / Jisoo Turtle Rabbit Kim</h4>
                <Grid centered stackable>
                    <Grid.Row columns={5}>
                        <Grid.Column>
                            <Image src={jisoo1} size='large' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={jisoo2} size='large' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={jisoo3} size='large' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={jisoo4} size='large' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={jisoo5} size='large' />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={5}>
                        <Grid.Column>
                            <Image src={jisoo6} size='large' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={jisoo7} size='large' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={jisoo8} size='large' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={jisoo9} size='large' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={jisoo10} size='large' />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}
