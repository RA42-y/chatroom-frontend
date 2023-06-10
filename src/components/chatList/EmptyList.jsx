import React from 'react';
import EmptyIcon from "../../assets/images/no-chats.png"


const EmptyList = () => {

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh'
        }}>
            <img src={EmptyIcon} alt={EmptyIcon} style={{width: '4em', height: '4em', marginBottom: '1em'}}/>
            <p style={{color: 'dimgray'}}>You have no chats yet</p>
        </div>
    );

}

export default EmptyList;
