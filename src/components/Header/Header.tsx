'use client';

import { useState, useEffect } from 'react';
import Nav from '@/components/Nav/Nav';
import Container from '@/components/Container/Container';
import styles from './Header.module.scss';


const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };
        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <Container>

                <Nav isScrolled={scrolled} />


            </Container>

        </header>
    )
}

export default Header;
