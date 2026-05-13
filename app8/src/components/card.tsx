import styles from './Card.module.css'

interface CardProps {
    title: string;
    description: string;
    img?: string
}

export function Card({title, description, img}: CardProps){
    return(
        <div>
            {img && <img src={img} alt={title}/>}
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}