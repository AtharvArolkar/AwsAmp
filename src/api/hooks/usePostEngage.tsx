import axios from "axios";
import { useEffect } from "react";
import IengagementRequest from "../interface/engagement-request";

function usePostEngage(data:IengagementRequest){
    useEffect(()=>{
        console.log("hOOK")
        axios({
            method: 'post',
            url: '/api/v1/engagement/request',
            headers: {}, 
            data: {
              foo: data, // This is the body part
            }
          })
          .then(response => {
            // this.setState({data:response.data});
            console.log(response);
            return response;
        });
    })

}

export default usePostEngage;