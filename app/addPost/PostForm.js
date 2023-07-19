
import styles from './addPost.module.css'
import addPost from './page';
import {prisma} from '@/lib/prisma'
import { redirect } from 'next/navigation';
export function PostForm(){
    
  async function addPost(formData){
    'use server';
    const data = {
      title : formData.get('title'),
      content : formData.get('content'),
      owner : formData.get('owner'),
      date : (new Date()).toISOString()
        }

        await prisma.Post.create({
          data
        })
        redirect('/')
  }
       

    return(
        <div>
          <form action={addPost}>
              <main className=" space-y-4 flex-col items-center justify-between p-24">

        <input type="text" name="owner" class=" max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" dir='rtl' placeholder="الاسم" required></input>
      <input type="text" name="title" class=" max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" dir='rtl' placeholder="عنوان البوست" required></input>

     <textarea  name="content" rows="4" class="text-right  max-w-md p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
     <button type="submit" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">POST</button>

    </main>
    </form>
      </div>
    )

}