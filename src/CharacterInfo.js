import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

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
      <div>
        <h2 className="text-center mt-5">Rick and Morty Characters</h2>
        <div className="container-fluid mt-3">
          <div className="row text-center">
            <div className="col-10 col-md-4 mt-5">
              <div className="card p-2">
                <div className="d-flex align-items-center">
                  <div className="image">
                  <h2>{character.name}</h2>
                    <img
                      src={character.image}
                      alt={character.name}
                      class="character-image"
                    />
                  </div>

                  <div className="ml-5 w-100 character-box">
                    <div className="character-info">
                      <h6>Status: {character.status}</h6>
                      <h6>Species: {character.species}</h6>
                      <h6>Gender: {character.gender}</h6>
                      <h6>Origin: {character.origin.name}</h6>
                      <h6>Location: {character.location.name}</h6>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="mt-5">Episodes:</h3>
      <div>
        <ul>
          {character.episode.map((episode) => (
            <li key={episode.episode}>{episode.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CharacterInfo;
