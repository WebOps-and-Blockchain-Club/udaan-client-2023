import Image from "next/image"
import React from 'react';
import imageSrc from '../../utils/Logo.png';
import styles from '../../styles/alumni.module.css';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const AlumniPage = () => {

    // Variables for army
    const army1 = {
        image: require("../../utils/Logo.png"),
        name: "...............",
        designation: "..............",
    };

    const army2 = {
        image: require("../../utils/Logo.png"),
        name: "a2",
        designation: "d2"
    };

    const army3 = {
        image: require("../../utils/Logo.png"),
        name: "a3",
        designation: "d3"
    };

    const army4 = {
        image: require("../../utils/Logo.png"),
        name: "a4",
        designation: "d4"
    };

    const army5 = {
        image: require("../../utils/Logo.png"),
        name: "a5",
        designation: "d5"
    };

    const army6 = {
        image: require("../../utils/Logo.png"),
        name: "a6",
        designation: "d6"
    };

    const army7 = {
        image: require("../../utils/Logo.png"),
        name: "a7",
        designation: "d7"
    };

    const army8 = {
        image: require("../../utils/Logo.png"),
        name: "a8",
        designation: "d8"
    };

    const army9 = {
        image: require("../../utils/Logo.png"),
        name: "a9",
        designation: "d9"
    };

    const army10 = {
        image: require("../../utils/Logo.png"),
        name: "a10",
        designation: "d10"
    };

    // Variables for leaders
    const leader1 = {
        image: require("../../utils/Logo.png"),
        name: "l1",
        designation: "d1"
    };

    const leader2 = {
        image: require("../../utils/Logo.png"),
        name: "l2",
        designation: "d2"
    };

    const leader3 = {
        image: require("../../utils/Logo.png"),
        name: "l3",
        designation: "d3"
    };

    const leader4 = {
        image: require("../../utils/Logo.png"),
        name: "l4",
        designation: "d4"
    };

    const leader5 = {
        image: require("../../utils/Logo.png"),
        name: "l5",
        designation: "d5"
    };

    const leader6 = {
        image: require("../../utils/Logo.png"),
        name: "l6",
        designation: "d6"
    };

    const leader7 = {
        image: require("../../utils/Logo.png"),
        name: "l7",
        designation: "d7"
    };

    const leader8 = {
        image: require("../../utils/Logo.png"),
        name: "l8",
        designation: "d8"
    };

    const leader9 = {
        image: require("../../utils/Logo.png"),
        name: "l9",
        designation: "d9"
    };

    const leader10 = {
        image: require("../../utils/Logo.png"),
        name: "l10",
        designation: "d10"
    };

    // Variables for others
    const other1 = {
        image: require("../../utils/Logo.png"),
        name: "o1",
        designation: "d1"
    };

    const other2 = {
        image: require("../../utils/Logo.png"),
        name: "o2",
        designation: "d2"
    };

    const other3 = {
        image: require("../../utils/Logo.png"),
        name: "o3",
        designation: "d3"
    };

    const other4 = {
        image: require("../../utils/Logo.png"),
        name: "o4",
        designation: "d4"
    };

    const other5 = {
        image: require("../../utils/Logo.png"),
        name: "o5",
        designation: "d5"
    };

    const other6 = {
        image: require("../../utils/Logo.png"),
        name: "o6",
        designation: "d6"
    };

    const other7 = {
        image: require("../../utils/Logo.png"),
        name: "o7",
        designation: "d7"
    };

    const other8 = {
        image: require("../../utils/Logo.png"),
        name: "o8",
        designation: "d8"
    };

    const other9 = {
        image: require("../../utils/Logo.png"),
        name: "o9",
        designation: "d9"
    };

    const other10 = {
        image: require("../../utils/Logo.png"),
        name: "o10",
        designation: "d10"
    };

    return (
        <div className={styles.MainContainer}>

            <div>
                <Navbar />
            </div>

            <div className={styles.alumniConatiner}>

                <div className={styles.mainTitle}>
                    <h1>PROMINENT ALUMNI</h1>
                </div>

                <div className={styles.armyContainer}>
                    <div className={styles.armyTitle}>
                        <h2>ARMY</h2>
                    </div>
                    <div className={styles.Photos}>
                        <div className={styles.formRow}>
                            <div className={styles.photoContainer}>
                                <div className={styles.photo}>
                                    <Image src={army1.image} alt="Registration" className={styles.photo} />
                                </div>
                                <div className={styles.AlumniDetails}>
                                    <label className={styles.AlumniDescription}>Name  :  {army1.name}</label><br />
                                    <label className={styles.AlumniDescription}>Designation  :  {army1.designation}</label>
                                </div>
                            </div>
                            <div className={styles.photoContainer}>
                                <div className={styles.photo}>
                                    <Image src={imageSrc} alt="Registration" className={styles.photo} />
                                </div>
                                <div className={styles.AlumniDetails}>
                                    <label className={styles.AlumniDescription}>Name  :  {army2.name}</label><br />
                                    <label className={styles.AlumniDescription}>Designation  :  {army2.designation}</label>
                                </div>
                            </div>
                            <div className={styles.photoContainer}>
                                <div className={styles.photo}>
                                    <Image src={imageSrc} alt="Registration" className={styles.photo} />
                                </div>
                                <div className={styles.AlumniDetails}>
                                    <label className={styles.AlumniDescription}>Name  :  {army3.name}</label><br />
                                    <label className={styles.AlumniDescription}>Designation  :  {army3.designation}</label>
                                </div>
                            </div>
                            <div className={styles.photoContainer}>
                                <div className={styles.photo}>
                                    <Image src={imageSrc} alt="Registration" className={styles.photo} />
                                </div>
                                <div className={styles.AlumniDetails}>
                                    <label className={styles.AlumniDescription}>Name  :  {army4.name}</label><br />
                                    <label className={styles.AlumniDescription}>Designation  :  {army4.designation}</label>
                                </div>
                            </div>
                            <div className={styles.photoContainer}>
                                <div className={styles.photo}>
                                    <Image src={imageSrc} alt="Registration" className={styles.photo} />
                                </div>
                                <div className={styles.AlumniDetails}>
                                    <label className={styles.AlumniDescription}>Name  :  {army5.name}</label><br />
                                    <label className={styles.AlumniDescription}>Designation  :  {army5.designation}</label>
                                </div>
                            </div>
                        </div>
                        <div className={styles.formRow}>
                            <div className={styles.photoContainer}>
                                <div className={styles.photo}>
                                    <Image src={imageSrc} alt="Registration" className={styles.photo} />
                                </div>
                                <div className={styles.AlumniDetails}>
                                    <label className={styles.AlumniDescription}>Name  :  {army6.name}</label><br />
                                    <label className={styles.AlumniDescription}>Designation  :  {army6.designation}</label>
                                </div>
                            </div>
                            <div className={styles.photoContainer}>
                                <div className={styles.photo}>
                                    <Image src={imageSrc} alt="Registration" className={styles.photo} />
                                </div>
                                <div className={styles.AlumniDetails}>
                                    <label className={styles.AlumniDescription}>Name  :  {army7.name}</label><br />
                                    <label className={styles.AlumniDescription}>Designation  :  {army7.designation}</label>
                                </div>
                            </div>
                            <div className={styles.photoContainer}>
                                <div className={styles.photo}>
                                    <Image src={imageSrc} alt="Registration" className={styles.photo} />
                                </div>
                                <div className={styles.AlumniDetails}>
                                    <label className={styles.AlumniDescription}>Name  :  {army8.name}</label><br />
                                    <label className={styles.AlumniDescription}>Designation  :  {army8.designation}</label>
                                </div>
                            </div>
                            <div className={styles.photoContainer}>
                                <div className={styles.photo}>
                                    <Image src={imageSrc} alt="Registration" className={styles.photo} />
                                </div>
                                <div className={styles.AlumniDetails}>
                                    <label className={styles.AlumniDescription}>Name  :  {army9.name}</label><br />
                                    <label className={styles.AlumniDescription}>Designation  :  {army9.designation}</label>
                                </div>
                            </div>
                            <div className={styles.photoContainer}>
                                <div className={styles.photo}>
                                    <Image src={imageSrc} alt="Registration" className={styles.photo} />
                                </div>
                                <div className={styles.AlumniDetails}>
                                    <label className={styles.AlumniDescription}>Name  :  {army10.name}</label><br />
                                    <label className={styles.AlumniDescription}>Designation  :  {army10.designation}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.leadersContainer}>
                    <div className={styles.leadersTitle}>
                        <h2>LEADERS</h2>
                    </div>
                    <div className={styles.Photos}>
                        <div className={styles.formRow}>
                            <div className={styles.photoContainer}>
                                <div className={styles.photo}>
                                    <Image src={imageSrc} alt="Registration" className={styles.photo} />
                                </div>
                                <div className={styles.AlumniDetails}>
                                    <label className={styles.AlumniDescription}>Name  :  {leader1.name}</label><br />
                                    <label className={styles.AlumniDescription}>Designation  :  {leader1.designation}</label>
                                </div>
                            </div>
                            <div className={styles.photoContainer}>
                                <div className={styles.photo}>
                                    <Image src={imageSrc} alt="Registration" className={styles.photo} />
                                </div>
                                <div className={styles.AlumniDetails}>
                                    <label className={styles.AlumniDescription}>Name  :  {leader2.name}</label><br />
                                    <label className={styles.AlumniDescription}>Designation  :  {leader2.designation}</label>
                                </div>
                            </div>
                            <div className={styles.photoContainer}>
                                <div className={styles.photo}>
                                    <Image src={imageSrc} alt="Registration" className={styles.photo} />
                                </div>
                                <div className={styles.AlumniDetails}>
                                    <label className={styles.AlumniDescription}>Name  :  {leader3.name}</label><br />
                                    <label className={styles.AlumniDescription}>Designation  :  {leader3.designation}</label>
                                </div>
                            </div>
                            <div className={styles.photoContainer}>
                                <div className={styles.photo}>
                                    <Image src={imageSrc} alt="Registration" className={styles.photo} />
                                </div>
                                <div className={styles.AlumniDetails}>
                                    <label className={styles.AlumniDescription}>Name  :  {leader4.name}</label><br />
                                    <label className={styles.AlumniDescription}>Designation  :  {leader4.designation}</label>
                                </div>
                            </div>
                            <div className={styles.photoContainer}>
                                <div className={styles.photo}>
                                    <Image src={imageSrc} alt="Registration" className={styles.photo} />
                                </div>
                                <div className={styles.AlumniDetails}>
                                    <label className={styles.AlumniDescription}>Name  :  {leader5.name}</label><br />
                                    <label className={styles.AlumniDescription}>Designation  :  {leader5.designation}</label>
                                </div>
                            </div>
                        </div>
                        <div className={styles.formRow}>
                            <div className={styles.photoContainer}>
                                <div className={styles.photo}>
                                    <Image src={imageSrc} alt="Registration" className={styles.photo} />
                                </div>
                                <div className={styles.AlumniDetails}>
                                    <label className={styles.AlumniDescription}>Name  :  {leader6.name}</label><br />
                                    <label className={styles.AlumniDescription}>Designation  :  {leader6.designation}</label>
                                </div>
                            </div>
                            <div className={styles.photoContainer}>
                                <div className={styles.photo}>
                                    <Image src={imageSrc} alt="Registration" className={styles.photo} />
                                </div>
                                <div className={styles.AlumniDetails}>
                                    <label className={styles.AlumniDescription}>Name  :  {leader7.name}</label><br />
                                    <label className={styles.AlumniDescription}>Designation  :  {leader7.designation}</label>
                                </div>
                            </div>
                            <div className={styles.photoContainer}>
                                <div className={styles.photo}>
                                    <Image src={imageSrc} alt="Registration" className={styles.photo} />
                                </div>
                                <div className={styles.AlumniDetails}>
                                    <label className={styles.AlumniDescription}>Name  :  {leader8.name}</label><br />
                                    <label className={styles.AlumniDescription}>Designation  :  {leader8.designation}</label>
                                </div>
                            </div>
                            <div className={styles.photoContainer}>
                                <div className={styles.photo}>
                                    <Image src={imageSrc} alt="Registration" className={styles.photo} />
                                </div>
                                <div className={styles.AlumniDetails}>
                                    <label className={styles.AlumniDescription}>Name  :  {leader9.name}</label><br />
                                    <label className={styles.AlumniDescription}>Designation  :  {leader9.designation}</label>
                                </div>
                            </div>
                            <div className={styles.photoContainer}>
                                <div className={styles.photo}>
                                    <Image src={imageSrc} alt="Registration" className={styles.photo} />
                                </div>
                                <div className={styles.AlumniDetails}>
                                    <label className={styles.AlumniDescription}>Name  :  {leader10.name}</label><br />
                                    <label className={styles.AlumniDescription}>Designation  :  {leader10.designation}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.othersContainer}>
                    <div className={styles.othersTitle}>
                        <h2>OTHERS</h2>
                    </div>
                    <div className={styles.Photos}>
                        <div className={styles.formRow}>
                            <div className={styles.photoContainer}>
                                <div className={styles.photo}>
                                    <Image src={imageSrc} alt="Registration" className={styles.photo} />
                                </div>
                                <div className={styles.AlumniDetails}>
                                    <label className={styles.AlumniDescription}>Name  :  {other1.name}</label><br />
                                    <label className={styles.AlumniDescription}>Designation  :  {other1.designation}</label>
                                </div>
                            </div>
                            <div className={styles.photoContainer}>
                                <div className={styles.photo}>
                                    <Image src={imageSrc} alt="Registration" className={styles.photo} />
                                </div>
                                <div className={styles.AlumniDetails}>
                                    <label className={styles.AlumniDescription}>Name  :  {other1.name}</label><br />
                                    <label className={styles.AlumniDescription}>Designation  :  {other1.designation}</label>
                                </div>
                            </div>
                            <div className={styles.photoContainer}>
                                <div className={styles.photo}>
                                    <Image src={imageSrc} alt="Registration" className={styles.photo} />
                                </div>
                                <div className={styles.AlumniDetails}>
                                    <label className={styles.AlumniDescription}>Name  :  {other1.name}</label><br />
                                    <label className={styles.AlumniDescription}>Designation  :  {other1.designation}</label>
                                </div>
                            </div>
                            <div className={styles.photoContainer}>
                                <div className={styles.photo}>
                                    <Image src={imageSrc} alt="Registration" className={styles.photo} />
                                </div>
                                <div className={styles.AlumniDetails}>
                                    <label className={styles.AlumniDescription}>Name  :  {other1.name}</label><br />
                                    <label className={styles.AlumniDescription}>Designation  :  {other1.designation}</label>
                                </div>
                            </div>
                            <div className={styles.photoContainer}>
                                <div className={styles.photo}>
                                    <Image src={imageSrc} alt="Registration" className={styles.photo} />
                                </div>
                                <div className={styles.AlumniDetails}>
                                    <label className={styles.AlumniDescription}>Name  :  {other1.name}</label><br />
                                    <label className={styles.AlumniDescription}>Designation  :  {other1.designation}</label>
                                </div>
                            </div>
                        </div>
                        <div className={styles.formRow}>
                            <div className={styles.photoContainer}>
                                <div className={styles.photo}>
                                    <Image src={imageSrc} alt="Registration" className={styles.photo} />
                                </div>
                                <div className={styles.AlumniDetails}>
                                    <label className={styles.AlumniDescription}>Name  :  {other1.name}</label><br />
                                    <label className={styles.AlumniDescription}>Designation  :  {other1.designation}</label>
                                </div>
                            </div>
                            <div className={styles.photoContainer}>
                                <div className={styles.photo}>
                                    <Image src={imageSrc} alt="Registration" className={styles.photo} />
                                </div>
                                <div className={styles.AlumniDetails}>
                                    <label className={styles.AlumniDescription}>Name  :  {other1.name}</label><br />
                                    <label className={styles.AlumniDescription}>Designation  :  {other1.designation}</label>
                                </div>
                            </div>
                            <div className={styles.photoContainer}>
                                <div className={styles.photo}>
                                    <Image src={imageSrc} alt="Registration" className={styles.photo} />
                                </div>
                                <div className={styles.AlumniDetails}>
                                    <label className={styles.AlumniDescription}>Name  :  {other1.name}</label><br />
                                    <label className={styles.AlumniDescription}>Designation  :  {other1.designation}</label>
                                </div>
                            </div>
                            <div className={styles.photoContainer}>
                                <div className={styles.photo}>
                                    <Image src={imageSrc} alt="Registration" className={styles.photo} />
                                </div>
                                <div className={styles.AlumniDetails}>
                                    <label className={styles.AlumniDescription}>Name  :  {other1.name}</label><br />
                                    <label className={styles.AlumniDescription}>Designation  :  {other1.designation}</label>
                                </div>
                            </div>
                            <div className={styles.photoContainer}>
                                <div className={styles.photo}>
                                    <Image src={imageSrc} alt="Registration" className={styles.photo} />
                                </div>
                                <div className={styles.AlumniDetails}>
                                    <label className={styles.AlumniDescription}>Name  :  {other1.name}</label><br />
                                    <label className={styles.AlumniDescription}>Designation  :  {other1.designation}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div>
                <Footer />
            </div>
        </div>
    );
};

export default AlumniPage;