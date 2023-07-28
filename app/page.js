import Image from 'next/image'
import {postCard} from '@/components/home/postCard'
export default async function Home() {
const posts = await fetch('http://localhost:3000/api/getPosts').then((res)=> res.json())
console.log(posts)
  //server
  return (
    <main className=" space-y-4 flex-col items-center justify-between p-24">
    {posts.map((posts) => {
      return(
    <postCard posts={posts}/>
    
    )
    })}
    


    </main>
  )
}
