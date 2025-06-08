// src/components/MusicGroupRow.jsx
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MusicGroupRow({ group }) {
  return (
    <tr>
      <td>{group.name}</td>
      <td>
        <Link to={`/group/${group.id}`}>
          <Button variant="info" size="sm">Details</Button>
        </Link>
      </td>
    </tr>
  );

}




export default MusicGroupRow;
