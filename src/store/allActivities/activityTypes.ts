// activityTypes.ts
export const FETCH_ACTIVITIES = "FETCH_ACTIVITIES";
export type Activity = {
    _id: string;
    name: string;
    location: string;
    country: string;
    date: string;
    image1: string;
};
