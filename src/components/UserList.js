import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import {
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';
import { GlobalContext } from '../context/GlobalState';

export const UserList = () => {

    const { users, removeUser} = useContext(GlobalContext);

    return (
        <ListGroup className="mt-4">
            {users.length > 0 ? (
            <>
                {users.map(user => (
                <ListGroupItem className="d-flex align-items-center" key={user.id}>
                        <strong>{user.name}</strong>
                    <div className="mx-auto">
                        <Link
                        to={`/edit/${user.id}`}
                        className="btn btn-warning mx-2">Edit</Link>
                            <Button onClick={() => removeUser(user.id)} className="btn btn-danger">Delete</Button>
                    </div>
                </ListGroupItem>
                ))}
            </>
            
            ) : (
                    <h4 className="text-center">No User Found</h4>
            )}
            
            
        </ListGroup>
        
    )
}
