import {redirect} from 'react-router-dom';
import { delete_article } from '../../../functions/delete';

export async function action({params}){
  await delete_article('/jsonapi/node/article',params.uuid);
  return redirect('/articles');
}