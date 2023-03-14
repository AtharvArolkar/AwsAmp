import axios from "axios";
import { useEffect, useState } from "react";
import ISiteObject from "../interface/site-object";

const listArray: Array<ISiteObject> = [
  {
    id: "1",
    name: "Shopify",
    cm_name: "Kiran",
    pa_name: "Kiran",
    location:"Pune",
    status: "status1",
    
  },
  {
    id: "2",
    name: "Amazon",
    cm_name: "Aaron",
    pa_name: "Kiran",
    status: "status2",
    location:"Pune",
  },
  {
    id: "3",
    name: "Winx",
    cm_name: "Zucker",
    pa_name: "Kiran",
    status: "status3",
    location:"Pune",
  },
  {
    id: "4",
    name: "Groww",
    cm_name: "Vishal",
    pa_name: "Kiran",
    status: "status4",
    location:"Pune",
  },
  {
    id: "5",
    name: "SimiCart",
    cm_name: "Williams",
    pa_name: "Kiran",
    status: "status5",
    location:"Pune",
  },
  {
    id: "6",
    name: "Sag",
    cm_name: "Hawkins",
    pa_name: "Kiran",
    status: "status6",
    location:"Pune",
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
