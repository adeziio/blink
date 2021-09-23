import React, { Component } from 'react';
import './Lisa.css'
import { Grid, Image } from 'semantic-ui-react';
import lisa1 from "./../../img/lisa/lisa1.gif";
import lisa2 from "./../../img/lisa/lisa2.gif";
import lisa3 from "./../../img/lisa/lisa3.gif";
import lisa4 from "./../../img/lisa/lisa4.gif";
import lisa5 from "./../../img/lisa/lisa5.gif";
import lisa6 from "./../../img/lisa/lisa6.gif";
import lisa7 from "./../../img/lisa/lisa7.gif";
import lisa8 from "./../../img/lisa/lisa8.gif";
import lisa9 from "./../../img/lisa/lisa9.gif";
import lisa10 from "./../../img/lisa/lisa10.gif";

export default class Lisa extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount = () => {
        document.title = "Lisa";
    }

    render() {
        return (
            <div className="container">
                <h4 className="title">Lisa / Lalisa / Dance Machine</h4>
                <Grid centered stackable>
                    <Grid.Row columns={5}>
                        <Grid.Column>
                            <Image src={lisa1} size='large' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={lisa2} size='large' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={lisa3} size='large' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={lisa4} size='large' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={lisa5} size='large' />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={5}>
                        <Grid.Column>
                            <Image src={lisa6} size='large' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={lisa7} size='large' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={lisa8} size='large' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={lisa9} size='large' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={lisa10} size='large' />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}
