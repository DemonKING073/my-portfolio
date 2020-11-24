import React from 'react'
import Nav from './Nav'

const DefaultPage = MyComponent =>{
    const MeroComponent = () =>{
        return (
            <>
                <Nav />
                <MyComponent />
            </>
        )
    }
    return MeroComponent;
}

export default DefaultPage;