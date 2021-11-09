import faker from 'faker'
import { useState, useEffect } from 'react'
import Story from './Story'
import { useSession } from 'next-auth/react'

const Stories = () => {
  const [suggestions, setSuggestions] = useState([])
  const { data: session } = useSession()

  useEffect(() => {
    const data = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))
    setSuggestions(data)
  }, [])

  return (
    <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black'>
      {session && (
        <Story avatar={session.user.image} username={session.user.username} />
      )}
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          avatar={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  )
}

export default Stories
