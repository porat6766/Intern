import { formatDate } from '@/lib/utils';
import React from 'react';
import { EyeIcon } from "lucide-react"
import Link from 'next/link';
export interface Post {
    _createdAt: string;
    views: number;
    author: { id: number, name: string };
    _id: number;
    description: string;
    image: string;
}

interface StartupCardProps {
    post: Post;
}

const StartupCard: React.FC<StartupCardProps> = ({ post }) => {
    return (
        <li className='startup-card group'>
            <div className='flex-between'>
                <p className='startup-card_date'>
                    {formatDate(post._createdAt)}
                </p>
                <div className='flex gap-1.55'>
                    <EyeIcon className="size-6 text-primary" />
                    <span className='text-16-medium'>{post.views}</span>
                </div>
            </div>
            <div className='flex-between mt-5 gap-5'>
                <div className='flex-1'>
                    <Link href={`/user/${post.author?.id}`}></Link>
                    <p className='text-16-medium line-clamp-1'>
                        {post.author?.name}
                    </p>
                </div>
            </div>
        </li>
    );
};

export default StartupCard;
