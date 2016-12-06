import { createStore, applyMiddleware, combineReducers} from 'redux';
import lyricsReducer from './reducers/lyrics-reducer';
import playerReducer from './reducers/player-reducer';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const reduxLogger = createLogger();

const combinedReducers = combineReducers({
  lyrics: lyricsReducer,
  player: playerReducer
});

const middleware = applyMiddleware(reduxLogger, thunkMiddleware);

export default createStore(combinedReducers, middleware);

