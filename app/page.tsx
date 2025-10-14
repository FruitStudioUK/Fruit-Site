import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services'; 
import { Portfolio } from '@/components/Portfolio';
import { Contact } from '@/components/Contact';
import RoleSelector from '../components/RoleSelector';


export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Contact />
    </div>
  );
}
