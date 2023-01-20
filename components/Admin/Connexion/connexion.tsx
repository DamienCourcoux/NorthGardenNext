import styles from './connexion.module.css';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { createHandleChange, handleSigninSucess } from '../../../redux/reducer/reducerAdmin';

import { signInAdmin } from '../../../lib/requestApiAdmin';

type Admin = {
    _id: string,
    pseudo: string,
    email: string,
    password: string
}

import PetitBonhommeSolo from '../../../public/petitBonhommeSolo.png';

import Field from '../../Field/field';

export default function Connexion() {
    const {
        emailConnexion, passwordConnexion, hasError, errorMessage
    } = useSelector((state: any) => state.admin);

    const dispatch = useDispatch();

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const adminHasSignIn = {
            "pseudo": "Admin North Garden",
            "email": emailConnexion,
            "password": passwordConnexion
        }

        const json = await signInAdmin(adminHasSignIn);
        if (json) {
            sessionStorage.setItem('pseudo', 'Admin North Garden');
            sessionStorage.setItem('email', json.admin.email);
            sessionStorage.setItem('token', json.token);
            dispatch(handleSigninSucess(json));
        }
    }

    const handleChange = (value: string, name: string) => {
        const payload = { name, value }
        dispatch(createHandleChange(payload));
    }

    return (
        <div className={styles.connexion}>
            <div className={styles.formulaire}>
                <h1 className={`${styles.title} northgarden`}>Admin North Garden</h1>
                <div className={styles.container}>
                    <Image className={styles.img} src={PetitBonhommeSolo} alt="img représentant un assistant North Garden" />
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <Field type="email" name="emailConnexion" value={emailConnexion} onChange={handleChange} />
                        <Field type="password" name="passwordConnexion" value={passwordConnexion} onChange={handleChange} />
                        <button className={styles.button} type="submit">Connexion</button>
                    </form>
                </div>
                {
                    hasError ? <p className={styles.errorMessage}>{errorMessage}</p> : ''
                }
            </div>
        </div>
    )
}