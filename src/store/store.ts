// store.ts
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import { activitiesSaga } from "./allActivities/activitiesSaga";
import {notificationsSaga} from "./allNoifications/notificationsSaga";
import {registrationsSaga} from "./allRegistrations/registrationsSaga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(activitiesSaga);
sagaMiddleware.run(notificationsSaga)
sagaMiddleware.run(registrationsSaga)

export default store;