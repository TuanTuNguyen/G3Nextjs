import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <div >
            <section className={styles.banner__home}>
                <a href=""> <img src="https://www.premieroutlet.hu/fileadmin/user_upload/PO_NB_banner_2390x598.jpg" alt="" /></a>
            </section>
            <section className={styles.sellers}>
                <h2>
                    Best sellers
                </h2>
                <div className={styles.list__product__sellers}>
                    <div className={styles.item__sellers} >
                        <a href=""><img className={styles.img__item__sellers} src="https://i.pinimg.com/564x/13/a3/ac/13a3acea9d3e1d49d436248f96cb12ac.jpg" alt="" /></a>
                        <h4>
                        550 UNC White University Blue
                        </h4>
                        <p>$109.99</p>
                    </div>
                    <div className={styles.item__sellers} >
                        <a href=""><img className={styles.img__item__sellers} src="https://i.pinimg.com/564x/13/a3/ac/13a3acea9d3e1d49d436248f96cb12ac.jpg" alt="" /></a>
                        <h4>
                        550 UNC White University Blue
                        </h4>
                        <p>$109.99</p>
                    </div>
                    <div className={styles.item__sellers} >
                        <a href=""><img className={styles.img__item__sellers} src="https://i.pinimg.com/564x/13/a3/ac/13a3acea9d3e1d49d436248f96cb12ac.jpg" alt="" /></a>
                        <h4>
                        550 UNC White University Blue
                        </h4>
                        <p>$109.99</p>
                    </div>
                </div>
            </section>
            <section className={styles.post__home}>
                    <div className={styles.list__post}>
                        <div className={styles.item__post}>
                            <a href="">
                                <img src="https://i.pinimg.com/564x/d1/94/4d/d1944d416d3055a74dd6b3b0bfc1773f.jpg" alt="" />
                            </a>
                            <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur sint ab odio nam quidem aliquam sapiente dicta. Iure nesciunt optio maxime quia alias corrupti quam, distinctio inventore error suscipit nulla.
                            </p>
                            <button className={styles.btn__post__home}>
                            see more
                            </button>
                        </div>
                        <div className={styles.item__post}>
                            <a href="">
                                <img src="https://i.pinimg.com/564x/10/0b/88/100b887c340dcce48695b18f9fad8456.jpg" alt="" />
                            </a>
                            <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur sint ab odio nam quidem aliquam sapiente dicta. Iure nesciunt optio maxime quia alias corrupti quam, distinctio inventore error suscipit nulla.
                            </p>
                            <button className={styles.btn__post__home}>
                            see more
                            </button>
                        </div>
                    </div>
            </section>
            <section className={styles.recommended__home}>
                <h2>
                Recommended for you
                </h2>
                <div className={styles.list__product__sellers}>
                    <div className={styles.item__sellers} >
                        <a href=""><img className={styles.img__item__sellers} src="https://i.pinimg.com/564x/01/37/b0/0137b001fe4ece47dc0bde62de2f4b5b.jpg" alt="" /></a>
                        <h4>
                        550 UNC White University Blue
                        </h4>
                        <p>$109.99</p>
                    </div>
                    <div className={styles.item__sellers} >
                        <a href=""><img className={styles.img__item__sellers} src="https://i.pinimg.com/564x/01/37/b0/0137b001fe4ece47dc0bde62de2f4b5b.jpg" alt="" /></a>
                        <h4>
                        550 UNC White University Blue
                        </h4>
                        <p>$109.99</p>
                    </div>
                    <div className={styles.item__sellers} >
                        <a href=""><img className={styles.img__item__sellers} src="https://i.pinimg.com/564x/01/37/b0/0137b001fe4ece47dc0bde62de2f4b5b.jpg" alt="" /></a>
                        <h4>
                        550 UNC White University Blue
                        </h4>
                        <p>$109.99</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
