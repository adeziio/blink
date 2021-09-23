import React, { Component } from 'react';
import './Rose.css'
import { Grid, Image } from 'semantic-ui-react';
import rose1 from "./../../img/rose/rose1.gif";
import rose2 from "./../../img/rose/rose2.gif";
import rose3 from "./../../img/rose/rose3.gif";
import rose4 from "./../../img/rose/rose4.gif";
import rose5 from "./../../img/rose/rose5.gif";
import rose6 from "./../../img/rose/rose6.gif";
import rose7 from "./../../img/rose/rose7.gif";
import rose8 from "./../../img/rose/rose8.gif";
import rose9 from "./../../img/rose/rose9.gif";
import rose10 from "./../../img/rose/rose10.gif";

export default class Rose extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount = () => {
        document.title = "Rosé";
    }

    render() {
        return (
            <div className="container">
                <h4 className="title">Rosé 로제 / Rosie / Park Chaeyoung 박채영</h4>
                <Grid centered stackable>
                    <Grid.Row columns={5}>
                        <Grid.Column>
                            <Image src={rose1} size='large' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={rose2} size='large' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={rose3} size='large' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={rose4} size='large' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={rose5} size='large' />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={5}>
                        <Grid.Column>
                            <Image src={rose6} size='large' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={rose7} size='large' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={rose8} size='large' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={rose9} size='large' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={rose10} size='large' />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}
