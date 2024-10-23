import styles from './Hero.module.scss';
import Heading from '@/components/Heading/Heading';

type Props = {
    children: React.ReactNode;
}

const facilities = ['darts', 'pool', 'Table tennis', 'arcade', 'poker', 'live sports', 'resident dj', 'karaoke']

const Hero: React.FC<Props> = ({ children }) => {
    return (
        <div className={styles.hero}>
            {children}

            <div className={styles.content}>

                <Heading headingStyle={`h1`} subHeading={`Welcome to`} heading={`The Dewing Arms`} />

                <ul className={styles.facilities}>
                    {facilities.map((facility, i) => (
                        <li key={i}>
                            {facility}
                        </li>
                    ))}
                </ul>

            </div>

        </div>
    )
}

export default Hero;
