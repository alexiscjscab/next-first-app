import Link from 'next/link';
import { DarkLayout } from '../components/layouts/DarkLayout';
// @ts-ignore
import { MainLayout } from '../components/Layouts/MainLayout';

export default function About() {
  return (
    <>
      <h1 className={'title'}>
        Ir a <Link href='/'> Home </Link>
      </h1>

      <h1 className={'title'}>
        Ir a <Link href='/contact'> Contact </Link>
      </h1>

      <p className={'description'}>
        Get started by editing
        <code className={'code'}>pages/about.jsx</code>
      </p>
    </>
  );
}

About.getLayout = (page: JSX.Element) => {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
