import Navbar from "@/app/(components)/navbar";
import styles from './rootLayout.module.css'
import Head from "next/head";

//@ts-ignore
export default function RootLayout({ children }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
            </Head>
            <body className={styles.body}>
                <div className={styles.rootLayout}>
                    <div><Navbar/></div>
                    {children}
                </div>
            </body>
        </>
    )
}