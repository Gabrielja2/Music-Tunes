import React, { useState } from "react";
import { searchAlbumsAPI } from "../../services/fetchAlbum";
import AlbumCard from "../../components/SectionHome/AlbumCard";

export default function SectionHome() {
  const [artist, setArtist] = useState("");
  const [albums, setAlbums] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const getAlbums = async () => {
    const albums = await searchAlbumsAPI(artist);
    setAlbums(albums);
    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArtist(e.target.value);
    if (artist.length >= 3) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  return (
    <section>
      <nav className="sm:pt-72 sm:pb-24 pt-40 pb-10">
        <div className="text-lg sm:text-2xl font-bold">
          <div className="flex justify-center">
            <input
              onChange={handleChange}
              style={{ color: "#6000bc" }}
              className="sm:w-1/3 h-10 bg-gray-300 rounded-full p-2 mx-auto sm:mx-10"
              type="text"
              placeholder="Nome do artista"
            />
            <button
              disabled={isDisabled}
              style={{ color: "#6000bc" }}
              className="bg-gray-300 hover:bg-indigo-500 h-10 rounded-full p-1 mx-auto sm:mx-10"
              onClick={getAlbums}
            >
              Procurar
            </button>
          </div>
        </div>
      </nav>
      {isLoading ? (
        <p className="sm:mt-20 mt-10 mx-auto sm:text-2xl text-lg">
          Procure por um artista...
        </p>
      ) : (
        <section className="">
          <p className="text-lg sm:text-2xl font-bold pb-10 flex justify-center">
            Resultado de álbuns de:{" "}
            <span className=" ml-4">
              <i>{`${artist}`}</i>
            </span>
          </p>
          <AlbumCard collection={albums} />
        </section>
      )}
    </section>
  );
}
