import React, { useState, useEffect } from 'react';
import { Card, Spinner, Alert, Row, Col } from 'react-bootstrap';

function MusicGroupDetail() {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadAllGroups() {
      setLoading(true);
      setError(null);
      let allGroups = [];
      let pageNr = 0;
      const pageSize = 1000;
      let hasMore = true;

      try {
        while (hasMore) {
          const response = await fetch(
            `https://seido-webservice-307d89e1f16a.azurewebsites.net/api/Album/Read?seeded=true&flat=true&pageNr=0&pageSize=1000`
          );
          if (!response.ok) throw new Error('Kunde inte hämta musikgrupper');
          const data = await response.json();
          allGroups = allGroups.concat(data.pageItems || []);
          // Om det finns fler sidor, fortsätt hämta
          if (data.pageItems && data.pageItems.length === pageSize) {
            pageNr += 1;
          } else {
            hasMore = false;
          }
        }
        setGroups(allGroups);
      } catch (err) {
        setError('Failed to load music groups.');
      } finally {
        setLoading(false);
      }
    }
    loadAllGroups();
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
                  <strong>Etablerad:</strong> {group.establishedYear || 'Unknow'}<br />
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