import { collection, onSnapshot, orderBy, query } from '@firebase/firestore'
import { useState, useEffect } from 'react'
import { db } from '../firebase'
import Post from './Post'

// const posts = [
//   {
//     id: 123,
//     userName: 'minakshinayak',
//     userImg:
//       'https://res.cloudinary.com/minakshi-nayak/image/upload/v1635312910/samples/instagram/20191126_103550_adwmcp.jpg',
//     img: 'https://res.cloudinary.com/minakshi-nayak/image/upload/v1635312910/samples/instagram/20191126_103550_adwmcp.jpg',
//     caption: 'subscribe and destroy the like button',
//   },
//   {
//     id: 456,
//     userName: 'minakshinayak',
//     userImg:
//       'https://res.cloudinary.com/minakshi-nayak/image/upload/v1635312910/samples/instagram/20191126_103550_adwmcp.jpg',
//     img: 'https://res.cloudinary.com/minakshi-nayak/image/upload/v1635312910/samples/instagram/20191126_103550_adwmcp.jpg',
//     caption: 'subscribe and destroy the like button',
//   },
// ]

const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(
    () =>
      // return () => {
      //   unsubscribe()
      // }
      //return unsubscribe
      onSnapshot(
        query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
        (snapshot) => {
          setPosts(snapshot.docs)
        }
      )[db]
  )

  return (
    <div>
      {posts?.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          userName={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  )
}
// export async function getSeverSideProps() {
//   const posts = await onSnapshot(
//     query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
//     (snapshot) => {
//       setPosts(snapshot.docs)
//     }
//   )
//   return {
//     props: {
//       posts,
//     },
//   }
// }

export default Posts
