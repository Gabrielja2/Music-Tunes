import React /* useState  , { useEffect, useState } */ from "react";
import NavbarUser from "../../components/NavbarUser/NavbarUser";
import NavbarLinks from "../../components/NavbarLinks/NavbarLinks";
import MusicCard, {
  Props as MusicCardProps,
} from "../../components/MusicCard/MusicCard";

export interface Music {
  trackId: number | string;
  previewUrl: string;
  trackName: string;
  artworkUrl100: string;
  artistName: string;
  collectionName: string;
}

export default function FavoritesPage() {
  const getFavorites = (): MusicCardProps[] => {
    const favorites = localStorage.getItem("favorites");
    if (favorites) {
      return JSON.parse(favorites);
    } else {
      return [];
    }
  };

  return (
    <div className="w-screen">
      <NavbarUser />
      <NavbarLinks />
      <div className="sm:w-2/3 mx-auto sm:flex sm:flex-row flex-col sm:pt-0 pt-32">
        <span className="text-lg sm:text-2xl font-bold">
          Músicas Favoritas:
        </span>
        <div className="sm:w-2/3 sm:mx-auto m-6">
          {getFavorites().map((music: Music, index: number) => (
            <MusicCard key={index} {...music} />
          ))}
        </div>
      </div>
    </div>
  );
}
