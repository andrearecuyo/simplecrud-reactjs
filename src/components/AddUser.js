import React, { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';
import { GlobalContext } from '../context/GlobalState';
import { v4 as uuid } from 'uuid';

export const AddUser = () => {
    const [name, setName] = useState('');
    const { addUser } = useContext(GlobalContext);
    const history = useHistory();

    const onSubmit = () => {
        const newUser = {
            id: uuid(),
            name: name
        }
        addUser(newUser);
        history.push('/');
    }

    const onChange = (e) => {
        setName(e.target.value);
    }
    return (
        <Form onSubmit={onSubmit}>
            <h4>Add User</h4>
            <FormGroup>
                <Label>Name</Label>
                <Input
                  type="text"
                    value={name}
                    onChange={onChange}
                  placeholder="Enter Name"
                    autoComplete="off"></Input>
            </FormGroup>
            <Button type="submit" className="btn mt-2 mr-2">Submit</Button>
            <Link to="/" className="btn btn-danger mt-2 mx-2">Cancel</Link>
        </Form>
    )
}
