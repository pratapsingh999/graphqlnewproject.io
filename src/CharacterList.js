import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

const GET_CHARACTERS = gql`
  query GetCharacters {
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div>
      <h2 className="text-center mt-5">Rick and Morty Characters</h2>
        <div className="container-fluid mt-3">
          <div className="row text-center">
          {data.characters.results.map((character) =>{
              return (
                <div className="col-10 col-md-4 mt-5">
                  <div className="card p-2">
                    <div className="d-flex align-items-center">
                      <div className="image">
                        <img
                          src={character.image} alt={character.name}
                          className="rounded"
                          width="200"
                        />
                      </div>
                      <div className="ml-5 w-100">
                        <div className="">
                    <h3>{character.name}</h3>
                    <p>Status: {character.status}</p>
                    <p>Species: {character.species}</p>
                    <p>Location: {character.location.name}</p>
                    <Link to={`/characters/${character.id}`}>More Info</Link>
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
