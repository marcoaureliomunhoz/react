
import Image from 'next/image';
import appNlwCopaPreview from '../assets/app-nlw-copa-preview.png';
import logoImg from '../assets/logo.svg';
import usersAvatarExample from '../assets/users-avatar-example.png';
import iconCheck from '../assets/icon-check.svg';
import { api } from '../lib/axios';
import { FormEvent, useState } from 'react';

interface HomeProps {
  poolCount: number;
  guessCount: number;
  userCount: number;
}

export default function Home(props: HomeProps) {

  const [poolTitle, setPoolTitle] = useState('');

  return (
    <div className='max-w-[1124px] h-screen mx-auto grid grid-cols-2 items-center gap-28'>
      <main>
        <Image src={logoImg} alt='Logo' quality={100} />
        
        <h1 className='mt-14 text-white text-5xl font-bold leading-tight'>
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </h1>

        <div className='mt-10 flex items-center gap-2'>
          <Image src={usersAvatarExample} alt='Avatar de exemplo de usuários' quality={100} />
          <strong className='text-gray-100 text-xl'>
            <span className='text-ignite-500'>+{props.userCount}</span> pessoas já estão usando
          </strong>
        </div>

        <form onSubmit={createPool} className='mt-10 flex gap-2'>
          <input 
            className='flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm text-gray-100'
            type='text'
            required
            placeholder='Qual nome do seu bolão?'
            onChange={event => setPoolTitle(event.target.value)}
            value={poolTitle}
          />
          <button
            className='bg-yellow-500 px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase hover:bg-yellow-700'
            type='submit'
          >criar meu bolão</button>
        </form>

        <p className='mt-4 text-sm text-gray-300 leading-relaxed'>
          Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas 🚀
        </p>

        <div className='mt-10 pt-10 border-t border-gray-600 flex justify-between items-center text-gray-100'>
          <div className='flex items-center gap-6'>
            <Image src={iconCheck} alt='Ícone de check' quality={100} />
            <div className='flex flex-col'>
              <span className='font-bold text-xl'>+{props.poolCount}</span>
              <span>Bolões criados</span>
            </div>
          </div>
          <div className='w-px h-14 bg-gray-600'></div>
          <div className='flex items-center gap-6'>
            <Image src={iconCheck} alt='Ícone de check' quality={100} />
            <div className='flex flex-col'>
              <span className='font-bold text-xl'>+{props.guessCount}</span>
              <span>Palpites enviados</span>
            </div>
          </div>
        </div>
      </main>
      <Image
        src={appNlwCopaPreview}
        alt='Dois celulares exibindo uma prévia da aplicação móvel do NLW Copa'
        quality={100}
      />
    </div>
  );

  async function createPool(event: FormEvent) {
    event.preventDefault();
    try {
      const response = await api.post('pools', {
        title: poolTitle
      });

      const { code } = response.data;

      await navigator.clipboard.writeText(code);

      setPoolTitle('');

      alert('Bolão criado com sucesso. O código está na área de transferência!');
    } catch (err) {
      console.log(err);
      alert('Falha ao criar o bolão, tente novamente!');
    }
  }
}

export const getServerSideProps = async () => {
  const [
    poolCountResponse,
    guessCountResponse,
    userCountResponse
  ] = await Promise.all([
    api.get('pools/count'),
    api.get('guesses/count'),
    api.get('users/count')
  ])
  return {
    props: {
      poolCount: poolCountResponse.data.count,
      guessCount: guessCountResponse.data.count,
      userCount: userCountResponse.data.count
    }
  }
}