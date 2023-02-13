import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_NOTIFICATIONS } from "./notificationTypes";
import { setNotificationData } from "./notificationActions";

function* fetchNotifications() {
    try {
        // @ts-ignore
        const response = yield call(fetch, "http://localhost:5000/Notifications/All");
        // @ts-ignore
        const data = yield response.json();
        yield put(setNotificationData(data));
    } catch (error) {
        console.error(error);
    }
}


export function* notificationsSaga() {
    yield takeLatest(FETCH_NOTIFICATIONS, fetchNotifications);
}