// components/CountryInfo.tsx
interface CountryInfoProps {
    name: string;
    capital: string;
    population: string;
    language: string;
  }
  
  const CountryInfo = ({ name, capital, population, language }: CountryInfoProps) => {
    return (
      <div className="border p-4 rounded-lg shadow-md bg-blue-400">
        <h2 className="text-2xl font-bold mb-4">{name}</h2>
        <p className="text-lg"><strong>Capital:</strong> {capital}</p>
        <p className="text-lg"><strong>Population:</strong> {population}</p>
        <p className="text-lg"><strong>Language:</strong> {language}</p>
      </div>
    );
  };
  
  export default CountryInfo;
  