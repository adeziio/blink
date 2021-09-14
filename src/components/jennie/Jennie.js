import React, { Component } from 'react';
import './Jennie.css'
import { Grid, Image } from 'semantic-ui-react';
import jennie_1 from "./../../img/jennie/jennie_1.jpg"

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
            <div>
                <h4>Jennie Kim 김제니 </h4>
                <Grid centered stackable>
                    <Grid.Row columns={5}>
                        <Grid.Column>
                            <Image src={jennie_1} />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={jennie_1} />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={jennie_1} />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={jennie_1} />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={jennie_1} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={5}>
                        <Grid.Column>
                            <Image src={jennie_1} />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={jennie_1} />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={jennie_1} />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={jennie_1} />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={jennie_1} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}
