import styles from '../styles/Policy.module.css';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import LayoutPolicy from '../components/layoutPolicy';

const PDF = "../public/politiqueDeConfidentialite_NorthGarden.pdf";
const download = "Politique de Confidentialité North Garden.pdf";

export default function Privacy() {
    return (
        <Layout>
            <LayoutPolicy href={PDF} download={download}>
                <Head>
                    <title>North Garden | Politique de confidentialité</title>
                </Head>
                <div className={styles.page}>
                    <h1 className={`${styles.h1} ${styles.bold} ${styles.uppercase} ${styles.underline}`}>Politique de confidentialité</h1>
                    <p>Le site <Link href="/" className={`${styles.a} ${styles.bold} ${styles.underline}`}>https://northgarden.fr/</Link> est la propriété de North Garden, qui est le responsable du traitement de vos données personnelles.</p>
                    <p>Nous avons adopté cette Politique de confidentialité, qui détermine la manière dont nous traitons les informations collectées par <Link href="/" className={`${styles.a} ${styles.bold} ${styles.underline}`}>https://northgarden.fr/</Link>, qui fournit également les raisons pour lesquelles nous devons collecter certaines données personnelles vous concernant. Par conséquent, vous devez lire cette politique de confidentialité avant d&apos;utiliser le site web <Link href="/" className={`${styles.a} ${styles.bold} ${styles.underline}`}>https://northgarden.fr/</Link>.</p>
                    <p>Nous prenons soin de vos données personnelles et nous nous engageons à en garantir la confidentialité et la sécurité.</p>

                    <h2 className={`${styles.h2} northgarden`}>Les données personnelles que nous collectons :</h2>
                    <p>Lorsque vous visitez le site <Link href="/" className={`${styles.a} ${styles.bold} ${styles.underline}`}>https://northgarden.fr/</Link>, nous collectons automatiquement certaines informations sur votre appareil. En outre, lorsque vous naviguez sur le site, nous collectons des informations sur la page Web et sur la manière dont vous interagissez avec le site.</p>
                    <p>Nous désignons ces informations collectées automatiquement par le terme &quot;informations sur les appareils&quot;. En outre, nous pourrions collecter les données personnelles que vous nous fournissez (y compris, mais sans s&apos;y limiter, le nom, le prénom, l&apos;adresse, etc.) lors de la soumission du formulaire de contact afin de pouvoir remplir le contrat.</p>

                    <h2 className={`${styles.h2} northgarden`}>Pourquoi nous traitons vos données ?</h2>
                    <p>Notre priorité absolue est la sécurité des données des clients et, à ce titre, nous ne pouvons traiter que des données minimales sur les utilisateurs, uniquement dans la mesure où cela est absolument nécessaire pour maintenir le site web. Les informations recueillies automatiquement sont utilisées uniquement pour identifier les cas potentiels d&apos;abus et établir des informations statistiques concernant l&apos;utilisation du site web. Ces informations statistiques ne sont par ailleurs pas agrégées de manière à pouvoir identifier un utilisateur particulier du système.</p>
                </div>

                <div className={styles.page}>
                    <p>Vous pouvez visiter le site Web sans nous dire qui vous êtes ni révéler d&apos;informations permettant à quelqu&apos;un de vous identifier en tant qu&apos;individu spécifique et identifiable. Toutefois, si vous souhaitez utiliser certaines fonctionnalités du site web, ou si vous souhaitez fournir d&apos;autres détails en remplissant un formulaire, vous pouvez nous fournir des données personnelles, telles que votre adresse électronique, votre prénom, votre nom, votre ville de résidence, votre numéro de téléphone. Vous pouvez choisir de ne pas nous fournir vos données personnelles, mais il se peut alors que vous ne puissiez pas profiter de certaines fonctionnalités du site web. Par exemple, vous ne pourrez pas nous contacter directement à partir du site web. Les utilisateurs qui ne savent pas quelles informations sont obligatoires sont invités à nous contacter via <a href="mailto:north.garden.paysage@gmail.com" className={`${styles.a} ${styles.bold} ${styles.underline}`}>north.garden.paysage@gmail.com</a>.</p>

                    <h2 className={`${styles.h2} northgarden`}>Vos droits :</h2>
                    <p>Si vous êtes un résident européen, vous disposez des droits suivants relatifs à vos données personnelles :</p>
                    <ul className={styles.ul}>
                        <li>Le droit d&apos;être informé.</li>
                        <li>Le droit d&apos;accès.</li>
                        <li>Le droit de rectification.</li>
                        <li>Le droit à l&apos;effacement.</li>
                        <li>Le droit de restreindre le traitement.</li>
                        <li>Le droit à la portabilité des données.</li>
                        <li>Le droit d&apos;opposition.</li>
                        <li>Droits relatifs à la prise de décision automatisée et au profilage.</li>
                    </ul>
                    <p>Si vous souhaitez exercer ce droit, veuillez nous contacter via les coordonnées ci-dessous.</p>
                    <p>En outre, si vous êtes un résident européen, nous notons que nous traitons vos informations afin d&apos;exécuter les contrats que nous pourrions avoir avec vous (par exemple, si vous passez une commande par le biais du Site), ou autrement pour poursuivre nos intérêts commerciaux légitimes énumérés ci-dessus.</p>

                    <h2 className={`${styles.h2} northgarden`}>Liens vers d&apos;autres sites web :</h2>
                    <p>Notre site web peut contenir des liens vers d&apos;autres sites web qui ne sont pas détenus ou contrôlés par nous. Sachez que nous ne sommes pas responsables de ces autres sites web ni des pratiques de confidentialité des tiers. Nous vous encourageons à être attentif lorsque vous quittez notre site Web et à lire les déclarations de confidentialité de chaque site Web susceptible de recueillir des informations personnelles.</p>
                </div>

                <div className={styles.page}>
                    <h2 className={`${styles.h2} northgarden`}>Sécurité des informations :</h2>
                    <p>Nous sécurisons les informations que vous fournissez sur des serveurs informatiques dans un environnement contrôlé et sécurisé, protégé contre tout accès, utilisation ou divulgation non autorisés. Nous maintenons des mesures de protection administratives, techniques et physiques raisonnables pour nous protéger contre l&apos;accès, l&apos;utilisation, la modification et la divulgation non autorisés des données personnelles sous son contrôle et sa garde. Toutefois, aucune transmission de données sur Internet ou sur un réseau sans fil ne peut être garantie.</p>

                    <h2 className={`${styles.h2} northgarden`}>Divulgation légale :</h2>
                    <p>Nous divulguerons toute information que nous collectons, utilisons ou recevons si la loi l&apos;exige ou le permet, par exemple pour nous conformer à une citation à comparaître ou à une procédure judiciaire similaire, et lorsque nous pensons de bonne foi que la divulgation est nécessaire pour protéger nos droits, votre sécurité ou celle d&apos;autrui, enquêter sur une fraude ou répondre à une demande du gouvernement.</p>

                    <h2 className={`${styles.h2} northgarden`}>Informations de contact :</h2>
                    <p>Si vous souhaitez nous contacter pour mieux comprendre la présente Politique ou si vous souhaitez nous contacter concernant toute question relative aux droits individuels et à vos Informations personnelles, vous pouvez envoyer un courriel à <a href="mailto:north.garden.paysage@gmail.com" className={`${styles.a} ${styles.bold} ${styles.underline}`}>north.garden.paysage@gmail.com</a>.</p>
                </div>
            </LayoutPolicy>
        </Layout>
    )
}
