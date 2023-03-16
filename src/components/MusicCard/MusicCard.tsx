import React, { useState, useEffect } from "react";

export type Props = {
  trackId: number | string;
  previewUrl: string;
  trackName: string;
  artworkUrl100: string;
  artistName: string;
  collectionName: string;
};

export default function MusicCard({
  trackId,
  previewUrl,
  trackName,
  artworkUrl100,
  artistName,
  collectionName,
}: Props) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    const favorites = getFavorites();
    const isTrackFavorite = favorites.some(
      (music) => music.trackId === trackId
    );
    setIsFavorite(isTrackFavorite);
  }, [trackId]);

  const handleFavoriteChange = () => {
    const toFavorite = {
      trackId,
      previewUrl,
      trackName,
      artworkUrl100,
      artistName,
      collectionName,
    };

    if (isFavorite) {
      removeFromFavorites();
    } else {
      addToFavorites(toFavorite);
    }
    setIsFavorite(!isFavorite);
  };

  const getFavorites = (): Props[] => {
    const favorites = localStorage.getItem("favorites");
    if (favorites) {
      return JSON.parse(favorites);
    } else {
      return [];
    }
  };

  const setFavorites = (favorites: Props[]) => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  const addToFavorites = (music: Props) => {
    const favorites = getFavorites();
    if (!favorites.some((fav) => fav.trackId === music.trackId)) {
      favorites.push(music);
      setFavorites(favorites);
    }
  };

  const removeFromFavorites = () => {
    const favorites = getFavorites().filter(
      (music) => music.trackId !== trackId
    );
    setFavorites(favorites);
  };

  return (
    <div className="sm:flex justify-between sm:mb-0 mb-8 sm:py-2">
      <p className="sm:w-1/3 sm:self-center sm:mb-0 mb-2">{trackName}</p>
      <audio className="sm:w-2/4 mx-auto mb-2" src={previewUrl} controls>
        <code>audio</code>
      </audio>
      <label
        className="w-1/4 sm:self-center"
        htmlFor={`checkbox-music-${trackId}`}
      >
        <input
          type="checkbox"
          checked={isFavorite}
          onChange={handleFavoriteChange}
        />
        Favorita
      </label>
    </div>
  );
}
