import { useRouter } from "next/router";
const BlogParams = () => {
    const router = useRouter()
    console.log(router)
    return (
        <div>
            Page Blog: ParamBlogLv2 index
        </div>
    )
}

export default BlogParams;

