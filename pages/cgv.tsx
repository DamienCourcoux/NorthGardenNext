import styles from '../styles/Policy.module.css';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import LayoutPolicy from '../components/layoutPolicy';

const PDF = "../public/mentionLegales_CGV_NorthGarden.pdf";
const download = "Mention Légales CGV North Garden.pdf";

export default function CGV() {
    return (
        <Layout>
            <LayoutPolicy href={PDF} download={download}>
                <Head>
                    <title>North Garden | Mention Légales et CGV</title>
                </Head>
                <div className={styles.page}>
                    <h1 className={`${styles.h1} ${styles.bold} ${styles.uppercase} ${styles.underline}`}>Mentions légales de North Garden</h1>
                    <p className={styles.bold}>Entreprise individuelle de la Société Monsieur Julien COURCOUX</p>
                    <p className={`${styles.bold} ${styles.underline}`}>Siège social :</p>
                    <p className={styles.bold}>8 Bis Rue du Val Iton - 27000 évreux</p>
                    <p className={`${styles.bold} ${styles.uppercase}`}>Numéro RCS évreux A 898 577 259</p>
                    <p className={styles.bold}>Mail : <a href="mailto:north.garden.paysage@gmail.com" className={`${styles.a} ${styles.underline}`}>north.garden.paysage@gmail.com</a> | Téléphone : <a href="tel: 07 49 67 97 47" className={`${styles.a} ${styles.underline}`}>07 49 67 97 47</a></p>
                    <p className={styles.bold}>Identité de l&apos;hébergeur du site : Vercel</p>

                    <h3 className={`${styles.h1} ${styles.bold} ${styles.uppercase} ${styles.underline}`}>Conditions générales de vente <br /> de North Garden</h3>
                    <p className={`${styles.bold} ${styles.firstData}`}>Applicables à compter <span className={styles.span}>du 01/06/2021</span></p>

                    <h2 className={`${styles.h2} northgarden`}>Article 1 : Objet et champs d&apos;application</h2>
                    <p>Les présentes conditions générales de vente (CGV) constituent le socle de la
                        négociation commerciale et sont systématiquement adressées ou remises à chaque
                        acheteur pour lui permettre de passer commande.</p>
                    <p>Les conditions générales de vente décrites ci-après détaillent les droits et obligations
                        de la <span className={styles.span}>société NORTH GARDEN, Julien COURCOUX</span> et de son client dans le cadre
                        de la vente des marchandises et services.</p>
                    <p>Toute acceptation du devis/bon de commande en ce compris la clause « Je
                        reconnais avoir pris connaissance et j&apos;accepte les conditions générales de vente ci-
                        annexées » implique l&apos;adhésion sans réserve de l&apos;acheteur aux présentes conditions
                        générales de vente.</p>
                    <p>Ces conditions s’appliquent pour tout achat de marchandises ou de services sur le
                        site <Link href="/" className={`${styles.a} ${styles.bold} ${styles.underline}`}>https://northgarden.fr</Link>.</p>
                </div>

                <div className={styles.page}>
                    <h2 className={`${styles.h2} northgarden`}>Article 2 : Prix</h2>
                    <p>Les prix des marchandises vendues sont ceux en vigueur au jour de la prise de
                        commande. Ils sont libellés en euros et calculés hors taxes. Par voie de
                        conséquence, ils seront majorés du taux de TVA et des frais de transport applicables
                        au jour de la commande.</p>

                    <p>La société <span className={styles.span}>NORTH GARDEN, Julien COURCOUX</span> s&apos;accorde le droit de modifier ses
                        tarifs à tout moment. Toutefois, elle s&apos;engage à facturer les marchandises
                        commandées aux prix indiqués lors de l&apos;enregistrement de la commande.</p>
                    <p>Les produits demeurent la propriété <span className={styles.span}>NORTH GARDEN, Julien COURCOUX</span> jusqu&apos;au
                        complet paiement du prix. Nous vous rappelons qu&apos;au moment où vous prenez
                        possession physiquement des produits commandés, les risques de perte ou
                        d&apos;endommagement des produits vous sont transférés. À ce titre, si l&apos;acheteur fait
                        l&apos;objet d&apos;un redressement ou d&apos;une liquidation judiciaire, la société <span className={styles.span}>NORTH GARDEN,
                            Julien COURCOUX</span> se réserve le droit de revendiquer, dans le cadre de la procédure
                        collective, les marchandises vendues et restées impayées.</p>

                    <h2 className={`${styles.h2} northgarden`}>Article 3 : Rabais et ristournes</h2>
                    <p>Les tarifs proposés comprennent les rabais et ristournes que la <span className={styles.span}>NORTH GARDEN,
                        Julien COURCOUX</span> serait amenée à octroyer compte tenu de ses résultats ou de la
                        prise en charge par l&apos;acheteur de certaines prestations.</p>

                    <h2 className={`${styles.h2} northgarden`}>Article 4 : Escompte</h2>
                    <p>Aucun escompte ne sera consenti en cas de paiement anticipé.</p>

                    <h2 className={`${styles.h2} northgarden`}>Article 5 : Commande</h2>
                    <p>Vous pouvez passer commande :</p>
                    <ul className={styles.ul}>
                        <li><span className={styles.span}>Sur le site</span></li>
                        <li><span className={styles.span}>Par téléphone au 07.49.67.97.47 (prix d&apos;un appel local) du lundi au vendredi de 09h à 18h</span></li>
                    </ul>
                </div>

                <div className={styles.page}>
                    <h2 className={`${styles.h2} northgarden`}>Article 6 : Modalités de paiement</h2>
                    <p><span className={styles.span}>Dans le cas de création : payer en avance</span></p>
                    <p>Le règlement des commandes s&apos;effectue :</p>
                    <ul className={styles.ul}>
                        <li>soit par chèque</li>
                        <li>soit par virement bancaire</li>
                        <li>soit en espèce</li>
                    </ul>

                    <h2 className={`${styles.h2} northgarden`}>Article 7 : Retard de paiement</h2>
                    <p>En cas de défaut de paiement total ou partiel des marchandises livrées à l&apos;échéance,
                        l&apos;acheteur doit verser à la société <span className={styles.span}>NORTH GARDEN, Julien COURCOUX</span> une
                        pénalité de retard égale à trois fois le taux de l&apos;intérêt légal.</p>
                    <p>Le taux de l&apos;intérêt légal retenu est celui en vigueur au jour de la livraison des
                        marchandises.</p>
                    <p>Cette pénalité est calculée sur le montant TTC de la somme restant due, et court à
                        compter de la date d&apos;échéance du prix sans qu&apos;aucune mise en demeure préalable
                        ne soit nécessaire.</p>
                    <p>En sus des indemnités de retard, toute somme, y compris l’acompte, non payée à sa
                        date d’exigibilité produira de plein droit le paiement d’une indemnité forfaitaire de 40
                        euros due au titre des frais de recouvrement.</p>
                    <p>Articles 441-10 et D. 441-5 du code de commerce.</p>

                    <h2 className={`${styles.h2} northgarden`}>Article 8 : Clause résolutoire</h2>
                    <p>Si dans les quinze jours qui suivent la mise en œuvre de la clause &quot;Retard de
                        paiement&quot;, l&apos;acheteur ne s&apos;est pas acquitté des sommes restant dues, la vente sera
                        résolue de plein droit et pourra ouvrir droit à l&apos;allocation de dommages et intérêts au
                        profit de la société <span className={styles.span}>NORTH GARDEN, Julien COURCOUX</span>.</p>

                    <h2 className={`${styles.h2} northgarden`}>Article 9 : Livraison</h2>
                    <p>La livraison est effectuée :</p>
                    <ul className={styles.ul}>
                        <li>soit par la remise directe de la marchandise à l&apos;acheteur</li>
                        <li>soit par le dépôt de la marchandise au lieu indiqué par l&apos;acheteur sur le bon de commande.</li>
                    </ul>
                </div>

                <div className={styles.page}>
                    <p>Le délai de livraison indiqué lors de l&apos;enregistrement de la commande n&apos;est donné
                        qu&apos;à titre indicatif et n&apos;est aucunement garanti.</p>
                    <p>Par voie de conséquence, tout retard raisonnable dans la livraison des produits ne
                        pourra pas donner lieu au profit de l&apos;acheteur à :</p>
                    <ul className={styles.ul}>
                        <li>l&apos;allocation de dommages et intérêts</li>
                        <li>l&apos;annulation de la commande.</li>
                    </ul>
                    <p>Le risque du transport est supporté en totalité par l&apos;acheteur.</p>
                    <p>En cas de marchandises manquantes ou détériorées lors du transport, l&apos;acheteur
                        devra formuler toutes les réserves nécessaires sur le bon de commande à réception
                        desdites marchandises. Ces réserves devront être, en outre, confirmées par écrit
                        dans les cinq jours suivant la livraison, par courrier recommandé AR adressé à la
                        société.</p>

                    <h2 className={`${styles.h2} northgarden`}>Article 10 : Force majeure</h2>
                    <p>La responsabilité de la société <span className={styles.span}>NORTH GARDEN, Julien COURCOUX</span> ne pourra pas
                        être mise en œuvre si la non-exécution ou le retard dans l&apos;exécution de l&apos;une de ses
                        obligations décrites dans les présentes conditions générales de vente découle d&apos;un
                        cas de force majeure. À ce titre, la force majeure s&apos;entend de tout événement
                        extérieur, imprévisible et irrésistible au sens de l&apos;article 1148 du Code civil.</p>

                    <h2 className={`${styles.h2} northgarden`}>Article 11 : Droit de rétractation</h2>
                    <p>Conformément à l’article L 221-18 du code de la consommation, le client dispose
                        d’un délai de 14 jours à compter de la réception de ses produits pour exercer son
                        droit de rétractation.</p>
                    <p>Une distinction sera faite dans l’exercice du droit de rétractation entre les produits
                        périssables (produits floraux) et les produits non périssables.</p>
                    <p>Pour les produits non périssables, ce délai de rétractation court à compter de la
                        réception des produits. Seuls le prix des produits et les frais d’envoi seront
                        remboursés, les frais de retour restant à la charge du client. Après avoir actionné son
                        droit de rétractation dans les délais, le client devra alors retourner les produits sous
                        un délai de 14 jours à compter de l’exercice de son droit de rétractation, à ses frais et
                        en bon état, de sorte qu’ils puissent être commercialisés à neuf.</p>
                    <p>Pour exercer son droit de rétractation, conformément aux dispositions légales, le
                        Client doit utiliser le formulaire « Rétractation » consultable en ligne sur le site.</p>
                </div>

                <div className={styles.page}>
                    <p>Les produits périssables, conformément à l’article L 221-28 du code de la
                        consommation, le droit de rétractation ne peut être exercé. Sont concernés les
                        produits floraux et certains produits alimentaires, qui, de par leur nature périssable,
                        sont exclus du droit de rétractation.</p>
                    <p>L’exercice du droit de rétractation, <span className={styles.span}>NORTH GARDEN, Julien COURCOUX</span> procèdera
                        au remboursement des sommes versées (y compris frais de livraison) au plus tard
                        dans les 14 jours à compter de la date de notification de la décision de rétractation
                        par le Client, et selon le même moyen de paiement utilisé pour la commande. Cette
                        date de remboursement pourra être différée jusqu’à récupération du produit ou
                        jusqu’à réception de la preuve d’expédition par le client.</p>

                    <h2 className={`${styles.h2} northgarden`}>Article 12 : Garanties légales</h2>
                    <p><span className={styles.span}>NORTH GARDEN, Julien COURCOUX</span> est garant conformément à la loi, de la
                        conformité des produits au contrat. L’entreprise est à ce titre tenu des défauts de
                        conformité des produits vendus au contrat dans les conditions des articles L217-4 et
                        suivant du code de la consommation, et des défauts cachés de la chose vendue
                        dans les conditions prévues aux articles 1641 et suivant du code civil.</p>

                    <h2 className={`${styles.h2} northgarden`}>Article 13 : Tribunal compétent</h2>
                    <p>Tout litige relatif à l&apos;interprétation et à l&apos;exécution des présentes conditions générales
                        de vente est soumis au droit français.</p>
                    <p>À défaut de résolution amiable, le litige sera porté devant le Tribunal de commerce
                        d’EVREUX.</p>
                </div>
            </LayoutPolicy>
        </Layout>
    )
}
