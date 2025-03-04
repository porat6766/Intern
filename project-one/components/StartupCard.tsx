import React from 'react';

export interface Post {
    _createdAt: string;
    views: number;
    author: { id: number };
    _id: number;
    description: string;
    image: string;
}

// הגדרת ממשק ל-Props
interface StartupCardProps {
    post: Post;
}

const StartupCard: React.FC<StartupCardProps> = ({ post }) => {
    return (
        <li className='startup-card group'>
            <div className='flex-between'>
                <p className='startup-card_date'>
                    {post._createdAt}
                </p>
            </div>
        </li>
    );
};

export default StartupCard;
