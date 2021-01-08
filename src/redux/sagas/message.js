// import { put, takeLatest } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* sendMessage( action ) {
    console.log('index post', action.payload);
    try { 
        yield axios.post('/api/contact', action.payload)
        // yield put({ type: 'GET_MOVIES' }) 
    } catch (error) {
        console.log('Bad news bears, error with INDEX POST', error);
    }
} // end sendMessage

// saga to call the generator function
function* messageSaga() {
  yield takeLatest('SEND_EMAIL', sendMessage);
} // end messageSaga

export default messageSaga;