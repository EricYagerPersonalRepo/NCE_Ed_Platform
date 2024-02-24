import React, { useEffect, useState } from 'react';
import AuthenticatedHeader from "./AuthenticatedHeader"
import UnauthenticatedHeader from "./UnauthenticatedHeader"
import { Hub } from 'aws-amplify/utils';

const Header = ({ loggedIn, userData, avatarUrl = "" }: any) => {   
    if (loggedIn) {
        return <AuthenticatedHeader userData={userData} avatarUrl={avatarUrl} />;
    } else {
        return <UnauthenticatedHeader />;
    }
};

export default Header