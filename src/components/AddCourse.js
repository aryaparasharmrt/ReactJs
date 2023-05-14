import React, { Fragment } from "react";
import { Button, Form, FormGroup,Input } from "reactstrap";


const AddCourse=()=>{

    return (
        <Fragment>
            <Form>
                <FormGroup>
                    <label for="title"> Course Title</label>
                    <Input type="test"
                    placeholder="Enter Title here" id="title"></Input>
                </FormGroup>
                <FormGroup>
                    <label for="description">Course Description</label>
                    <Input 
                        type="textarea"
                        placeholder="Enter description here"
                        id="description"
                        style={{height:150}}
                    />
                </FormGroup>
                <FormGroup className="text-center">
                    <Button color="success">Add Course</Button>
                    <Button color="warning">Clear</Button>
                </FormGroup>

            </Form>
        </Fragment>
    )
}

export default AddCourse;