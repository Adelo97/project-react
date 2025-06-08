
import React, { useEffect, useState } from 'react';
import { fetchMusicGroups, fetchMusicGroupById } from '../Api/musicApi';
import MusicGroupList from '../components/MusicGroupList';
import MusicGroupRow from '../components/MusicGroupRow';
import MusicGroupDetail from '../components/MusicGroupDetail';



const ITEMS_PER_PAGE = 10;



export function MusicGroups() {
   return (
    <div className="container mt-4">
      <h2>Music Groups</h2>
      <MusicGroupList />
      <MusicGroupDetail />
      
    </div>
  );
}

