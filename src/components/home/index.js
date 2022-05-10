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
                        <FilterComponent></FilterComponent>
                </Row>
                <Row>
                    <Col>
                        <PortfolioComponent></PortfolioComponent>
                    </Col>
                    <Col xs={3}>
                        <SearchcontainerComponent></SearchcontainerComponent>
                    </Col>
                </Row>
            </Container>
        </>
    )
};