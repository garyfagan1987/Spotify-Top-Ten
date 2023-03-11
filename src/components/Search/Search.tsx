import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { Box, InputBase, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

const Search: React.FC = () => {
  const router = useRouter();
  const [artist, setArtist] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search?artist=${artist}`);
    setArtist('');
  };

  return (
    <Box component="form" sx={{ width: '320px' }} onSubmit={(e) => handleSubmit(e)}>
      <InputBase
        value={artist}
        fullWidth
        onChange={(event) => setArtist(event.target.value)}
        placeholder="Who do you want to listen to?"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </Box>
  )
}

export default Search;