import Image from "next/image";
import styles from './home.module.css';
import {Roboto_Mono} from "next/font/google";
import Tabs from "@/app/(components)/tabs/tabs";

const robotoMono = Roboto_Mono({weight: ['400'], subsets: ['latin']});

export default function Home() {
    return (
        <div className={styles.rootLayout}>
            <div className={styles.padding}/>
            <div className={styles.layout}>
                <div className={styles.layoutBox}>
                    {/* Description Section */}
                    <div className={`${robotoMono.className} ${styles.descriptionBox}`}>
                        <div className={styles.helloBox}>
                            <h1>Hello,</h1>
                            <h1>I'm Syed Ahris</h1>
                        </div>
                        <div className={styles.description}>
                            <p className={styles.descriptionPrint}>print('Expanding Horizons')</p>
                            <p className={styles.descriptionOther}>
                                # A simple <b>spirit</b> expanding <b>horizons</b> through
                            </p>
                            <p className={styles.descriptionOther}>
                                # <b>curiosity</b>, <b>innovation</b>, and the art of <b>coding</b>.
                            </p>
                        </div>
                    </div>
                    {/* Profile Picture Section */}
                    <div className={styles.imageContainer}>
                        <Image
                            className={styles.img}
                            src="/profilepic.png"
                            alt="Creator's profile picture"
                            width={258}
                            height={258}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.padding}/>
            <div className={styles.tabs}>
                <Tabs/>
            </div>
        </div>
    );
}
