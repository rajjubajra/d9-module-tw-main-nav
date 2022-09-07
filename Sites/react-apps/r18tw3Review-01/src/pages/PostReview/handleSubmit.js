import axios from 'axios';

export const usePost = ({title, body, rating, categories, setResponse, setError}) => {

  const postReview = async () => {
    try {
        await axios({
        method: 'POST',
        url: 'http://localhost:1337/api/reviews',
        data: {
          title: title,
          body: body,
          categories: categories,
          rating: rating
        }
      }).then(res => setResponse(res))
    } catch (error) {
        console.log("Error: ",error);
        setError(error);
    }
  }

  postReview();
}

