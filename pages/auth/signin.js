import { getProviders, signIn as SignIntoProvider } from 'next-auth/react'
import Header from '../../components/Header'

function signIn({ providers }) {
  return (
    <>
      <Header />

      <div className='flex flex-col items-center justify-center min-h-screen py-2 px-14 text-center'>
        <img
          className='w-60 h-60'
          src='https://res.cloudinary.com/minakshi-nayak/image/upload/v1635773520/samples/instagram/Instagram_icon.png_n5qgyj.webp'
          alt='logo'
        />
        <p className='font-xs italic pt-2'>
          This is not REAL app, this is built for educational purpose only
        </p>
        <div className='mt-20'>
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className='p-3 bg-blue-500 text-white rounded-lg'
                onClick={() =>
                  SignIntoProvider(provider.id, { callbackUrl: '/' })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}

export default signIn
