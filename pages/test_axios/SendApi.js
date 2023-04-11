import {useState, useEffect} from "react";
import axios from "axios";
import { useRouter } from "next/router";

import { FilterArray } from "../hook/use-hook";
const SendApi = () => {
    const router = useRouter();
    const [dataReturnAxios, setDataReturnAxios] = useState([]);
    const [dataSearch, setDataSearch] = useState('');


    const onChangeInputSearch = (e) => {
        setDataSearch(e.target.value);
    }

    const onClickSearch = (e) => {
        router.push({
            pathname: '/test_axios/SendApi',
            query: { q: dataSearch },
        });
    }

    const onClickResetSearch = (e) => {
        router.push({
            pathname: '/test_axios/SendApi',
            query: {},
        });
        setDataSearch('');
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                let dataParamSearch = '';
                if(typeof router.query.q !== 'undefined' && router.query.q != '') {
                    dataParamSearch = '?q=' + router.query.q
                }
                const res = await axios.get(`https://dev-apiregister.gdcatalog.go.th/tag/standard/search${dataParamSearch}`);
                // const res = await axios.get('https://dev-apiregister.gdcatalog.go.th/tag/standard/search' + dataParamSearch);
    
                // await axios.post(`/category/group`, {
                //     headers: {
                //         "Content-Type": "application/json",
                //         "Authorization": ""
                //     },
                //     data: {
                //         id: id
                //     }
                // });
                console.log(res);
                console.log(res.data);
                console.log(res.data.ResultSet);
                console.log(res.data.ResultSet.Result);

                console.log(FilterArray(res.data.ResultSet.Result, 'Name', 'YFP'));
                setTimeout(() => {
                    setDataReturnAxios(res.data.ResultSet.Result);
                }, 500);
            } catch (e) {
                console.log(e);
            }
        }

        fetchData();
    }, [router.query]);

    return (
        <div>
            <div>
                <div>
                    <label>ค้นหา : </label>
                    <input type="text" onChange={onChangeInputSearch} value={dataSearch}></input>
                </div>
                <div>
                    <button type="button" onClick={onClickSearch}>ค้นหา</button>
                    <button type="button" onClick={onClickResetSearch}>ล้างค่า</button>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ลำดับ</th>
                        <th>ชื่อ</th>
                    </tr>
                </thead>
                <tbody>
                    {dataReturnAxios.map((ele, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{ele.Name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default SendApi;