import React from 'react';

const ListItem = ({ todo, id }) => {
    const logID = () => {
        console.log({ id });
    };
    return (
        <>
            <ul>
                
                <button onClick={logID}>click me</button>
                <li>{todo}</li>

            </ul>
        </>
    );
};
export default ListItem;