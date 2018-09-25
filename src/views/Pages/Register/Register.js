import React, { Component } from 'react';
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import Header from '../../../components/Header/Header';

class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      section: 1
    }
  }

  render() {
    return (
      <React.Fragment>
      <Header />
      <div className="app flex-row align-items-center" style={{paddingTop: '16em'}}>
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-heart"/>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Your Name" autoComplete="name" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"/>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Username" autoComplete="username" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Email" autoComplete="email" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"/>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Password" autoComplete="new-password" />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"/>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Repeat password" autoComplete="new-password" />
                    </InputGroup>
                    <p className="text-muted">Company's Profile</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-heart"/>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Name" autoComplete="name" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-home"/>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Address" autoComplete="address" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-phone"/>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Phone Number" autoComplete="phone-number" />
                    </InputGroup>
                    <p className="text-muted">Enter your device code</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-camrecorder"/>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Device Code" autoComplete="name" />
                    </InputGroup>
                    <Button color="success" block>Create Account</Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      </React.Fragment>
    );
  }
}

export default Register;
