import React from 'react';
import Book from './Book/Book';

export default ({ books, isLoading }) => {
    return (
        <div>
            <div className="App">{isLoading ? 'загрузка...' : '+++' + books}</div>;
        </div>
        
    )
}