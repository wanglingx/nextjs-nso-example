// USE REACT //
import {useState, useEffect} from "react";
// USE REACT //
import Link from "next/link";
const Blog = () => {
    const [dataParamBlog, setDataParamBlog] = useState(1);
    const [dataParamBlogLv2, setDataParamBlogLv2] = useState(2);
    const [dataParamBlogLv3, setDataParamBlogLv3] = useState(3);

    let dataParamNotUseState = 1;

    const [isEffectClickReset, setDataIsEffectClickReset] = useState(false);

    const onChangeParamBlog = (e) => {
        setDataParamBlog(e.target.value);
    }

    const onChangeParamBlogLv2 = (e) => {
        setDataParamBlogLv2(e.target.value);
    }

    const onChangeParamBlogLv3 = (e) => {
        setDataParamBlogLv3(e.target.value);
    }

    const onChangeParamBlogNotUseState = (e) => {
        dataParamNotUseState = e.target.value
        console.log(dataParamNotUseState);
    }

    const clearUseState = () => {
        setDataIsEffectClickReset((isEffectClickReset ? false : true));
    }


    const resetDataParam = () => {
        setDataParamBlog(1);
        setDataParamBlogLv2(2);
        setDataParamBlogLv3(3);
    }

    useEffect(() => {
        console.log('start Use Effect');
        console.log('การเปลี่ยนแปลงของค่า isEffectClickReset : ', isEffectClickReset);
        resetDataParam();
        console.log('หลังจากที่ set Use State เรียบร้อยแล้ว : ', dataParamBlog, dataParamBlogLv2, dataParamBlogLv3);
    }, [isEffectClickReset]);


    useEffect(() => {
        console.log('useEffect ทำงานตอนเปลี่ยนค่า dataParamBlog');
    }, [dataParamBlog]);
    
    useEffect(() => {
        console.log('useEffect ทำงานตอนเปลี่ยนค่า dataParamBlogLv2');
    }, [dataParamBlogLv2]);

    useEffect(() => {
        console.log('useEffect ทำงานตอนเปลี่ยนค่า dataParamBlogLv3');
    }, [dataParamBlogLv3]);
    // console.log('หลังจากที่ set Use State (ภายนอก USE EFFECT) เรียบร้อยแล้ว : ', dataParamBlog, dataParamBlogLv2, dataParamBlogLv3);
    
    return (
        <div>
            <div>Config Param</div>
            <div>
                <label>กำหนดค่า Param Blog</label>
                <input type="text" onChange={onChangeParamBlog} value={dataParamBlog}></input>
                ค่าของ dataParamBlog = {dataParamBlog}
            </div>
            <div>
                <label>กำหนดค่า Param Blog Lv2</label>
                <input type="text" onChange={onChangeParamBlogLv2} value={dataParamBlogLv2}></input>
                ค่าของ dataParamBlogLv2 = {dataParamBlogLv2}
            </div>
            <div>
                <label>กำหนดค่า Param Blog Lv3</label>
                <input type="text" onChange={onChangeParamBlogLv3} value={dataParamBlogLv3}></input>
                ค่าของ dataParamBlogLv3 = {dataParamBlogLv3}
            </div>

            <div>
                <label>กำหนดค่า Param Blog โดยไม่ใช้งาน Use State</label>
                <input type="text" onChange={onChangeParamBlogNotUseState}></input>
                ค่าของ dataParamNotUseState = {dataParamNotUseState}
            </div>

            <button onClick={clearUseState}>ล้างค่า DataParam (Use State)</button>

            <div style={{marginTop: '30px;'}}>Page Blog</div>
            <div>
                <Link href={`/blog/${dataParamBlog}`}>Page Blog ParamBlog</Link>
            </div>
            <div>
                <Link href={`/blog/${dataParamBlog}/${dataParamBlogLv2}`}>Page Blog ParamBlogLv2</Link>
            </div>
            <div>
                <Link href={`/blog/${dataParamBlog}/${dataParamBlogLv2}/${dataParamBlogLv3}`}>Page Blog ParamBlogLv3</Link>
            </div>
        </div>
    )
}

export default Blog;