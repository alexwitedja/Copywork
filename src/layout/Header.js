import React from 'react';

function Header() {

    return (
        <header style={headerStyle}>
            <h1>Fake Reddit</h1>
            <div style={{color:"#fff"}}>Home</div>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

export default Header;