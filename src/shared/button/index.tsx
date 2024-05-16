import { ButtonHTMLAttributes } from "react";
import styles from './button.module.css'

export default function Button(props: Partial<ButtonHTMLAttributes<HTMLButtonElement>>) {
    return <button className={styles.btn} {...{...props, children: undefined}}>{props.children}</button>
}