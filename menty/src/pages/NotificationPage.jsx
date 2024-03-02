import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

const NotificationPage = () => {
    const [notifications, setNotifications] = useState([]);
    const navigate=useNavigate();
    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/v1/notification');
                const data = await response.json();
                setNotifications(data.notifications);
            } catch (error) {
                console.error('Error fetching notifications:', error);
            }
        };

        const intervalId = setInterval(fetchNotifications, 10000);

        return () => clearInterval(intervalId);
    }, []);


    function clickHandler(){
        const link=`http://localhost:3000/attend-question/${notifications.message}`
        navigate(link);
    }
    

    return (
        <div>
            <h1>Notifications</h1>
            <ul>
                {notifications.map(notification => (
                    <li key={notification._id} onClick={()=>{clickHandler()}}>{notification.message}</li>
                ))}
            </ul>
        </div>
    );
}

export default NotificationPage


