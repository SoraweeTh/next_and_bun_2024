'use client';

interface UserProfileProps {
    name: string;
    age: number;
    email: string;
    isAdmin: boolean;
}

function UserProfile({name, age, email, isAdmin}: UserProfileProps) {
    return (
        <div>
            <h1>{name}</h1>
            <p>{age}</p>
            <p>{email}</p>
            <p>{isAdmin ? 'Admin' : 'User'}</p>
        </div>
    );
}

export default UserProfile;