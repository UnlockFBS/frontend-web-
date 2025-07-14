function InterventionList({ items }) {
  if (!items.length) return <p>Aucune intervention.</p>;

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <strong>{item.titre}</strong> - {item.lieu}
        </li>
      ))}
    </ul>
  );
}

export default InterventionList;
