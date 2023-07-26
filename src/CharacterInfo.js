import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
// import logo from "./images/logo.png";
// import logo from "./images/logo1.png";
// import logo from "./images/logo2.png";
import logo from "./images/logo6.png";


const GET_CHARACTER_INFO = gql`
  query GetCharacterInfo($id: ID!) {
    character(id: $id) {
      id
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
      episode {
        name
        episode
      }
    }
  }
`;

const CharacterInfo = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_CHARACTER_INFO, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const character = data.character;

  return (
    <div>
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
        {/* <h2 className="text-center mt-5 text-black">Rick and Morty Characters</h2> */}

      <div>
            <div className="col-10 col-md-4 mt-5">
        <h2 className="mt-5 text-black">{character.name}</h2>
              <div className="cards p-2">
                <div className="d-flex align-items-center">
                  <div className="images">
                    <img
                      src={character.image}
                      alt={character.name}
                      className="rounded"
                          width="200"
                    />
                  </div>

                  <div className="character-box">
                    <div className="character-info">
                      <h2>{character.name}</h2>
                      <h6>Status: {character.status}</h6>
                      <h6>Species: {character.species}</h6>
                      <h6>Gender: {character.gender}</h6>
                      <h6>Origin: {character.origin.name}</h6>
                      <h6>Location: {character.location.name}</h6>
                      {/* <h6>episode: {character.episode.episode}</h6> */}
                      <Link className="button" to={`/episode/${character.id}`}>Episode page</Link>
                      {/* <Link className="button" to='/episode'>Episode page</Link> */}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

      {/* <h3 className="mt-5 text-black">Episodes:</h3>
      <div className="mt-4 text-black">
        <ul>
          {character.episode.map((episode) => (
            <li key={episode.episode}>{episode.name}</li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default CharacterInfo;
