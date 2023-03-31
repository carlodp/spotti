import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";

import { Searchbar, Sidebar, MusicPlayer, TopPlay } from "./components";
import {
  ArtistDetails,
  TopArtists,
  Discover,
  Search,
  SongDetails,
  TopCharts,
} from "./pages";

const App = () => {
  const [hideSidebar, setHideSidebar] = useState(false);
  const { activeSong } = useSelector((state) => state.player);
  let location = useLocation();

  let activeSongName;
  if (activeSong?.title) {
    activeSongName = activeSong?.title;
  } else {
    activeSongName = activeSong?.attributes?.name;
  }

  useEffect(() => {
    if (
      location.pathname === "/top-artists" ||
      location.pathname === "/top-charts"
    ) {
      setHideSidebar(true);
    } else {
      setHideSidebar(false);
    }
  }, [location.pathname]);

  return (
    <div className="relative flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gradient-to-br from-[#191f24] to-[#22D37B]">
        <Searchbar />
        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse gap-3">
          <div className="flex-1 h-fit pb-24">
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
          </div>
          {!hideSidebar && (
            <div className="xl:sticky relative top-0 h-fit">
              <TopPlay />
            </div>
          )}
        </div>
      </div>
      {activeSongName && (
        <div className="fixed h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#191f24] backdrop-blur-lg rounded-t-lg z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;
