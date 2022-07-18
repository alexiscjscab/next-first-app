import Link from 'next/link';
// @ts-ignore
import { MainLayout } from '../components/Layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <h1 className={'title'}>
        Ir a <Link href='/about'> About </Link>
      </h1>

      <h1 className={'title'}>
        Ir a<Link href='/contact'> Contact </Link>
      </h1>

      <p className={'description'}>
        Get started by editing
        <code className={'code'}>pages/index.jsx</code>
      </p>
    </MainLayout>
  );
}
