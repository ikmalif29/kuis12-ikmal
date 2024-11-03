import { useState } from "react";
import Pagination from "./Pagnation";

function App() {

  const fruits = [
    {
      id: 1,
      name: "Mangosteen",
      color: "Purple",
      taste: "Sweet and Sour",
      origin: "Indonesia",
      image: "https://i.pinimg.com/564x/6b/6f/49/6b6f4915253bffd99df484d40a2315ad.jpg",
    },
    {
      id: 2,
      name: "Apple",
      color: "Red",
      taste: "Sweet",
      origin: "USA",
      image: "https://i.pinimg.com/236x/33/84/94/338494110e80eb6d0c1115c2b6c11857.jpg",
    },
    {
      id: 3,
      name: "Watermelon",
      color: "Green",
      taste: "Sweet",
      origin: "Africa",
      image: "https://i.pinimg.com/564x/50/27/6b/50276b50869bc5b67d983b90e93730a6.jpg",
    },
    {
      id: 4,
      name: "Pineapple",
      color: "Brown",
      taste: "Tart",
      origin: "Philippines",
      image: "https://i.pinimg.com/564x/bc/06/49/bc0649daae185ba8d464d10f86541687.jpg",
    },
    {
      id: 5,
      name: "Banana",
      color: "Yellow",
      taste: "Sweet",
      origin: "Ecuador",
      image: "https://i.pinimg.com/564x/d2/65/a9/d265a927e7ec20022e81a7974d75cecd.jpg",
    },
    {
      id: 6,
      name: "Orange",
      color: "Orange",
      taste: "Sour",
      origin: "Brazil",
      image:
        "https://i.pinimg.com/236x/ba/08/1c/ba081cc57aa5740bea7a541c7338c688.jpg",
    },
    {
      id: 7,
      name: "Grapes",
      color: "Purple",
      taste: "Sweet",
      origin: "Italy",
      image:
        "https://i.pinimg.com/564x/f5/61/1c/f5611c5020649a589ecfb7cb5d0555ca.jpg",
    },
    {
      id: 8,
      name: "Strawberry",
      color: "Red",
      taste: "Sweet",
      origin: "France",
      image:
        "https://i.pinimg.com/564x/1d/db/ea/1ddbeafa455b217abd693ff5346f80fd.jpg",
    },
    {
      id: 9,
      name: "Cherry",
      color: "Red",
      taste: "Sweet",
      origin: "Turkey",
      image:
        "https://i.pinimg.com/564x/f4/99/13/f49913dff3762b7c9ed8ab8ac24a289c.jpg",
    },
    {
      id: 10,
      name: "Kiwi",
      color: "Brown",
      taste: "Tangy",
      origin: "New Zealand",
      image:
        "https://i.pinimg.com/564x/ca/70/5c/ca705c4cfbb21895cc5d8637ba1cb955.jpg",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(fruits.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = fruits.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  
const click = (f) => {
  alert(`${f.name}
        ${f.taste}
        ${f.color}
  `)
}

  return (
    <>
      <main className="gap-11 flex flex-col bg-yellow-300 h-screen items-center">
        <h1 className="text-center text-5xl font-bold mt-6">Fruits Data</h1>
        <div className="flex w-full gap-6 justify-center">
          {currentItems.map((f) => (
            <div key={f.id} className="w-60 flex flex-col justify-center items-center h-64 gap-2">
              <div className="flex w-full h-56 overflow-hidden rounded-md justify-center">
                <img src={f.image} alt="" />
              </div>
              <h1 className="text-center text-3xl font-bold mt-6">{f.name}</h1>
              <button className="bg-indigo-500 rounded-md" onClick={()=> click(f)}>information</button>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
          />
        </div>
      </main>
    </>
  )
}

export default App;
