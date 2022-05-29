import axios from "axios";

export class PostService {
    static async getAll(limit = 10, page = 1) {

        const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response;
    }

    static async getById(postId) {

        let url = `https://jsonplaceholder.typicode.com/posts/${postId}`

        const response = await axios.get(url)
        return response.data
    }

    static async getCommentsById(postId) {

        let url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`

        const response = await axios.get(url)
        return response.data
    }
}