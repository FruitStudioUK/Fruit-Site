import { useRouter } from 'next/router';

export default function RoleSelector() {
  const router = useRouter();

  const handleSelect = (role: 'creator' | 'brand') => {
    localStorage.setItem('userRole', role);
    router.push('/home'); // or wherever your main page lives
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>Who are you?</h2>
      <button onClick={() => handleSelect('creator')}>I'm a Creator</button>
      <button onClick={() => handleSelect('brand')}>I'm a Brand</button>
    </div>
  );
}
