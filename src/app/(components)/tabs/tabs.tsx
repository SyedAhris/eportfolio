import styles from "./tabs.module.css";
import {FaBrain, FaLaptopCode, FaMobileAlt, FaPaintBrush} from 'react-icons/fa';

const Tabs = () => {

    const handleTabClick = (path: string) => {
        // router.push(path);
    };

    return (
        <div className={styles.tabsContainer}>
            {/* UI Design Tab */}
            <div className={styles.tab}>
                <div className={`${styles.icon} ${styles.uiDesignIcon}`}>
                    <FaPaintBrush/>
                </div>
                <span>UI Design</span>
            </div>

            {/* Web Dev Tab */}
            <div className={styles.tab}>
                <div className={`${styles.icon} ${styles.webDevIcon}`}>
                    <FaLaptopCode/>
                </div>
                <span>Web Dev</span>
            </div>

            {/* Mobile Dev Tab */}
            <div className={styles.tab}>
                <div className={`${styles.icon} ${styles.mobileDevIcon}`}>
                    <FaMobileAlt/>
                </div>
                <span>Mobile Dev</span>
            </div>

            {/* AI / ML Tab */}
            <div className={styles.tab}>
                <div className={`${styles.icon} ${styles.aiMlIcon}`}>
                    <FaBrain/>
                </div>
                <span>AI / ML</span>
            </div>
        </div>
    );
};

export default Tabs;
