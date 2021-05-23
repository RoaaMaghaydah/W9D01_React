import React from 'react';
import ListItem from './ListItem';

const List = ({ todoArr }) => {
    console.log({ todoArr })
    const rander = todoArr.map((elem, i) => {
        return <ListItem key={i} todo={elem.todo} id={elem.id} />;
    });
    return (
        <>
            {rander}
        </>
    );
};
export default List;