import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FilterComponent from '../filter';
import SearchcontainerComponent from '../searchcontainer';
import DeckComponent from '../deck';
import CardViewComponent from '../cardview';
import AppContext from '../../provider';

export default function HomeComponent() {
    return (
        <>
            <AppContext>
                <Container>
                    <Row>
                        <FilterComponent ></FilterComponent>
                    </Row>
                    <Row>
                        <Col xs={3}>
                            <CardViewComponent>
                            </CardViewComponent>
                        </Col>
                        <Col xs={6}>
                            <DeckComponent>
                            </DeckComponent>
                        </Col>
                        <Col xs={3}>
                            <SearchcontainerComponent></SearchcontainerComponent>
                        </Col>
                    </Row>
                </Container>
            </AppContext>
        </>
    )
};