import React, {useEffect, useState} from 'react';
import Alert from 'react-bootstrap/Alert';

const AlertMessage = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');

    useEffect(() => {
        const storedMessage = localStorage.getItem('alertMessage');
        const storedType = localStorage.getItem('alertType');
        // Clear alert values from local storage
        localStorage.removeItem('alertMessage');
        localStorage.removeItem('alertType');

        if (storedMessage && storedType) {
            setAlertMessage(storedMessage);
            setAlertType(storedType);
            setShowAlert(true);
            localStorage.removeItem('alertMessage');
            localStorage.removeItem('alertType');

            // Hide alert after 3 seconds
            setTimeout(() => {
                setShowAlert(false);
            }, 5000);
        }
    }, []);

    return (
        <div className={"alert-container"}>
            {showAlert && (
                <Alert variant={alertType} onClose={() => setShowAlert(false)} dismissible>
                    {alertMessage}
                </Alert>
            )}
        </div>

    );
};

export default AlertMessage;