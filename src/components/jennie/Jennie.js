import React, { Component } from 'react';
import './Jennie.css'
import { Grid, Image } from 'semantic-ui-react';
import jennie1 from "./../../img/jennie/jennie1.gif";
import jennie2 from "./../../img/jennie/jennie2.gif";
import jennie3 from "./../../img/jennie/jennie3.gif";
import jennie4 from "./../../img/jennie/jennie4.gif";
import jennie5 from "./../../img/jennie/jennie5.gif";
import jennie6 from "./../../img/jennie/jennie6.gif";
import jennie7 from "./../../img/jennie/jennie7.gif";
import jennie8 from "./../../img/jennie/jennie8.gif";
import jennie9 from "./../../img/jennie/jennie9.gif";
import jennie10 from "./../../img/jennie/jennie10.gif";

export default class Jennie extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount = () => {
        document.title = "Jennie";
    }

    render() {
        return (
            <div className="container">
                <h4 className="title">Jennie Kim 김제니 </h4>
                <Grid centered stackable>
                    <Grid.Row columns={5}>
                        <Grid.Column>
                            <Image src={jennie1} size='large' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={jennie2} size='large' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={jennie3} size='large' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={jennie4} size='large' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={jennie5} size='large' />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={5}>
                        <Grid.Column>
                            <Image src={jennie6} size='large' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={jennie7} size='large' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={jennie8} size='large' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={jennie9} size='large' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={jennie10} size='large' />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}
