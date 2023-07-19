import Image from 'next/image'
import { prisma } from '@/lib/prisma';
export default async function Home() {
const posts = await prisma.Post.findMany();
const moment = require('moment');

  //server
  return (
    
    <main className=" space-y-4 flex-col items-center justify-between p-24">
    {posts.map((posts) => {
      return(
        <a href="#" class="block max-w p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class=" rtl mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" dir='rtl' > {posts.title}</h5>
    <p class="rtl font-normal text-gray-700 dark:text-gray-400" dir='rtl'>{posts.content}</p>
        <span class="bg-purple-100 text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">{posts.owner}</span>
    <span class="bg-purple-100 text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">{moment(posts.date).format('YYYY-MM-DD')}</span>

</a>
      )
    })}


    </main>
  )
}
