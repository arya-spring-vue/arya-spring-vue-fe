import httpClient from './httpclient';

const client = httpClient.requestGroup();

export default {
    createStudent(reqData: object){
        return client.post({url:'/redis/createStudent', reqData })
    },
    readStudents(reqData: object){
        return client.get({url:'/redis/readStudents', reqData })
    },
}