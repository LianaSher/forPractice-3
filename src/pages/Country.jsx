import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Section, Container, CountryInfo, Loader, GoBackBtn } from 'components';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const { countryId } = useParams();
  const location = useLocation();
  const goBackLink = location.state?.from;
  console.log(location);
  const [country, setCountry] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    const fetchOneCountry = async () => {
      try {
        const oneCountry = await fetchCountry(countryId);
        setCountry(oneCountry);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchOneCountry();
  }, [countryId]);

  return (
    <Section>
      <Container>
        <GoBackBtn path={goBackLink} />
        {loading ? <Loader /> : <CountryInfo country={country} />}
      </Container>
    </Section>
  );
};
