import { IconArrowBigLeftLine, IconArrowBigRightLine, IconHome, IconInfoCircle } from "@tabler/icons-react";
import { useState } from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
    const [open, setOpen] = useState(false);

    return (
        <div className={`${styles.sidebar} ${open ? styles.open : styles.closed}`}>
            <button className={`${styles.toggleBtn}`} onClick={() => setOpen(!open)}>
                {open ? <IconArrowBigLeftLine /> : <IconArrowBigRightLine />}
            </button>

            {/* Sidebar fechada */}
            {!open && (
                <nav>
                    <ul className={`${styles.sidebarList} ${styles.closedList}`}>
                        <li>
                            <Link to="/home">
                                <IconHome size={20} />
                            </Link>

                        </li>
                        <li>
                            <Link to="/sobre">
                                <IconInfoCircle size={20} />
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}

            {/* Sidebar aberta */}
            {open && (
                <nav>
                    <ul className={`${styles.sidebarList} ${styles.openList}`}>
                        <li>
                            <Link to="/home">
                                <IconHome size={20} /> Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/sobre">
                                <IconInfoCircle size={20} /> Sobre
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}
        </div>
    );
}
