import { IconArrowBigLeftLine, IconArrowBigRightLine, IconHome, IconInfoCircle } from "@tabler/icons-react";
import { useState } from "react";
import styles from "./style.module.css";

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
                            <a href="/home">
                                <IconHome size={20} />
                            </a>
                        </li>
                        <li>
                            <a href="/sobre">
                                <IconInfoCircle size={20} />
                            </a>
                        </li>
                    </ul>
                </nav>
            )}

            {/* Sidebar aberta */}
            {open && (
                <nav>
                    <ul className={`${styles.sidebarList} ${styles.openList}`}>
                        <li>
                            <a href="/home">
                                <IconHome size={20} /> Home
                            </a>
                        </li>
                        <li>
                            <a href="/sobre">
                                <IconInfoCircle size={20} /> Sobre
                            </a>
                        </li>
                    </ul>
                </nav>
            )}
        </div>
    );
}
