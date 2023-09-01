import Image from "next/image";
import styles from './home.module.css'
export default function Home() {
    return (
        <div>
            <div>

            </div>
            <div>
                <Image className={styles.img} src='/profilepic.png' alt="Creator's profile picture" width={258} height={258}/>
            </div>
        </div>
    )
}