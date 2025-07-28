// Using as a functioning placeholdeer to display the Add playlist Icon and as skeleton for the Add to playlist icon page going forward.
import React from "react";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { BaseMovieProps } from "../../types/interfaces";

const AddToPlaylistIcon: React.FC<BaseMovieProps> = (movie) => {

  return (
    <>
    <IconButton disabled aria-label="add to playlist" onClick={null}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
    </>
  );
};

export default AddToPlaylistIcon;