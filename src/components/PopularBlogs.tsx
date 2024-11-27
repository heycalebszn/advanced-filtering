import { MessageCircle, ThumbsUp } from "lucide-react"

const PopularBlogs = () => {
    const blogs = [
        {
            title: "My Amazing Blog Title 1",
            author: "Jordan",
            likes: 142,
            comments: 44,
        },
        {
            title: "My Amazing Blog Title 1",
            author: "Jordan",
            likes: 142,
            comments: 44,
        },
        {
            title: "My Amazing Blog Title 1",
            author: "Jordan",
            likes: 142,
            comments: 44,
        },
        {
            title: "My Amazing Blog Title 1",
            author: "Jordan",
            likes: 142,
            comments: 44,
        },
        {
            title: "My Amazing Blog Title 1",
            author: "Jordan",
            likes: 142,
            comments: 44,
        },
    ]
  return (
    <div className="bg-white p-5 w-[22rem] mt-4 border ml-5 rounded">
        <h2 className="text-xl font-bold mb-4">Popular Blogs</h2>
        <ul>
            {blogs.map((blog, index) => (
                <li key={index} className="mb-4">
                    <div className="flex justify-between items-center">
                        <span className="font-bold mb-2">{blog.title}</span>
                    </div>
                    <span className="text-gray-600">Publish by {blog.author}</span>
                    <div className="flex items-center mt-">
                        <MessageCircle size={16}/>
                        <span className="gray-500 mr-5 ml-1">{blog.likes}</span>

                        <ThumbsUp size={16} />
                        <span className="text-gray-500 mr-2 ml">
                            {blog.comments}
                        </span>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default PopularBlogs