import React, { useEffect, useState } from 'react';

import {Container} from './styles';

export default function MoveTo(props) {
    const [dir, setDir] = useState('');

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        const height = document.body.scrollHeight;

        if(currentScrollY > height/2) {
            setDir(x => 'up');
        } else {
            setDir(x => 'down');
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []); 

    const onClick = () => {
        if(dir === 'down') {
            document.querySelector('footer').scrollIntoView({ 
                behavior: 'smooth' 
            });
        } else {
            document.querySelector('header').scrollIntoView({ 
                behavior: 'smooth' 
            });
        }
    }
    return <Container>
        <i className={"fas " + (dir === 'up' ? 'fa-arrow-up' : 'fa-arrow-down')  + " fa-2x"} onClick={onClick}></i>
    </Container>
}