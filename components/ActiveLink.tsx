import { CSSProperties, FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'; // useRouter is a hook

interface Props {
  href: string;
  text: string;
}

const styles: CSSProperties = {
  color: '#00f',
  textDecoration: 'underline',
  textTransform: 'uppercase',
  letterSpacing: '1px',
};

export const ActiveLink: FC<Props> = ({ href, text }) => {
  // useRouter is a hook of Next.js que retorna un objeto con las propiedades de la ruta actual
  // asPath es la ruta actual

  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <a style={asPath === href ? styles : undefined}>{text}</a>
    </Link>
  );
};
