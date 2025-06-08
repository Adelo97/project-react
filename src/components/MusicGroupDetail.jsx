import React, { useState, useEffect } from 'react';
import { Card, Spinner, Alert,  Row, Col } from 'react-bootstrap';


const musicGenres = {
  0: "Okänd",
  1: "Rock",
  2: "Pop",
  3: "Jazz"
};


function MusicGroupDetail() {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    async function loadGroups() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          'https://seido-webservice-307d89e1f16a.azurewebsites.net/api/MusicGroup/Read?seeded=true&flat=true&pageNr=0&pageSize=10'
        );
        if (!response.ok) throw new Error('Kunde inte hämta musikgrupper');
        const data = await response.json();
        setGroups(data.pageItems || []);
      } catch (err) {
        setError('Failed to load music groups.');
      } finally {
        setLoading(false);
      }
    }
    loadGroups();
  }, []);


  if (loading) {
    return (
      <div className="text-center">
        <Spinner animation="border" />
      </div>
    );
  }


  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }


  if (!groups.length) {
    return <Alert variant="info">no musicgroups.</Alert>;
  }


  return (
    <div>
      <h3> MusicGroups (details example)</h3>
      <Row>
        {groups.map((group, idx) => (
          <Col md={6} key={idx} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{group.name || 'Okänd grupp'}</Card.Title>
                <Card.Text>
                  <strong>Etablerad:</strong> {group.establishedYear || 'Okänt år'}<br />
                  <strong>Genre:</strong> {musicGenres[group.genre] || 'Okänd'}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}


export default MusicGroupDetail;


