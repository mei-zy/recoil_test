type Props = {
  list: string[];
};

const ItemList = ({ list }: Props) => {
  return (
    <ul>
      {list.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default ItemList;
