// activityActions.ts
import { FETCH_NOTIFICATIONS, Notification } from "./notificationTypes";

export const fetchNotifications = () => ({
    type: FETCH_NOTIFICATIONS,
});

export const setNotificationData = (data: Notification[]) => ({
    type: "SET_NOTIFICATION_DATA",
    payload: data,
});