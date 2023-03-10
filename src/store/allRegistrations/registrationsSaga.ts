import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_REGISTRATIONS } from "./registrationTypes";
import { setRegistrationData } from "./registrationActions";

function* fetchRegistrations() {
    try {
        // @ts-ignore
        const response = yield call(fetch, process.env.REACT_APP_BACKEND_URL + "/Admin/Control-panel/Memberships");
        // @ts-ignore
        const data = yield response.json();
        yield put(setRegistrationData(data));
    } catch (error) {
        console.error(error);
    }
}


export function* registrationsSaga() {
    yield takeLatest(FETCH_REGISTRATIONS, fetchRegistrations);
}