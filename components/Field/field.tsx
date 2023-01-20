import styles from './field.module.css';

type Props = {
    type: string;
    name: string;
    value: string;
    placeholder?: string;
    className?: string;
    min?: string;
    onChange: (value: string, name: string) => void;
    maxlength?: any;
}

export default function Field({ type, name, value, placeholder, className, onChange, min, maxlength }: Props) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value, name)
    };

    return (
        <label className={`${styles.label} ${className}`} htmlFor={name}>
            {
                name === 'lastname' ? 'Nom' :
                name === 'firstname' ? 'Prénom' :
                name === 'email' ? 'Email' :
                name === 'telephone' ? 'Téléphone' :
                name === 'city' ? 'Ville' :
                name === 'zipCode' ? 'Code postal' :
                name === 'description' ? 'Description' :
                name
            }
            <input type={type} name={name} className={`${styles.input} ${className}`} value={value} placeholder={placeholder} onChange={handleChange} min={min} maxLength={maxlength} />
        </label>
    )
}
