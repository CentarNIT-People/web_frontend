import axios from "axios";
import { useEffect, useState } from "react";

interface useDataInterface {
    category: string;
}

export const useData = (props: useDataInterface) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`https://orxdmz.deta.dev/${props.category}/`).then((r) => {
            setData(r.data);
            console.log(r.data);
        });
    }, [props.category]);
    return { data };
};
