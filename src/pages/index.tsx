import Image from 'next/image';
import lacreiLogo from '../assets/header-logo-lacrei.svg'


export default function Home() {
  return (
    <div>
      <h1>Hello, world</h1>
      <Image src={lacreiLogo} alt="Logo da Lacrei Saúde" />
    </div>
  );
}
