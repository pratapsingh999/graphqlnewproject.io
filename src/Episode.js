import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
// import logo from "./images/logo.png";
// import logo from "./images/logo1.png";
// import logo from "./images/logo2.png";
// import logo from "./images/logo3.png";
import logo from "./images/logo4.png";
// import logo from "./images/logo5.png";

const GET_EPISODE = gql`
  query GetEpisodeInfo($id: ID!) {
    episode(id: $id) {
      name
      episode
      air_date
      characters {
        name
        status
        species
        image
        gender
        origin {
          name
        }
        location {
          name
        }
      }
      id
      created
    }
  }
`;

const Episode = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_EPISODE, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const episode = data.episode;
  const characters = episode.characters;

  return (
    <>
      <div className="mt-5 text-black">
      <div className="container-fluid mt-4 ">
        <div className=" row rows d-flex align-items-center">
          <div className="col-auto">
            <img className="imgs" src={logo} alt="Rick and Morty Logo" width="60" />
          </div>
          <div className="col-auto">
            <h2 className="text-black m-0">Rick and Morty Characters</h2>
          </div>
        </div>
      </div>
        <div className="container-fluid mt-3">
          <div className="ml-5 row text-center">
            {characters.map((character) => (
              <div className="col-10 col-md-4 mt-5">
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
                        {/* <h3>Episode Name: {episode.name}</h3>
                        <p>Episode Code: {episode.episode}</p>
                        <p>Air Date: {episode.air_date}</p> */}
                        <h4>Name: {character.name}</h4>
                        <p>Status: {character.status}</p>
                        <p>Species: {character.species}</p>
                        <p>Gender: {character.gender}</p>
                        {/* <p>Image ID: {character.image}</p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 text-center">
            <Link className="buttons" to="/">
              Home page
            </Link>
            <Link to={`/characters/${id}`} className="buttons">
              Back to Character Info
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Episode;




// import React, { useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { useQuery, gql, useLazyQuery } from "@apollo/client";
// import logo from "./images/logo4.png";

// const GET_EPISODE = gql`
//   query GetEpisodeInfo($id: ID!, $page: Int, $perPage: Int) {
//     episode(id: $id) {
//       name
//       episode
//       air_date
//       characters(page: $page, perPage: $perPage) {
//         info {
//           count
//           pages
//           next
//           prev
//         }
//         results {
//           name
//           status
//           species
//           image
//           gender
//         }
//       }
//       id
//       created
//     }
//   }
// `;

// const Episode = () => {
//   const { id } = useParams();
//   const [currentPage, setCurrentPage] = useState(1);
//   const charactersPerPage = 6;

//   const { loading, error, data } = useQuery(GET_EPISODE, {
//     variables: { id, page: currentPage, perPage: charactersPerPage },
//   });

//   // Use a lazy query to fetch characters with pagination
//   const [fetchCharacters, { loading: charactersLoading, data: charactersData }] =
//     useLazyQuery(GET_EPISODE);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   const episode = data.episode;
//   const characters = charactersData?.episode?.characters?.results || [];

//   const totalCharacters = charactersData?.episode?.characters?.info?.count || 0;
//   const totalPages = Math.ceil(totalCharacters / charactersPerPage);

//   function handlePageChange(selectedPage) {
//     setCurrentPage(selectedPage);
//     fetchCharacters({
//       variables: { id, page: selectedPage, perPage: charactersPerPage },
//     });
//   }

//   return (
//     <>
//       <div className="mt-5 text-black">
//         <div className="container-fluid mt-4">
//           <div className="row rows d-flex align-items-center">
//             <div className="col-auto">
//               <img className="imgs" src={logo} alt="Rick and Morty Logo" width="70" />
//             </div>
//             <div className="col-auto">
//               <h2 className="text-black m-0">Rick and Morty Characters</h2>
//             </div>
//           </div>
//         </div>
//         <div className="container-fluid mt-3">
//           <div className="ml-5 row text-center">
//             {characters.map((character) => (
//               <div className="col-10 col-md-4 mt-5" key={character.name}>
//                 <div className="card p-2">
//                   <div className="d-flex align-items-center">
//                     <div className="image">
//                       <img
//                         src={character.image}
//                         alt={character.name}
//                         className="rounded"
//                         width="200"
//                       />
//                     </div>
//                     <div className="ml-5 w-200">
//                       <div className="">
//                         <h4>Name: {character.name}</h4>
//                         <p>Status: {character.status}</p>
//                         <p>Species: {character.species}</p>
//                         <p>Gender: {character.gender}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="mt-5 text-center">
//             <Link className="buttons" to="/">
//               Home page
//             </Link>
//             <Link to={`/characters/${id}`} className="buttons">
//               Back to Character Info
//             </Link>
//           </div>

//           <div className="pagination-container mt-5">
//             <button
//               disabled={currentPage <= 1}
//               onClick={() => handlePageChange(currentPage - 1)}
//             >
//               Previous
//             </button>
//             {[...Array(totalPages)].map((_, index) => (
//               <button
//                 key={index + 1}
//                 onClick={() => handlePageChange(index + 1)}
//                 className={currentPage === index + 1 ? "active" : ""}
//               >
//                 {index + 1}
//               </button>
//             ))}
//             <button
//               disabled={currentPage >= totalPages}
//               onClick={() => handlePageChange(currentPage + 1)}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Episode;




























// const Episode = () => {
//   const { id } = useParams();
//   const { loading, error, data } = useQuery(GET_EPISODE, {
//     variables: { id },
//   });

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   const episode = data.episode;

//   return (
//     <>
//       <div className="mt-5 text-black">
//         <h2 className="text-center mt-5 text-black">Episode Details</h2>
      

//       <div className="container-fluid mt-3">
//         <div className=" ml-5 row text-center ">
//           {episode.characters.map((character) => (
//             <div className="col-10 col-md-4 mt-5">
//               <div className="card p-2">
//                 <div className="d-flex align-items-center">
//                   <div className="ml-5 w-200">
//                     <div className="">
//                         <p>Name:{character.name}</p>
//                         <p>Episode Code: {character.status}</p>
//                         <p>Air Date: {character.species}</p>
//                         <p>Gender: {character.gender}</p>
//                         <p>Image ID: {character.image}</p>
                     
//                       <Link className="buttons" to="/">
//                         Home page
//                       </Link>
//                       <Link to={`/characters/${id}`} className="buttons">
//                         Back to Character Info
//                       </Link>
                    
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//           ;
//         </div>
//       </div>
//       </div>
//     </>
//   );
// };
// export default Episode;