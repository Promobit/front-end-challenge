import { useEffect, useState } from "react";
import axios from "axios";


export const useRequestData = (url) => {
   const [data, setData] = useState();

   useEffect(() => {
      axios
         .get(url)
         .then((response) => {
            setData(response.data);
         })
         .catch((error) => {
         });
   }, [url]);

   return [data];
};

export const useRequestData2 = (url) => {
   const [data, setData] = useState();

   useEffect(() => {
      axios
         .get(url)
         .then((response) => {
            setData(response.data);
         })
         .catch((error) => {
            console.log(error);
            alert("Ocorreu um erro, tente novamente");
         });
   }, []);

   return [data];
};