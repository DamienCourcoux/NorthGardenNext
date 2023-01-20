import styles from '../styles/Contact.module.css';
import Head from 'next/head';
import { useRouter } from 'next/router';
import NavLink from '../components/navlink';
import Layout from '../components/layout';
import LayoutPage from '../components/layoutPage';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CountUp from 'react-countup';
import Loader from '../components/Loader/loader';
import { useQuery } from 'react-query';

import {
  createHandleChange, createHandleChangeInt, createHandleChangeText, createHandleChangeDetails, sendEmailSuccess
} from '../redux/reducer/reducer';
import { getPacks, getPack } from '../lib/requestApiPacks';
import { getPrestations } from '../lib/requestApiPrestations';
import { getFormules } from '../lib/requestApiFormules';
import { addClient, sendEmail } from '../lib/requestApiClients';

import {
  FaPhone, FaEnvelope, FaMapMarkerAlt,
  FaFacebook, FaTwitter, FaInstagram,
  FaDiscord, FaPaperPlane, FaCheckCircle
} from 'react-icons/fa';

import Field from '../components/Field/field';

type Packs = {
  _id: number;
  name: string;
  prestationsId: string;
  formulesId: string;
}

type Prestations = {
  _id: string,
  name: string,
  description: string,
  mowing: string,
  hedgeTrimmer: string,
  bushPruning: string,
  weeding: string,
  brushCutter: string,
  planting: string,
  tarpaulin: string,
  mulching: string,
  planters: string,
  aromaticSeasonalFlower: string,
  soil: string,
  fertilizer: string,
  composition: string,
  brushing: string,
  washing: string,
  photo: string,
  blower: string,
  pickup: string,
  gifts: string,
  example: string,
  price: number,
  pack: string,
}

type Formules = {
  _id: string,
  name: string,
  description: string,
  price: number,
  packs: string,
}


export default function Contact() {
  const lastname = useSelector((state: any) => state.app.lastname);
  const firstname = useSelector((state: any) => state.app.firstname);
  const email = useSelector((state: any) => state.app.email);
  const telephone = useSelector((state: any) => state.app.telephone);
  const city = useSelector((state: any) => state.app.city);
  const zipCode = useSelector((state: any) => state.app.zipCode);
  const selectPackForFormContact = useSelector((state: any) => state.app.selectPackForFormContact);
  const details = useSelector((state: any) => state.app.details);
  const selectFormuleForFormContact = useSelector((state: any) => state.app.selectFormuleForFormContact);
  const selectPrestationForFormContact = useSelector((state: any) => state.app.selectPrestationForFormContact);

  const dispatch = useDispatch();
  const router = useRouter();

  const { isLoading: isLoadingPrestations, isError: isErrorPrestations, data: prestations, error: errorPrestations } = useQuery<Prestations[] | any>('prestations', getPrestations);

  const { isLoading: isLoadingFormules, isError: isErrorFormules, data: formules, error: errorFormules } = useQuery<Formules[] | any>('formules', getFormules);

  const { isLoading: isLoadingPacks, isError: isErrorPacks, data: packs, error: errorPacks } = useQuery<Packs[] | any>('packs', getPacks);

  if (isLoadingPrestations) return <Loader message='Les prestations chargent...' />;
  if (isErrorPrestations) return <div>J&apos;ai eu une erreur {`${errorPrestations}`}</div>;

  if (isLoadingFormules) return <Loader message='Les formules chargent...' />;
  if (isErrorFormules) return <div>J&apos;ai eu une erreur {`${errorFormules}`}</div>;

  if (isLoadingPacks) return <Loader message='Les packs chargent...' />;
  if (isErrorPacks) return <div>J&apos;ai eu une erreur {`${errorPacks}`}</div>;

  const notify = () => toast.success(<><p>Merci {firstname} de votre confiance !</p> <br /> <p>Votre demande a été envoyée avec succès.</p> <br /> <p>Vous recevrez une réponse dans les plus brefs délais.</p></>, { icon: <FaCheckCircle className='checkToast' /> });
  const notifyLastnameError = () => toast.error(`Vous n'avez pas écrit votre nom`);
  const notifyFirstnameError = () => toast.error(`Vous n'avez pas écrit votre prénom`);
  const notifyEmailError = () => toast.error(`Vous n'avez pas écrit votre email`);
  const notifyTelephoneError = () => toast.error(`Vous n'avez pas écrit votre numéro de téléphone`);
  const notifyCityError = () => toast.error(`Vous n'avez pas écrit votre ville`);
  const notifyZipCodeError = () => toast.error(`Vous n'avez pas écrit votre code postal`);
  const notifySelectPackError = () => toast.error(`Vous n'avez pas sélectionné le pack qui vous intéresse`);
  const notifySelectFormuleError = () => toast.error(`Vous n'avez pas sélectionné la formule qui vous intéresse`);
  const notifySelectPrestationError = () => toast.error(`Vous n'avez pas sélectionné la prestation qui vous intéresse`);
  const notifyDescriptionError = () => toast.error(`Vous n'avez pas décri votre demande`);

  const handleChange = (value: any, name: string) => {
    if (name === 'telephone' && isNaN(value)) return;
    if (name === 'telephone' && value.length > 10) return;
    if (name === 'zipCode' && value.length > 5) return;
    const payload = { name, value }
    dispatch(createHandleChange(payload));
  };

  const handleChangeInt = (e: any) => {
    const payload = { name: e.target.name, target: e.target.value, id: e.target.id }
    dispatch(createHandleChangeInt(payload));

  };

  const handleChangeText = (e: any) => {
    const payload = { name: e.target.name, target: e.target.value, id: e.target.id }
    dispatch(createHandleChangeText(payload));

  };

  const handleChangeDetails = (e: any) => {
    const payload = { name: e.target.name, target: e.target.value}
    dispatch(createHandleChangeDetails(payload));

  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (lastname === '') {
      notifyLastnameError();
    } else if (firstname === '') {
      notifyFirstnameError();
    } else if (email === '') {
      notifyEmailError();
    } else if (telephone === '') {
      notifyTelephoneError();
    } else if (city === '') {
      notifyCityError();
    } else if (zipCode === '') {
      notifyZipCodeError();
    } else if (selectPackForFormContact === '') {
      notifySelectPackError();
    } else if (selectPackForFormContact === 'Formule individuelles' && selectFormuleForFormContact === '') {
      notifySelectFormuleError();
    } else if (selectPackForFormContact !== 'Formule individuelles' && selectPrestationForFormContact === '') {
      notifySelectPrestationError();
    } else if (details === '') {
      notifyDescriptionError();
    } else {
      const desiredService = `Intéressé par le pack : ${selectPackForFormContact}, plus précisément par la ${selectPackForFormContact === 'Formule individuelles' ? `formule : ${selectFormuleForFormContact}` : `prestation : ${selectPrestationForFormContact}`}`;
      const formData = {
        lastname,
        firstname,
        email,
        telephone,
        city,
        zipCode,
        desiredService,
        details
      }
      const json = await addClient(formData);
      const jsonSendemail = await sendEmail(formData);
      if (json && jsonSendemail) {
        dispatch(sendEmailSuccess());
        router.push('/');
        notify();
      }
    }
  };

  return (
    <Layout>
      <LayoutPage title='Me contacter'>
        <Head>
          <title>North Garden | Me contacter</title>
        </Head>
        <div className={styles.container}>
          <div className={styles.information}>
            <div className={styles.informationTop}>
              <h2 className={`${styles.informationTopTitle} northgarden`}>Mes Coordonnées</h2>
              <p className={styles.informationTopSubtitle}>Remplissez le formulaire et je vous répondrai au plus vite</p>
              <ul>
                <li><a href="tel:07 49 67 97 47" title="07 49 67 97 47"><FaPhone />07 49 67 97 47</a></li>
                <li><a href="mailto:north.garden.paysage@gmail.com" title="north.garden.paysage@gmail.com"><FaEnvelope />north.garden.paysage@gmail.com</a></li>
                <li><FaMapMarkerAlt /> Évreux et ses alentours</li>
              </ul>
              <ul className='reseauxList'>
                <li className='reseauxListItem'><a href="https://www.facebook.com/North.Garden.Paysage" target="_blank" rel="noopener noreferrer" className="facebook" title='Facebook'><FaFacebook /></a></li>
                <li className='reseauxListItem'><a href="https://twitter.com/North__Garden" target="_blank" rel="noopener noreferrer" className="twitter" title='Twitter'><FaTwitter /></a></li>
                <li className='reseauxListItem'><a href="https://www.instagram.com/north___garden/" target="_blank" rel="noopener noreferrer" className="instagram" title='Instagram'><FaInstagram /></a></li>
                <li className='reseauxListItem'><a href="https://discord.gg/cnDY943mEZ" target="_blank" rel="noopener noreferrer" className="discord" title='Discord'><FaDiscord /></a></li>
              </ul>
            </div>
            {
              selectPackForFormContact && (
                <div className={styles.informationBottom}>
                  <article className={styles.ticket}>
                    <header className={styles.ticketHeader}>
                      <h3>Prévisualisation :</h3>
                    </header>
                    <div className={styles.ticketBody}>
                      <section className={styles.ticketSection}>
                        <p><strong className={styles.lastname}>{lastname}</strong> {firstname}{lastname ? ',' : ''}</p>
                      </section>
                      <section className={styles.ticketSection}>
                        <h3>Intéressé par le pack :</h3>
                        <p><span>{selectPackForFormContact}</span></p>
                      </section>
                      <section className={styles.ticketSection}>
                        <h3>Plus précisément par la :</h3>
                        {
                          selectPackForFormContact === 'Formule individuelles'
                            ? (formules.map((formule: Formules) => formule.name === selectFormuleForFormContact ? (<p key={formule._id}><span>Formule &quot;{formule.name}&quot;</span></p>) : ''))
                            : (prestations.map((prestation: Prestations) => prestation.name === selectPrestationForFormContact ? (<p key={prestation._id}><span>{prestation.name}</span></p>) : ''))
                        }
                      </section>
                    </div>
                    <div className={styles.ticketDivider}>
                      <div className={styles.ticketNotch}></div>
                      <div className={`${styles.ticketNotch} ${styles.ticketNotchRight}`}></div>
                    </div>
                    <footer className={styles.ticketFooter}>
                      <p>Prix</p>
                      {
                        selectPackForFormContact === 'Formule individuelles'
                          ? (formules.map((formule: Formules) => formule.name === selectFormuleForFormContact ? (<p key={formule._id} className={styles.ticketFooterPrice}><CountUp end={formule.price} suffix=" €" className={styles.ticketFooterPrice} /> <span>*</span></p>) : ''))
                          : (prestations.map((prestation: Prestations) => prestation.name === selectPrestationForFormContact ? (<p key={prestation._id}>{prestation.price === 240320 ? <><CountUp end={240} suffix=" € (Plastique)" className={styles.ticketFooterPrice} /><br /><CountUp end={320} suffix=" € (Bois)" className={styles.ticketFooterPrice} /></> : <CountUp end={prestation.price} suffix=" €" className={styles.ticketFooterPrice} />} <span>*</span></p>) : ''))
                      }
                    </footer>
                    <p className={styles.ticketPriceInfo}>* Le prix indiqué, n&apos;est pas le prix réel ! Il ne peut l&apos;être qu&apos;après devis !</p>
                  </article>
                </div>
              )
            }
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <Field type="text" name="lastname" value={lastname} onChange={handleChange} />
            <Field type="text" name="firstname" value={firstname} onChange={handleChange} />
            <Field type="email" name="email" value={email} onChange={handleChange} />
            <Field type="tel" name="telephone" maxlength={10} value={telephone} onChange={handleChange} />
            <Field type="text" name="city" value={city} onChange={handleChange} />
            <Field type="number" name="zipCode" value={zipCode} onChange={handleChange} />
            <fieldset>
              <legend className={`${styles.labelMain} ${styles.cent}`}>Par quel pack êtes-vous intéressé ? <NavLink href="/prestations" className={styles.backToPrestations} title='Cliquez ici pour revoir les packs'>Cliquez ici pour revoir les packs</NavLink></legend>
              {
                packs.map((pack: Packs) => (
                  <label key={pack._id} htmlFor={pack.name} className={selectPackForFormContact === pack.name ? `${styles.labelRadio} ${styles.isChecked}` : styles.labelRadio}>
                    {pack.name}
                    <input id={pack.name} type="radio" name="selectPackForFormContact" value={pack._id} onChange={handleChangeInt} />
                  </label>
                ))
              }
            </fieldset>
            {
              selectPackForFormContact && (
                selectPackForFormContact === 'Formule individuelles' ? (
                  <fieldset>
                    <legend className={`${styles.labelMain} ${styles.cent}`}>Précisément par quelle formule ? <NavLink href="/prestations" className={styles.backToPrestations} title='Cliquez ici pour revoir les formules'>Cliquez ici pour revoir les formules</NavLink></legend>
                    {
                      formules.map((formule: Formules) => (
                        <label key={formule._id} htmlFor={formule.name} className={selectFormuleForFormContact === formule.name ? `${styles.labelRadio} ${styles.isChecked}` : styles.labelRadio}>
                          {formule.name}
                          <input id={formule.name} type="radio" name="selectFormuleForFormContact" value={formule._id} onChange={handleChangeText} />
                        </label>
                      ))
                    }
                  </fieldset>
                ) : (
                  <fieldset>
                    <legend className={`${styles.labelMain} ${styles.cent}`}>Précisément par quelle prestation ? <NavLink href="/prestations" className={styles.backToPrestations} title='Cliquez ici pour revoir les prestations'>Cliquez ici pour revoir les prestations</NavLink></legend>
                    {
                      prestations.map((prestation: Prestations) => (
                        selectPackForFormContact === prestation.pack ? (
                          <label key={prestation._id} htmlFor={prestation.name} className={selectPrestationForFormContact === prestation.name ? `${styles.labelRadio} ${styles.isChecked}` : styles.labelRadio}>
                            {prestation.name}
                            <input id={prestation.name} type="radio" name="selectPrestationForFormContact" value={prestation._id} onChange={handleChangeText} />
                          </label>
                        ) : ''
                      ))
                    }
                  </fieldset>
                )
              )
            }
            {
              selectPackForFormContact && (
                <>
                  <label htmlFor="details" className={`${styles.labelMain} ${styles.cent}`}>
                    Détailler votre demande, elle sera valider ou modifer après devis sur place.
                    <textarea name="details" id="details" className={styles.inputMain} rows={5} value={details} onChange={handleChangeDetails}></textarea>
                  </label>
                  <button type="submit">Envoyer <FaPaperPlane /></button>
                </>
              )
            }
          </form>
        </div>
      </LayoutPage>
    </Layout>
  )
}