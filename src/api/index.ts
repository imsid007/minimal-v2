import { CreateClubInterface } from "src/@types/club";
import axiosInstance from "src/utils/axios";

async function fetchData(url:string, params:any = null){
    try{
        const response = await axiosInstance.get(url, {params:params});
        return response.data;
    }catch(e){
        throw e;
    }
}

async function postData(url:string, data:any){
    try{
        const response = await  axiosInstance.post(url, {...data});
        return response.data;
    }catch(e){
        throw e;
    }
}

export async function getCategoriesAPI(){
    return await fetchData('/clubs/categories');
}

export async function createClubAPI(data:CreateClubInterface){
    return await postData('/clubs', data);
}