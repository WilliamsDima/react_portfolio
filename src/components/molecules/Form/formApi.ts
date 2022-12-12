import axios from "axios";

const instance = {
    baseURL: 'https://api.telegram.org/bot',
    key: process.env.REACT_APP_TG_KEY,
    chatId: process.env.REACT_APP_TG_ID
}



interface IForm {
    name: string
    email: string
    text: string
}

export const formAPI = {

    form( data: IForm ) {
        let n =  'Имя пользователя: ' +  data.name +  '          ';

        let e =  'Email: ' + data.email + '          ';

        let m =  'Сообщение: ' +  data.text;

        return axios.post(instance.baseURL + instance.key + '/sendMessage?chat_id=' + instance.chatId + '&parse_mode=html&text=' 
        + n + e + m);
    }
};