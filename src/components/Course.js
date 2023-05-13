import React from 'react';

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container
} from "reactstrap";

const Course=()=>{
    return (
        <Card>
            <CardBody>
                <CardSubtitle>
                    Java Course
                </CardSubtitle>
                <CardText>It is a Java Course for Learners</CardText>
                <Container>
                <Button>Delete</Button>
                    <Button>Update</Button>
                </Container>
            </CardBody>
        </Card>
    )
}

export default Course;
