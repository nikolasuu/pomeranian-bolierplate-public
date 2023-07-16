import './styles.css';
import { MasterHeader } from '../../../Components/MasterHeader/MasterHeader';

export const ArrayRenderToTable = () => {
  const bands = [
    {
      band: 'The Clash',
      yearFormed: 1976,
      albums: 6,
      mostFamousSong: 'London Calling',
    },
    {
      band: 'Sex Pistols',
      yearFormed: 1975,
      albums: 1,
      mostFamousSong: 'Anarchy in the UK',
    },
    {
      band: 'Ramones',
      yearFormed: 1974,
      albums: 14,
      mostFamousSong: 'Blitzkrieg Bop',
    },
    {
      band: 'The Cure',
      yearFormed: 1976,
      albums: 13,
      mostFamousSong: 'Just Like Heaven',
    },
    {
      band: 'Joy Division',
      yearFormed: 1976,
      albums: 2,
      mostFamousSong: 'Love Will Tear Us Apart',
    },
    {
      band: 'Siouxsie and the Banshees',
      yearFormed: 1976,
      albums: 11,
      mostFamousSong: 'Hong Kong Garden',
    },
  ];

  // Sortowanie tablicy ASC
  const bandsSort = bands.sort((a, b) => b.albums - a.albums);

  function bandsTables({ band, yearFormed, albums, mostFamousSong }) {
    return (
      <tr key={band}>
        <td>{band}</td>
        <td>{yearFormed}</td>
        <td>{albums}</td>
        <td>{mostFamousSong}</td>
      </tr>
    );
  }
  return (
    <div>
      <MasterHeader title="Renderowanie tablic do tabeli" />
      <table id="table-bands-width" className="table-rating">
        <thead>
          <tr>
            <th>Band</th>
            <th>Year Formed</th>
            <th>Albums</th>
            <th>Most Famous Song</th>
          </tr>
        </thead>
        <tbody>{bandsSort.map(bandsTables)}</tbody>
      </table>
    </div>
  );
};
