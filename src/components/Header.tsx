import React from 'react';

interface Props {
    title: string;
}

const Header = ({ title }: Props) => {
    return (
        <div className="max-w-screen-xl mx-auto p-4">
            <h1 className="mb-4 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                {title}
            </h1>
        </div>
    )
};

export default Header;