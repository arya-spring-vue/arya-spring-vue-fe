import httpClient from './httpclient';

const client = httpClient.requestGroup();

export default {
    createUser(reqData: object){
        return client.get({url:'/spring/vue/createUser', reqData })
    },
    readUsers(reqData: object){
        return client.get({url:'/spring/vue/readUsers', reqData })
    }
}