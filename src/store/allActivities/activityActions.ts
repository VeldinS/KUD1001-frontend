// activityActions.ts
import { FETCH_ACTIVITIES, Activity } from "./activityTypes";

export const fetchActivities = () => ({
    type: FETCH_ACTIVITIES,
});

export const setActivityData = (data: Activity[]) => ({
    type: "SET_ACTIVITY_DATA",
    payload: data,
});