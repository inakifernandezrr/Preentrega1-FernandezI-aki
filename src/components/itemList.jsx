import React from "react";

const itemList = () => {
  const data = [
    {
      id: "01",
      name: "Shuriken black",
      description:
        "Remera con un corte amplio y suelto, diseñado para proporcionar comodidad y estilo, confeccionada en 100% algodón, estampado en serigrafia",
      stock: 8,
    },
    {
      id: "02",
      name: "Shuriken White",
      description:
        "Remera con un corte amplio y suelto, diseñado para proporcionar comodidad y estilo, confeccionada en 100% algodón, estampado en serigrafia",
      stock: 3,
    },
    {
      id: "03",
      name: "Logo black ",
      description:
        "Remera con un corte amplio y suelto, diseñado para proporcionar comodidad y estilo, confeccionada en 100% algodón, estampado en serigrafia",
      stock: 3,
    },
    {
      id: "04",
      name: "Logo white",
      description:
        "Remera con un corte amplio y suelto, diseñado para proporcionar comodidad y estilo, confeccionada en 100% algodón, estampado en serigrafia",
      stock: 4,
    },
  ];



  const getDatos = () => {
    return new Promise ((resolve, reject) => {
        if(datos.legth === 0) {
            reject(new Error ("no hay datos"));
        }
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });
}  

    async function  fetchningdata () {
        try {
            const datosfetched = await getDatos();
            console.log(datosfetched);
        }   catch(err) {
            console.log(err);
        }
    }

    fetchningdata();
   

  return <div></div>;
};

export default itemList;
