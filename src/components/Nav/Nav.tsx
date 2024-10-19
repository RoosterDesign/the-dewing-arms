import Image from 'next/image';
import NavItem from '@/components/NavItem/NavItem';
import logo from '@/public/images/logo.png';
import styles from './Nav.module.scss';

interface Props {
    isScrolled: boolean;
    isNavOpen: boolean;
}

const Nav: React.FC<Props> = ({ isScrolled, isNavOpen }) => {

    const leftNav = [{
        label: 'Home',
        anchor: '#top'
    },
    {
        label: 'Facilities',
        anchor: '#facilities'
    },
    {
        label: 'On Tap',
        anchor: '#ontap'
    }];

    const rightNav = [{
        label: 'History',
        anchor: '#history'
    },
    {
        label: 'Gallery',
        anchor: '#gallery'
    },
    {
        label: 'Events',
        anchor: '#events'
    }];

    return (
        <nav className={`${styles.nav} ${isNavOpen ? styles.open : ''}`}>
            <ul>
                {leftNav.map((item, i) => (
                    <NavItem item={item} key={i} />
                ))}
            </ul>

            {/* <Image
                src={logo}
                alt="The Dewing Arms"
                width={400}
                height={500}
                className={styles.logo} /> */}

            <Image
                src={logo}
                alt="The Dewing Arms"
                width={200}
                height={250}
                className={`${styles.logo} ${isScrolled ? styles.scrolled : ''}`} />

            <ul>
                {rightNav.map((item, i) => (
                    <NavItem item={item} key={i} />
                ))}
            </ul>
        </nav>
    )
}

export default Nav;
