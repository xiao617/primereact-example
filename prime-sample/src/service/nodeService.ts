import axios from 'axios';
export class NodeService{
    async getData(){
        const res = await axios.get('/datas');
        //console.log(res);
        return "data" in res.data?res.data["data"]:[];
    }
}