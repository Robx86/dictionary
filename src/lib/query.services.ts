import { useQuery } from '@tanstack/react-query';

const fetchDefinitions = async (word: string) => {
  const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const useFetchDefinitions = (word: string) => {
  return useQuery("definitions", fetchDefinitions, {
    enabled: !!word,
  })
}

export default useFetchDefinitions;