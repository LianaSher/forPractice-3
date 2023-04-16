import { fetchByRegion } from 'service/country-service';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';

export const CountrySearch = () => {
  const [searchParams, setSearchParams] = useSearchParams('');
  const [countriesInRegion, setCountriesInRegion] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = region => {
    setSearchParams({ region });
  };

  useEffect(() => {
    const region = searchParams.get('region');
    if (!region) return;
    const fetchCountries = async () => {
      setLoading(true);
      try {
        const contriesByRegion = await fetchByRegion(region);
        setCountriesInRegion(contriesByRegion);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCountries();
  }, [searchParams]);

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onSubmit} />

        {loading ? <Loader /> : <CountryList countries={countriesInRegion} />}
      </Container>
    </Section>
  );
};
