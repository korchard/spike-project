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
}

// GET ROUTE 
// function* getEmails() {
//     console.log('index get');
//     try {
//         const response = yield axios.get('/api/contact');
//         yield put({ type: 'SET_EMAILS', payload: response.data })
//     } catch (error) {
//       console.log('Bad news bears, error with INDEX GET', error);
//     }
// } // end getEmails

function* messageSaga() {
  yield takeLatest('SEND_EMAIL', sendMessage);
  //yield takeLatest('GET_EMAILS', getEmails);
}

export default messageSaga;