import { useRouter } from "next/router";
const BlogParamIndex = () => {
    const router = useRouter()
    console.log(router)
    return (
        <div>
            Page Blog: ParamBlogLv3 index
        </div>
    )
}

export default BlogParamIndex;