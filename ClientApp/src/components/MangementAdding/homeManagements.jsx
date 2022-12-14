import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Card} from "reactstrap";
import {Button, Image} from "react-bootstrap";
import ModalsBank from "./modal";
import TableBank from "./table";


export default function HomeManagements(props) {
    const [editModalShow, seteditModalShow] = useState(false)
    let editModalClose = () => seteditModalShow(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'department', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                DepartmentId: null,
                DepartmentName: event.target.DepartmentName.value
            })
        })
            .then(res => res.json())
            .then((result) => {
                    alert(result);
                },
                (error) => {
                    alert('Failed');
                })
    }





    return (
        <Container fluid="md">
            <Row>
                <Col>
                    <br/>
                    <br/>
                    <Button variant="primary"
                            onClick={()=>seteditModalShow(true)}
                    >add new {props.header} </Button>
                    <Card>
                        <h1>{props.header}</h1>
                        <br/>
                        <h5>{props.subheader}</h5>
                        {/*<Image src={props.subHeaderImage} alt={"no"} width={600} />*/}
                    </Card>


                    <ModalsBank
                        show={editModalShow}
                        header={props.header}
                        handleSubmit={handleSubmit}
                        onHide={editModalClose}
                    />

                </Col>
            </Row>
            <TableBank   data={props.data}/>
        </Container>
    );
}
