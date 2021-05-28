import React, { useState, useContext, useEffect} from 'react'
import { Link, useHistory} from 'react-router-dom';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';
import { GlobalContext } from '../context/GlobalState';

export const EditUser = (props) => {

    const [selectedUser, setSelectedUser] = useState({
        id: '',
        name: ''
    });
    const { users, editUser } = useContext(GlobalContext);
    const history = useHistory();
    const currentUserId = props.match.params.id;

    useEffect(() => {
        const userId = currentUserId;
        const selectedUser = users.find(user => user.id === userId )
        setSelectedUser(selectedUser)
    },[currentUserId, users])
    const onSubmit = () => {
        editUser(selectedUser)
        history.push('/');
    }

    const onChange = (e) => {
        setSelectedUser({...selectedUser, [e.target.name]: e.target.value})
    }

    return (
        <Form onSubmit={onSubmit}>
            <h4>Edit User</h4>
            <FormGroup>
                <Label>Name</Label>
                <Input
                  type="text"
                    name="name"
                    value={selectedUser.name}
                    onChange={onChange}
                  placeholder="Enter Name"
                    autoComplete="off"></Input>
            </FormGroup>
            <Button type="submit" className="btn mt-2 mr-2">Submit</Button>
            <Link to="/" className="btn btn-danger mt-2 mx-2">Cancel</Link>
        </Form>
    )
}
