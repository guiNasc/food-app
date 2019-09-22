import React, { useState } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessaage] = useResults();

  const filterResultsByPrice = price => {
    return results.filter(result => result.price === price);
  };
  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessaage ? <Text>{errorMessaage}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice('$')}
          title='Cost Effective'
        ></ResultsList>
        <ResultsList
          results={filterResultsByPrice('$$')}
          title='Bit Pricier'
        ></ResultsList>
        <ResultsList
          results={filterResultsByPrice('$$$')}
          title='Big Spender'
        ></ResultsList>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({});
export default SearchScreen;
