// import React from "react";
// import { useQuery, gql } from "@apollo/client";
// import { Link } from "react-router-dom";

// const GET_CHARACTERS = gql`
//   query GetCharactersList{
//     characters {
//       results {
//         id
//         name
//         status
//         species
//         image
//         location {
//           name
//         }
//       }
//     }
//   }
// `;

// const CharacterList = () => {
//   const { loading, error, data } = useQuery(GET_CHARACTERS);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <>
//       <div>
//       <h2 classNameName="text-center mt-5 text-black">Rick and Morty Characters</h2>
//         <div classNameName="container-fluid mt-3">
//           <div classNameName="row text-center ">
//           {/* text-center */}
//           {data.characters.results.map((character) =>{
//               return (
//                 <div classNameName="col-10 col-md-4 mt-5">
//                   <div classNameName="card p-2">
//                     <div classNameName="d-flex align-items-center">
//                       <div classNameName="image">
//                         <img
//                           src={character.image} alt={character.name}
//                           classNameName="rounded"
//                           width="200"
//                         />
//                       </div>
//                       <div classNameName="ml-5 w-200">
//                         <div classNameName="">
//                     <h3>{character.name}</h3>
//                     <p>Status: {character.status}</p>
//                     <p>Species: {character.species}</p>
//                     <p>Location: {character.location.name}</p>
//                   <Link classNameName="button" to={`/characters/${character.id}`}>More Info</Link>
//                   </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CharacterList;



import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import logo from "./images/logo2.png";

const GET_CHARACTERS = gql`
  query GetCharactersList {
    characters {
      results {
        id
        name
        status
        species
        image
        location {
          name
        }
      }
    }
  }
`;

const CharacterList = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);
  const [searchTerm, setSearchTerm] = useState("");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const filteredCharacters = data.characters.results.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div>
        <div className="container-fluid mt-4">
          <div className="row rows d-flex align-items-center">
            <div className="col-auto">
              <img
                className="imgs"
                src={logo}
                alt="Rick and Morty Logo"
                width="60"
              />
            </div>
            <div className="col-auto">
              <h2 className="text-black m-0">Rick and Morty Characters</h2>
            </div>
          </div>
        </div>

        <div className="container">
          <form action="" className="search-bar">
            <input
              className="q"
              type="text"
              placeholder="Search character........"
              value={searchTerm}
              onChange={handleChange}
            />
            <button type="submit">
              <AiOutlineSearch />
            </button>
          </form>
        </div>

        <div className="container-fluid mt-3">
          <div className="ml-5 row text-center">
            {filteredCharacters.map((character) => {
              return (
                <div className="col-10 col-md-4 mt-5" key={character.id}>
                  <div className="card p-2">
                    <div className="d-flex align-items-center">
                      <div className="image">
                        <img
                          src={character.image}
                          alt={character.name}
                          className="rounded"
                          width="200"
                        />
                      </div>
                      <div className="ml-5 w-200">
                        <div className="">
                          <h3>{character.name}</h3>
                          <p>Status: {character.status}</p>
                          <p>Species: {character.species}</p>
                          <p>Location: {character.location.name}</p>
                          <Link
                            className="button"
                            to={`/characters/${character.id}`}
                          >
                            More Info
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CharacterList;








//..search bar
// import React, { useState } from "react";
// import { useQuery, gql } from "@apollo/client";
// import { Link } from "react-router-dom";
// import { AiOutlineSearch } from "react-icons/ai";
// // import logo from "./images/logo.png";
// // import logo from "./images/logo1.png";
// import logo from "./images/logo2.png";

// const GET_CHARACTERS = gql`
//   query GetCharactersList {
//     characters {
//       results {
//         id
//         name
//         status
//         species
//         image
//         location {
//           name
//         }
//       }
//     }
//   }
// `;

// const CharacterList = () => {
//   const { loading, error, data } = useQuery(GET_CHARACTERS);
//   const [searchTerm, setSearchTerm] = useState("");

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   const filteredCharacters = data.characters.results.filter((character) =>
//     character.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   return (
//     <>
//       <div>
//         {/* <img src={logo} alt="Rick and Morty Logo" width="100"  />
//         <h2 classNameName="text-center mt-5 text-black">
//           Rick and Morty Characters
//         </h2> */}

//         {/* <div classNameName="container text-center mt-4">
//           <div classNameName="row">
//             <div classNameName="col">
//               <img src={logo} alt="Rick and Morty Logo" width="100" />
//             </div>
//             <div classNameName="col">
//               <h2 classNameName="text-black">Rick and Morty Characters</h2>
//             </div>
//           </div>
//         </div> */}

//         {/* <div classNameName="container-fluid mt-4">
//         <div classNameName="row d-flex align-items-center">
//           <div classNameName="col">
//             <img src={logo} alt="Rick and Morty Logo" width="100" />
//           </div>
//           <div classNameName="col">
//             <h2 classNameName="text-black m-0">Rick and Morty Characters</h2>
//           </div>
//         </div>
//       </div> */}

//         <div classNameName="container-fluid mt-4 ">
//           <div classNameName=" row rows d-flex align-items-center">
//             <div classNameName="col-auto">
//               <img
//                 classNameName="imgs"
//                 src={logo}
//                 alt="Rick and Morty Logo"
//                 width="60"
//               />
//             </div>
//             <div classNameName="col-auto">
//               <h2 classNameName="text-black m-0">Rick and Morty Characters</h2>
//             </div>
//           </div>
//         </div>

//         <div classNameName="container">
//           <form action="" classNameName="search-bar">
//             <input
//               classNameName="q"
//               type="text"
//               placeholder="Search character........"
//               value={searchTerm}
//               onChange={handleChange}
//             />
//             <button type="submit">
//               <AiOutlineSearch />
//             </button>
//           </form>
//         </div>

//         <div classNameName="container-fluid mt-3">
//           <div classNameName=" ml-5 row text-center ">
//             {filteredCharacters.map((character) => {
//               return (
//                 <div classNameName="col-10 col-md-4 mt-5" key={character.id}>
//                   <div classNameName="card p-2">
//                     <div classNameName="d-flex align-items-center">
//                       <div classNameName="image">
//                         <img
//                           // classNameName="imgs"
//                           src={character.image}
//                           alt={character.name}
//                           classNameName="rounded"
//                           width="200"
//                         />
//                       </div>
//                       <div classNameName="ml-5 w-200">
//                         <div classNameName="">
//                           {/* <img src={logo} alt="Rick and Morty Logo" width="70" /> */}

//                           <h3>{character.name}</h3>
//                           <p>Status: {character.status}</p>
//                           <p>Species: {character.species}</p>
//                           <p>Location: {character.location.name}</p>
//                           <Link
//                             classNameName="button"
//                             to={`/characters/${character.id}`}
//                           >
//                             More Info
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CharacterList;



// import React, { useState } from "react";
// import { useQuery, gql } from "@apollo/client";
// import { Link } from "react-router-dom";
// import { AiOutlineSearch } from "react-icons/ai";

// const GET_CHARACTERS = gql`
//   query GetCharactersList($page: Int, $pageSize: Int) {
//     characters(page: $page, pageSize: $pageSize) {
//       results {
//         id
//         name
//         status
//         species
//         image
//         location {
//           name
//         }
//       }
//     }
//   }
// `;

// const PAGE_SIZE = 10; // Number of characters per page

// const CharacterList = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);

//   const { loading, error, data } = useQuery(GET_CHARACTERS, {
//     variables: { page: currentPage, pageSize: PAGE_SIZE },
//   });

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   const characters = data.characters.results;
//   const filteredCharacters = characters.filter((character) =>
//     character.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handlePrevPage = () => {
//     setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
//   };

//   const handleNextPage = () => {
//     setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(characters.length / PAGE_SIZE)));
//   };

//   return (
//     <>
//       <div>
//         <h2 classNameName="text-center mt-5 text-black">Rick and Morty Characters</h2>
//         <div classNameName="container">
//           <form action="" classNameName="search-bar">
//             <input
//               classNameName="q"
//               type="text"
//               placeholder="Search character........"
//               value={searchTerm}
//               onChange={handleChange}
//             />
//             <button type="submit">
//               <AiOutlineSearch />
//             </button>
//           </form>
//         </div>

//         <div classNameName="container-fluid mt-3">
//           <div classNameName=" ml-5 row text-center ">
//             {filteredCharacters.map((character) => {
//               return (
//                 <div classNameName="col-10 col-md-4 mt-5" key={character.id}>
//                   <div classNameName="card p-2">
//                     <div classNameName="d-flex align-items-center">
//                       <div classNameName="image">
//                         <img
//                           src={character.image}
//                           alt={character.name}
//                           classNameName="rounded"
//                           width="200"
//                         />
//                       </div>
//                       <div classNameName="ml-5 w-200">
//                         <div classNameName="">
//                           <h3>{character.name}</h3>
//                           <p>Status: {character.status}</p>
//                           <p>Species: {character.species}</p>
//                           <p>Location: {character.location.name}</p>
//                           <Link
//                             classNameName="button"
//                             to={`/characters/${character.id}`}
//                           >
//                             More Info
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         <div classNameName="container-fluid">
//           <div classNameName="row justify-content-center">
//             <nav>
//               <ul classNameName="pagination">
//                 <li classNameName={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
//                   <button classNameName="page-link" onClick={handlePrevPage}>
//                     Previous
//                   </button>
//                 </li>
//                 <li classNameName="page-item">
//                   <span classNameName="page-link">{currentPage}</span>
//                 </li>
//                 <li classNameName={`page-item ${filteredCharacters.length < PAGE_SIZE ? "disabled" : ""}`}>
//                   <button classNameName="page-link" onClick={handleNextPage}>
//                     Next
//                   </button>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CharacterList;

//..pegination

// import React, { useState } from "react";
// import { useQuery, gql } from "@apollo/client";
// import { Link } from "react-router-dom";
// import { AiOutlineSearch } from "react-icons/ai";

// const GET_CHARACTERS = gql`
//   query GetCharactersList($page: Int, $pageSize: Int) {
//     characters(page: $page, pageSize: $pageSize) {
//       results {
//         id
//         name
//         status
//         species
//         image
//         location {
//           name
//         }
//       }
//     }
//   }
// `;

// const PAGE_SIZE = 10; // Number of characters per page

// const CharacterList = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1); // Current page number

//   const { loading, error, data } = useQuery(GET_CHARACTERS, {
//     variables: { page: currentPage, pageSize: PAGE_SIZE },
//   });

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   const filteredCharacters = data.characters.results.filter((character) =>
//     character.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handlePrevPage = () => {
//     setCurrentPage((prevPage) => prevPage - 1);
//   };

//   const handleNextPage = () => {
//     setCurrentPage((prevPage) => prevPage + 1);
//   };

//   return (
//     <>
//       <div>
//         <h2 classNameName="text-center mt-5 text-black">Rick and Morty Characters</h2>
//         <div classNameName="container">
//           <form action="" classNameName="search-bar">
//             <input
//               classNameName="q"
//               type="text"
//               placeholder="Search character........"
//               value={searchTerm}
//               onChange={handleChange}
//             />
//             <button type="submit">
//               <AiOutlineSearch />
//             </button>
//           </form>
//         </div>

//         <div classNameName="container-fluid mt-3">
//           <div classNameName=" ml-5 row text-center">
//             {filteredCharacters.map((character) => {
//               return (
//                 <div classNameName="col-10 col-md-4 mt-5" key={character.id}>
//                   <div classNameName="card p-2">
//                     <div classNameName="d-flex align-items-center">
//                       <div classNameName="image">
//                         <img
//                           src={character.image}
//                           alt={character.name}
//                           classNameName="rounded"
//                           width="200"
//                         />
//                       </div>
//                       <div classNameName="ml-5 w-200">
//                         <div classNameName="">
//                           <h3>{character.name}</h3>
//                           <p>Status: {character.status}</p>
//                           <p>Species: {character.species}</p>
//                           <p>Location: {character.location.name}</p>
//                           <Link classNameName="button" to={`/characters/${character.id}`}>
//                             More Info
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//         <div classNameName="container-fluid">
//           <div classNameName="row justify-content-center">
//             <nav>
//               <ul classNameName="pagination">
//                 <li classNameName={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
//                   <button classNameName="page-link" onClick={handlePrevPage}>
//                     Previous
//                   </button>
//                 </li>
//                 <li classNameName={`page-item ${currentPage === 1 ? "active" : ""}`}>
//                   <span classNameName="page-link">{currentPage}</span>
//                 </li>
//                 <li classNameName={`page-item ${filteredCharacters.length < PAGE_SIZE ? "disabled" : ""}`}>
//                   <button classNameName="page-link" onClick={handleNextPage}>
//                     Next
//                   </button>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CharacterList;

//..pegination

// import React, { useState } from "react";
// import { useQuery, gql } from "@apollo/client";
// import { Link } from "react-router-dom";
// import { AiOutlineSearch } from "react-icons/ai";

// const GET_CHARACTERS = gql`
//   query GetCharactersList($page: Int, $pageSize: Int) {
//     characters(page: $page, pageSize: $pageSize) {
//       results {
//         id
//         name
//         status
//         species
//         image
//         location {
//           name
//         }
//       }
//     }
//   }
// `;

// const PAGE_SIZE = 10;

// const CharacterList = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1); // Current page number
//   const [totalPages, setTotalPages] = useState(1); // Total number of pages

//   const { loading, error, data } = useQuery(GET_CHARACTERS, {
//     variables: { page: currentPage, pageSize: PAGE_SIZE },
//     onCompleted: (data) => {
//       // Update the total number of pages based on the data received from the query
//       setTotalPages(Math.ceil(data.characters.results.length / PAGE_SIZE));
//     },
//   });

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   const characters = data.characters.results;
//   const filteredCharacters = characters.filter((character) =>
//     character.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handlePrevPage = () => {
//     setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
//   };

//   const handleNextPage = () => {
//     setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
//   };

//   return (
//     <>
//       <div>
//         <h2 classNameName="text-center mt-5 text-black">Rick and Morty Characters</h2>
//         <div classNameName="container">
//         <form action="" classNameName="search-bar">
//             <input
//               classNameName="q"
//               type="text"
//               placeholder="Search character........"
//               value={searchTerm}
//               onChange={handleChange}
//             />
//             <button type="submit">
//               <AiOutlineSearch />
//             </button>
//           </form>
//         </div>

//         <div classNameName="container-fluid mt-3">
//           <div classNameName=" ml-5 row text-center">
//             {filteredCharacters.map((character) => {
//               return (
//                 <div classNameName="col-10 col-md-4 mt-5" key={character.id}>
//                 <div classNameName="card p-2">
//                     <div classNameName="d-flex align-items-center">
//                       <div classNameName="image">
//                         <img
//                           src={character.image}
//                           alt={character.name}
//                           classNameName="rounded"
//                           width="200"
//                         />
//                       </div>
//                       <div classNameName="ml-5 w-200">
//                         <div classNameName="">
//                           <h3>{character.name}</h3>
//                           <p>Status: {character.status}</p>
//                           <p>Species: {character.species}</p>
//                           <p>Location: {character.location.name}</p>
//                           <Link classNameName="button" to={`/characters/${character.id}`}>
//                             More Info
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//         <div classNameName="container-fluid">
//           <div classNameName="row justify-content-center">
//             <nav>
//               <ul classNameName="pagination">
//                 <li classNameName={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
//                   <button classNameName="page-link" onClick={handlePrevPage}>
//                     Previous
//                   </button>
//                 </li>
//                 <li classNameName={`page-item`}>
//                   <span classNameName="page-link">{currentPage}</span>
//                 </li>
//                 <li classNameName={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
//                   <button classNameName="page-link" onClick={handleNextPage}>
//                     Next
//                   </button>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CharacterList;
