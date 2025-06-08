// src/components/MusicGroupList.jsx
import React, { useState, useEffect } from 'react';
import { Table, Spinner, Alert, Form, InputGroup, Button } from 'react-bootstrap';
import MusicGroupRow from './MusicGroupRow';


function MusicGroupList() {
  // State
  const [groups, setGroups] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 10;


  useEffect(() => {
    async function loadGroups() {
      setLoading(true);
      setError(null);
      try {
        let url = `https://seido-webservice-307d89e1f16a.azurewebsites.net/api/MusicGroup/Read?seeded=true&flat=true&pageNr=${currentPage}&pageSize=${pageSize}`;
        if (searchTerm.trim()) {
          url += `&filter=${encodeURIComponent(searchTerm.trim())}`;
        }
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch music groups');
        const data = await response.json();
        setGroups(data.pageItems || []);
        setTotalCount(data.dbItemsCount || 0);
      } catch (err) {
        setError('Failed to load music groups.');
      } finally {
        setLoading(false);
      }
    }
    loadGroups();
  }, [searchTerm, currentPage]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(0);
  };

  const totalPages = Math.ceil(totalCount / pageSize);

  return (
    <div>
      <div className="mb-2">
        <strong>Total groups:</strong> {totalCount}
      </div>
      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Button variant="outline-secondary" onClick={() => { setSearchTerm(''); setCurrentPage(0); }}>
          Clear
        </Button>
      </InputGroup>
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        <>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {groups.length === 0 && (
                <tr>
                  <td colSpan="1" className="text-center">
                    No groups found.
                  </td>
                </tr>
              )}
              {groups.map(group => (
                <tr key={group.id}>
                  <td>{group.name}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          {/* Pagination controls */}
          <div className="d-flex justify-content-start align-items-center my-3">
            <Button
              variant="secondary"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 0))}
              disabled={currentPage === 0}
              className="me-2"
            >
              Previous
            </Button>
            <span>
              Page {currentPage + 1} of {totalPages}
            </span>
            <Button
              variant="secondary"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages - 1))}
              disabled={currentPage >= totalPages - 1}
              className="ms-2"
            >
              Next
            </Button>
          </div>
        </>
      )}
    </div>
  );
}


export default MusicGroupList;
