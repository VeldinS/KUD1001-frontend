// activityActions.ts
import { FETCH_REGISTRATIONS, Registration } from "./registrationTypes";

export const fetchRegistrations = () => ({
    type: FETCH_REGISTRATIONS,
});

export const setRegistrationData = (data: Registration[]) => ({
    type: "SET_REGISTRATION_DATA",
    payload: data,
});