import { useMemo, useState } from "react";

const ItemEditSection = () => {
  const [value, setValue] = useState("");

  const { list, updateList } = useAPI();

  const editItemInfo = useMemo(() => {
    if (list[0]) {
      return list[0];
    }

    return null;
  }, [list]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleButtonClick = () => {
    if (!editItemInfo) return;

    const filterResult = list.filter((item) => item.id !== editItemInfo.id);
    const editInfo = {
      ...editItemInfo,
      name: value,
    };

    updateList([editInfo, ...filterResult]);
    setValue("");
  };

  return (
    <section
      style={{
        backgroundColor: "#D9D9D9",
        minWidth: "400px",
        minHeight: "300px",
        padding: 20,
      }}
    >
      <h1>유저 이름 수정</h1>
      <div>{editItemInfo ? editItemInfo.name : ""} </div>
      <div>{"=>"}</div>
      <input value={value} onChange={(e) => handleInputChange(e)} />
      <div style={{ marginTop: 50 }}>
        <button onClick={handleButtonClick}>저장</button>
      </div>
    </section>
  );
};

export default ItemEditSection;
