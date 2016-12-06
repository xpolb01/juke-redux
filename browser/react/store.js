import { createStore } from 'redux';
import rootReduce from './reducers/root-reducer';

export default createStore(rootReduce);

