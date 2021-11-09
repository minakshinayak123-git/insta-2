import { useState, useEffect } from 'react'
import faker from 'faker'

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    const data = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))

    setSuggestions(data)
  }, [])

  return (
    <div className='mt-4 ml-10'>
      <div className='flex justify-between text-sm mb-5'>
        <h3 className='text-sm font-bold text-gray-400'>Suggestions for you</h3>
        <button className='text-gray-600 font-semibold cursor-pointer'>
          See All
        </button>
      </div>
      {suggestions.map((profile) => (
        <div
          key={profile.id}
          className='flex justify-between items-center mt-4'
        >
          <img
            className='rounded-full h-10 w-10 p-[2px] border'
            src={profile.avatar}
            alt=''
          />
          <div className='ml-4 flex-1'>
            <h2 className='font-semibold text-sm'>{profile.username}</h2>
            <h3 className='text-sm text-gray-400'>
              Works at {profile.company.name}
            </h3>
          </div>
          <button className='text-blue-400 text-xs font-bold'>Follow</button>
        </div>
      ))}
    </div>
  )
}

export default Suggestions
