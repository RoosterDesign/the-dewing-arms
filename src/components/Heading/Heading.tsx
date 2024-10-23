import styles from './Heading.module.scss';

type Props = {
    headingStyle?: string;
    subHeading?: string;
    heading: string;
}

const Heading: React.FC<Props> = ({ headingStyle = "h2", subHeading, heading }) => {

    const headingContents = <>
        {subHeading && <span>{subHeading}</span>}
        {heading}
    </>;

    return (
        <hgroup className={styles.heading}>
            {headingStyle === "h1" ? <h1>{headingContents}</h1> : <h2>{headingContents}</h2>}
        </hgroup>
    )
}

export default Heading;
