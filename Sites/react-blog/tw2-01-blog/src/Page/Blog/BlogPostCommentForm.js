import {useState} from 'react';
import ajax from '../../config/ajax';

function BlogPostCommentForm({nid}) {

  const [comment, setComment] = useState('');
  const [commentTitle, setCommentTitle] = useState('');
  const [submit, setSubmit] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault()

    const postComment ={

        "entity_id":   [{"target_id": `${nid}`}],
        "subject":     [{"value": `${commentTitle}`}],
        "entity_type": [{"value":"node"}],
        "comment_type":[{"target_id":"comment"}],
        "field_name":  [{"value":"comment"}],
        "comment_body":[{"value": `${comment}`,
                      "basic_html":"basic_html"}]
    }

    try{
      const axios = await ajax()// wait for initialized axios object
      const response = await axios.post('/comment', postComment)// wait for the POST AJAX request to complete
      console.log('Node created :', response.status)
      if(response.status === 201)
      {
        setCommentTitle('');
        setComment('');
        setSubmit(true);
      }
    }catch(e){
      alert(e)
    }
  }
  
  return (

    <div className="mt-10" >
        <div className={`${submit ? 'block flex justify-center' : 'hidden'}`}>
          <p className="text-xl">Thank you. Your comment has been submited</p>
        </div>
        <form onSubmit={handleSubmit} 
            className={`${submit ? 'hidden' : 'bock flex flex-col'}`}>
              <h1>Comment Form</h1>
              <div>
                <input type="text"
                  className="mb-3 border border-gray-600 p-3"
                  required
                  name="title"
                  onChange={(e)=>setCommentTitle(e.target.value)}
                  value={commentTitle}
                  placeholder="Title"
                />
              </div>
              <div>
                <textarea 
              className="mb-3 border border-gray-600 h-36 p-3"
              required
              name="comment"
              onChange={(e)=> setComment(e.target.value)}
              value={comment}
              placeholder="Comment.."
              ></textarea>
              </div>
              
              <input 
              className="border border-gray-600"
              type="submit"  
              name="submit" 
              value="Submit" />
        </form>
    </div>
  )
}

export default BlogPostCommentForm
