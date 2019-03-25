import axios from 'axios';
import masterConfig from '../config/master';

interface methodInterface {
    method: string,
    dataType: string,
}

interface urlInterface {
    url: string,
    reqData: object,
}

const responseHandler = (response: any)=> {
    const status = response.status;
    const data = response.data;
    if( status===200 ){
        return {
            status,
            data,
        };
    } else {
        const err = new Error('服务请求错误');
        switch(status) {
            case 400: err.message = '请求错误(400)';break;
            case 401: err.message = '未授权，请重新登录(401)';break;
            case 403: err.message = '拒绝访问(403)';break;
            case 404: err.message = '请求错误(404)';break;
            case 408: err.message = '服务器错误(500)';break;
            case 501: err.message = '服务器未实现(501)';break;
            case 502: err.message = '网络错误(503)';break;
            case 503: err.message = '服务不可用(503)';break;
            case 504: err.message = '网络超时(504)';break;
        }
        return {
            status,
            err
        }
    }
};

const redirect = (url: string) => {
    window.location.replace(`${masterConfig.ARYA_SPRING_VUE_BE}${url}`);
};

const generateRequest = ({method, dataType}: methodInterface) => ( {url, reqData}: urlInterface ) => {
    let restUrl;
    if(method==='put'){
        restUrl = `${masterConfig.ARYA_SPRING_VUE_BE}${url}/${reqData.id}`;
    }else{
        restUrl = `${masterConfig.ARYA_SPRING_VUE_BE}${url}`;
    }
    const options = {
        method,
        url: restUrl,
        [dataType]: reqData,
        withCredentials: true,
    };
    return new Promise((resolve, reject) => {
        axios.request(options).then((response)=>{
            const {status ,data, err} = responseHandler(response);
            if(status===200){
                resolve(data);
            }
            if(err&&status===401){
                setTimeout(()=>{
                    redirect('/home')
                },1000)
            }else{
                reject(err);
            }
        })
    })
};

export default {
    requestGroup() {
        return {
            post: generateRequest({method:'post', dataType:'data'}),
            get: generateRequest({method:'get', dataType: 'params'}),
            put: generateRequest({method:'put', dataType:'data'}),
        }
    }
}