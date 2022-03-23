
import React, { useState } from 'react';
import UserProfileForm from './userprofile';

const UserProfile=() => {
    const [onEdit, setOnEdit] = useState(false);

    const onSubmit = (values: any) => {
        console.log(JSON.stringify(values));
    };

    const onEditBtnClick = () => {
        setOnEdit(!onEdit);
    };

    return (
        <UserProfileForm onSubmit={onSubmit} onEdit={onEdit} onEditBtnClick={onEditBtnClick}/>
    );
};

export default UserProfile