import { signOut, useSession } from 'next-auth/react'

const MiniProfile = () => {
  const { data: session } = useSession()

  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
      {session && (
        <>
          <img
            className='rounded-full h-16 w-16 object-cover border p-[2px]'
            src={session?.user?.image}
            alt=''
          />
          <div className='flex-1 mx-4'>
            <h2 className='font-bold'>{session?.user?.username}</h2>
            <h3 className='text-sm text-gray-400'>Welcome to Instagram</h3>
          </div>
        </>
      )}

      <button onClick={signOut} className='text-blue-400 font-semibold text-sm'>
        Sign Out
      </button>
    </div>
  )
}

export default MiniProfile
