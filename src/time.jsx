import React, { useState, useEffect } from 'react';

// Countdown Timer Component
const CountdownTimer = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = new Date(targetDate) - new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            };
        } else {
            // Time has expired
            timeLeft = {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // Cleanup the interval on component unmount
        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div style={{ fontSize: '1.2em', fontWeight: 'bold' }}>
            {timeLeft.days} Days {timeLeft.hours} Hours {timeLeft.minutes} Minutes {timeLeft.seconds} Seconds
        </div>
    );
};

// TopBar Component
const TopBar = ({ targetDate }) => {
    const topBarStyle = {
        display: 'flex',
        justifyContent: 'center', // Center content horizontally
        alignItems: 'center', // Center content vertically
        backgroundColor: '#0e6655', // Top bar background color
        color: 'white', // Text color
        padding: '15px 20px', // Padding
        position: 'fixed', // Fix to the top
        width: '100%', // Full width
        top: 0, // Align to the top
        zIndex: 1000, // Stay on top of other elements
    };
    

    return (
        <div style={topBarStyle}>
            <CountdownTimer targetDate={targetDate} />
        </div>
    );
};

// Example usage of TopBar component
const App = () => {
    const targetDate = "2024-12-22T11:00:00"; // Set your target date here

    return (
        <div>
            <TopBar targetDate={targetDate} />
            {/* Other components of your application can go here */}
        </div>
    );
};

export default App;
