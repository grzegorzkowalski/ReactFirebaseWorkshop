import React from 'react';
import Hi from "../components/Hi";
import ClickTest from "../components/ClickTest";

const Home = () => {
    return (
        <>
            Home
            <Hi numbers={[1,2,3]} />
            <ClickTest />
        </>
    );
};

export default Home;
