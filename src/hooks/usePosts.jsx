import { useMemo } from "react"

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(()=>{
        return sort 
            ? [...posts].sort((a,b) => {return a[sort].localeCompare(b[sort])})
            : posts
    }, [sort, posts])

    return sortedPosts;
}

export const usePosts = (posts, sort, query) => {

    const sortedPosts = useSortedPosts(posts, sort)

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedPosts])

    return sortedAndSearchedPosts;
}