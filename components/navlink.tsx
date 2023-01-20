import styles from './Header/header.module.css';
import stylesMobile from './Header/HeaderMobile/HeaderMobileBottom/headerMobileBottom.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  title: string;
  mobile?: boolean;
  onClick?: React.MouseEventHandler;
}

export default function NavLink({ href, children, className, title, mobile, onClick }: Props) {
  const router = useRouter();
  const isActive = router.pathname === href;
  return (
    <Link href={href} className={isActive ? !mobile ? `${className} ${styles.active}` : `${className} ${stylesMobile.active}` : className} title={title} onClick={onClick}>
      {children}
    </Link>
  );
}
