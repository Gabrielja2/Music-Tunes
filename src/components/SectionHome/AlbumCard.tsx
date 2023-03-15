import React from "react";
import { Link } from "react-router-dom";

interface Collection {
  collectionId: number;
  artworkUrl100: string;
  collectionName: string;
}

interface AlbumCardProps {
  collection: Collection[];
}

export default function AlbumCard({ collection }: AlbumCardProps): JSX.Element {
  return (
    <div className="sm:w-5/12 sm:flex sm:flex-wrap mx-auto gap-8">
      {collection?.map((c: Collection, i: number) => (
        <Link
          className="sm:flex sm:mx-auto w-10/12"
          to={`/albums/${c.collectionId}`}
          key={i}
        >
          <img
            className="self-center sm:w-1/3 w-screen px-6 sm:px-0"
            src={c.artworkUrl100}
            alt="album-image"
          />
          <p className="text-lg sm:w-2/3 sm:text-2xl font-bold p-1 self-center m-auto">
            {c.collectionName}
          </p>
        </Link>
      ))}
    </div>
  );
}
