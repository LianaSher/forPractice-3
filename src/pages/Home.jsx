import { useEffect, useState } from 'react';
import { getCountries } from 'service/country-service';
import { Container, CountryList, Heading, Loader, Section } from 'components';

export const Home = () => {
  const [europeCountries, setEuropeCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    const fetchEuropeCountries = async () => {
      try {
        const countries = await getCountries();
        setEuropeCountries(countries);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchEuropeCountries();
  }, []);

  return (
    <Section>
      <Container>
        {loading ? <Loader /> : <CountryList countries={europeCountries} />}
      </Container>
    </Section>
  );
};
