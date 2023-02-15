import CookieStandRow from './StandRow';

export default function CookieStandTable({ stands, deleteStand }) {
  const tableHeaders = [
    'Location',
    '6am',
    '7am',
    '8am',
    '9am',
    '10am',
    '11am',
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm',
    'Totals',
  ];
  if (true) {
    return stands.length > 0 ? (
      <table className="w-1/2 mx-auto my-4">
        <thead>
          <tr>
            {tableHeaders.map((item, idx) => (
              <th className="p-2 text-gray-300 bg-rose-900/75 border border-red-900" key={idx}>
                {item}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {stands.map((stand, idx) => (
            <CookieStandRow
              key={stand.id}
              info={stand}
              deleteStand={deleteStand}
              index={idx}
            />
          ))}
        </tbody>


      </table>
    ) : (
      <p className="w-8/12 p-2 mx-auto my-4 text-center text-lg">
        No Cookie Stands Available
      </p>
    );
  }
}