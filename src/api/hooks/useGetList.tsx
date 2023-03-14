import axios from "axios";
import { useEffect, useState } from "react";
import ISiteObject from "../interface/site-object";

const listArray: Array<ISiteObject> = [
  {
    id: "1",
    name: "Shopify",
    cm_name: "Kiran",
    phone: "123456789",
    email: "site1@email.com",
    status: "status1",
  },
  {
    id: "2",
    name: "Amazon",
    cm_name: "Aaron",
    phone: "123456789",
    email: "site2@email.com",
    status: "status2",
  },
  {
    id: "3",
    name: "Winx",
    cm_name: "Zucker",
    phone: "123456789",
    email: "site3@email.com",
    status: "status3",
  },
  {
    id: "4",
    name: "Groww",
    cm_name: "Vishal",
    phone: "123456789",
    email: "site4@email.com",
    status: "status4",
  },
  {
    id: "5",
    name: "SimiCart",
    cm_name: "Williams",
    phone: "123456789",
    email: "site5@email.com",
    status: "status5",
  },
  {
    id: "6",
    name: "Sag",
    cm_name: "Hawkins",
    phone: "123456789",
    email: "site6@email.com",
    status: "status6",
  },
];
const useGetList = (filter:string) => {
  const [data, setData] = useState(getSorted(filter));
  useEffect(() => {
    axios
      .get("/api/v1/sites?status=")
      .then(function (response) {
        //   return response;
        // return listArray;
        setData(response.data);
      })
      .catch(function (error) {
        //   console.log(error);
        // return listArray;
      })
      .finally(function () {});
  });
  return listArray;
};


function getSorted(filter:string):ISiteObject[]{
  if(filter==="Site Name"){return listArray.sort((a, b) => a.name.localeCompare(b.name))}
  else if(filter==="Manager"){return listArray.sort((a, b) => a.cm_name.localeCompare(b.cm_name))}
  else if(filter==="Status"){return listArray.sort((a, b) => a.status.localeCompare(b.status))}
  else return listArray.sort((a, b) => a.id.localeCompare(b.id))
  
}


export default useGetList;
