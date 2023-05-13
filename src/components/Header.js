import React from 'react';

function Header({name,title}){
    return (
        <div style={{background:"blue"}}>
            <h1>This is title {title}</h1>
            <h1>This is h1 {name}</h1>
        </div>
    );
}

export default Header;