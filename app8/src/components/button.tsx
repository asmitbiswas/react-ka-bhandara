import styles from "./button.module.css"

interface buttonProps {
    label: string
    onClick: () => void
    color?: "green" | "BLack" | "white"
    size: "sm" | "md" | "lg"
}

export function Button({label, onClick, color = "green", size  = "md"}:buttonProps){
    return(
        <button
        onClick={onClick}
        className  = {`${styles.button} ${styles[color]} ${styles[size]}`}
        >
            {label}
        </button>
    )
}