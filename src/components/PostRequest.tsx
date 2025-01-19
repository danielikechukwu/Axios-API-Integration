import axios from "axios"
import { IData } from "../IData.interface"

const PostRequest = () => {

    const createNewPost = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: 'New Post',
            body: 'This is the content of the new post.',
            userId: 1,
        } as IData)
        .then((response) => { console.log("Post created : ", response.data)})
        .catch((error: Error) => { console.log("An error occurred : ", error) })
    }

  return (
    <div>
     <button onClick={createNewPost}>Create Post</button>;
    </div>
  )
}

export default PostRequest