const moment = require('moment');
import { useInfiniteQuery } from '@tanstack/react-query';

export default function postCard({id ,owner , date , title , content}){
    return(
   
        <a href="#" class="block max-w p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class=" rtl mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" dir='rtl' >{title}gg </h5>
    <p class="rtl font-normal text-gray-700 dark:text-gray-400" dir='rtl'>{content}</p>
        <span class="bg-purple-100 text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">{owner}</span>
    <span class="bg-purple-100 text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">{moment(date).format('YYYY-MM-DD')}</span>

</a>
      
)
}