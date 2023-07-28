import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/dist/client/link';
import { prisma } from '@/lib/prisma';
import Trigger from './trigger';
const moment = require('moment');


export default async function Home({searchParams}) {
 const page =  typeof searchParams.page === 'string' ? Number(searchParams.page) : 1
 const limit =typeof searchParams.limit === 'string' ? Number(searchParams.limit) : 5

 console.log(page + "dddddddddddddddddd")
const posts = await prisma.Post.findMany({
  take: limit,
  skip: (page-1)*limit ,
});

  //server
  return (
    
    <main className=" space-y-4 flex-col items-center justify-between p-24">
      
<div className='flex space-x-6'>
            <Link
              href={{
                pathname: '/',
                query: {
                  page: page > 1 ? page - 1 : 1
                }
              }}
              className={clsx(
                'rounded border bg-gray-100 px-3 py-1 text-sm text-gray-800',
                page <= 1 && 'pointer-events-none opacity-50'
              )}
            >
              Previous
            </Link>
            <Link
              href={{
                pathname: '/',
                query: {
                  page: page + 1
                }
              }}
              className='rounded border bg-gray-100 px-3 py-1 text-sm text-gray-800'
            >
              Next
            </Link>
          </div>

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
    <Trigger limit={limit}></Trigger>


    </main>
  )
}
