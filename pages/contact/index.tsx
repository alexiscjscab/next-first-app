import Link from 'next/link';
// @ts-ignore
import { MainLayout } from '../../components/Layouts/MainLayout';

export default function Contact() {
  return (
    <MainLayout>
      <h1 className={'title'}>
        Ir a <Link href='./'> Home </Link>
      </h1>

      <h1 className={'title'}>
        Ir a<Link href='/about'> About </Link>
      </h1>

      <p className={'description'}>
        Get started by editing
        <code className={'code'}>pages/contact/.jsx</code>
      </p>
    </MainLayout>
  );
}
