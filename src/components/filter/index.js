import React, { useRef } from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";
import { Col, Row, FormGroup, InputGroup, FormControl } from "react-bootstrap";

export default function FilterComponent({ searchTextFilter }) {

    const searchInputEvent = () => {
        console.log(searchInput.current.value);
        searchTextFilter(searchInput.current.value);
    }

    const searchInput = useRef();
    return (
        <>
            <Row className="filterform">
                <Col>
                    {/* <Form>
                        <Form.Group className="mb-1" id="filtro">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" id="txt_listname"/>
                            <Form.Text className="text-muted">
                                puede ser una carpeta, una lista o un deck.
                            </Form.Text>
                        </Form.Group>

                        <Button  variant="primary" type="submit" id="btn_new">
                            Crear
                        </Button>
                        <Button  variant="danger" id="btn_delete">
                            Borrar
                        </Button>
                        <FormGroup className="mb-1">
                            <Form.Select size="sm" aria-label="Categoria" id="categoria">
                                <option>categoria de la carta</option>
                                <option value="1">spell</option>
                                <option value="2">tramp</option>
                                <option value="3">monster</option>
                            </Form.Select>
                        </FormGroup>
                        <FormGroup className="mb-1">
                            <Form.Select size="sm" aria-label="Tipo" id="tipo">
                                <option>tipo de la carta</option>
                                <option value="1">tipo 1</option>
                                <option value="2">tipo 2</option>
                                <option value="3">tipo 3</option>
                            </Form.Select>
                        </FormGroup>
                        <FormGroup className="mb-1">
                            <Form.Select size="sm" aria-label="Atributo" id="atributo">
                                <option>atributo de la carta</option>
                                <option value="1">atributo 1</option>
                                <option value="2">atributo 2</option>
                                <option value="3">atributo 3</option>
                            </Form.Select>
                        </FormGroup>
                    </Form> */}
                </Col>
                <Col>
                    <Form>
                        <Form.Group className="mb-1" id="control">
                            <Form.Label>Buscar</Form.Label>
                            <InputGroup className="mb-3" id="txt_search">
                                <FormControl
                                    placeholder="Ingrese el nombre de la carta"
                                    aria-describedby="basic-addon2"
                                    onKeyUp={searchInputEvent}
                                    ref={searchInput}
                                />
                                <Button variant="outline-secondary" id="btn_search">
                                    Buscar
                                </Button>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group>
                            <Button variant="primary" id="btn_sort">
                                Ordenar
                            </Button>
                            <Button variant="primary" id="btn_clear">
                                Limpiar
                            </Button>
                        </Form.Group>
                        <Form.Group>
                            <Button variant="primary" id="btn_next">
                                Siguiente
                            </Button>
                            <Button variant="primary" id="btn_before">
                                Posterior
                            </Button>
                        </Form.Group>
                        <Form.Group>
                            <Button variant="primary" id="btn_add">
                                Agregar
                            </Button>
                            <Button variant="primary" id="btn_less">
                                Quitar
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </>
    )
};