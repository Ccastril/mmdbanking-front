import axios from 'axios';

//do you want a class?
//is there anything to intialize?

export const loginUser = async(username:any, password:any): Promise<any> => {
    try {
        const response = await axios.post('http://localhost:8080/mmdbanking/users/login', {
            username:username,
            password:password
        });
        console.log("this is the response of calling out java ", response);
        return response.data;
    }catch(error) {
        console.error(error);
    }
}