import React from 'react';

const SignOut = () => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
            <h1 className="text-3xl font-bold mb-4">Sign Out</h1>
            <p className="text-lg mb-6">
                This page is for sign-out purposes. It notifies the user that they have successfully signed out of their account.
                After signing out, users are informed that they can log in again if needed.
            </p>
            <p className="text-lg">
                Thank you for using our platform. We hope to see you again soon!
            </p>
        </div>
    );
};

export default SignOut;
