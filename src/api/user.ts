import httpClient from './httpclient';

const client = httpClient.requestGroup();

export default {
    createUser(reqData: object){
        return client.post({url:'/spring/vue/createUser', reqData })
    },
    readUsers(reqData: object){
        return client.get({url:'/spring/vue/readUsers', reqData })
    },
    updateUser(reqData: object){
        return client.put({url:'/spring/vue/updateUser', reqData })
    }
}