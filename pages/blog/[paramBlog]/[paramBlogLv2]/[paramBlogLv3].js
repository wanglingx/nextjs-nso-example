import { useRouter } from "next/router";
const BlogParam3 = () => {
    const router = useRouter()
    console.log(router)
    return (
        <div>
            Page Blog: ParamBlogLv3
        </div>
    )
}

export default BlogParam3;