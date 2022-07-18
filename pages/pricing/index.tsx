import Link from 'next/link';
// @ts-ignore
import { MainLayout } from '../../components/Layouts/MainLayout';

const Pricing = () => {
  return (
    <MainLayout>
      <h1 className={'title'}>
        ir a <Link href='/'>Home</Link>
      </h1>

      <h1 className={'title'}>
        ir a <Link href='/about'>About</Link>
      </h1>

      <h1 className={'title'}>
        ir a <Link href='/contact'>Contact</Link>
      </h1>

      <p className={'description'}>
        Get started by editing
        <code className={'code'}>pages/pricing/index.tsx</code>
      </p>
    </MainLayout>
  );
};

export default Pricing;
