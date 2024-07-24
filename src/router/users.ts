import express from 'express';
import { deleteUser, getAllUsers, updateUser } from '../controllers/users';
import { isAuthenticated, isOwner} from '../middlewares';

export default (router: express.Router) => {
    // need isauthenticated to prevent forbidden people from seeing all users
    router.get('/users', isAuthenticated, getAllUsers);
    // need to be owner and authenticated to delete a user
    router.delete('/users/:id', isAuthenticated, isOwner, deleteUser);
    router.patch('/users/:id', isAuthenticated, isOwner, updateUser);

}