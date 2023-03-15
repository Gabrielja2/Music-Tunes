import React, { useEffect, useState } from "react";
import NavbarUser from "../../components/NavbarUser/NavbarUser";
import NavbarLinks from "../../components/NavbarLinks/NavbarLinks";
import MusicCard, {
  Props as MusicCardProps,
} from "../../components/MusicCard/MusicCard";
import { getMusics } from "../../services/fetchAlbum";
import { useParams } from "react-router";

export interface Music {
  trackId: number | string;
  previewUrl: string;
  trackName: string;
  artworkUrl100: string;
  artistName: string;
  collectionName: string;
}

export default function AlbumPage() {
  const [musics, setMusics] = useState<MusicCardProps[]>([]);
  const [album, setAlbum] = useState<Music>();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    findMusics();
  }, []);

  const findMusics = async () => {
    const result = await getMusics(id as string);
    const musics = result.filter((music: MusicCardProps) => music.trackId);
    setMusics(musics);
    setAlbum(result[0]);
    setIsLoading(false);
  };

  return (
    <div className="w-screen">
      <NavbarUser />
      <NavbarLinks />
      <div>
        <div className="sm:w-2/3 mx-auto sm:flex sm:flex-row flex-col pt-32">
          <div className="sm:flex sm:flex-col flex flex-col sm:w-1/3 sm:mx-0 m-10 self-center">
            <img
              className="self-center"
              width="350px"
              src={album?.artworkUrl100}
              alt={album?.collectionName}
            />
            <p className="text-xl font-bold sm:w-2/3 sm:text-3xl self-center">
              {album?.artistName}
            </p>
            <p className="text-md sm:text-2xl">{album?.collectionName}</p>
          </div>
          <div className="sm:w-2/3 sm:mx-auto sm:my-32">
            {isLoading ? (
              <p className="flex">Carregando...</p>
            ) : (
              musics.map((music: MusicCardProps, index: number) => (
                <MusicCard key={index} {...music} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
