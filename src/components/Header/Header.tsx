'use client';

import { useState, useEffect } from 'react';
import Nav from '@/components/Nav/Nav';
import Container from '@/components/Container/Container';
import styles from './Header.module.scss';


const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [navOpen, setNavOpen] = useState<boolean>(false);

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

    const handleToggleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <Container>

                <button className={`${styles.navToggle} ${navOpen ? styles.open : ''}`} onClick={handleToggleNav}>
                    <span></span>
                </button>

                <Nav isScrolled={scrolled} isNavOpen={navOpen} />


            </Container>

        </header>
    )
}

export default Header;
