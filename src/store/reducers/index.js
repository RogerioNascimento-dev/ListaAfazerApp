import {combineReducers} from 'redux';
import taskReduce from './taskReduce';
import usuarioReduce from './usuarioReduce';

export default combineReducers({
  taskReduce,
  usuarioReduce,
});