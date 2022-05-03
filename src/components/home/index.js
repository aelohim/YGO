import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FilterComponent from '../filter';
import SearchcontainerComponent from '../searchcontainer';
import PortfolioComponent from '../portfolio';

export default function HomeComponent() {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <FilterComponent></FilterComponent>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <PortfolioComponent></PortfolioComponent>
                    </Col>
                    <Col>
                        <SearchcontainerComponent></SearchcontainerComponent>
                    </Col>
                </Row>
            </Container>
        </>
    )
};