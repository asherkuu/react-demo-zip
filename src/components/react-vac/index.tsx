import { useState, useCallback } from "react";
import styled from "styled-components";
import { VACInput, VACList } from "react-vac";

import VInput from "./VInput";
import VList from "./VList";
import { Contents } from "./styled";

export default function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  const genId = useCallback(() => {
    let random = Number(Math.floor(Math.random() * 5000));
    const isDuplicate = list.some((item) => item.id === random);

    return isDuplicate ? random + random : random;
  }, [list]);

  const handleTextChange = useCallback(
    (e, text) => {
      e.preventDefault();

      if (!text) return;

      setList([
        ...list,
        {
          id: genId(),
          text,
          isCheck: false,
        },
      ]);
      setValue("");
    },
    [list, genId]
  );

  // TODO: list memoziation
  const each = useCallback(
    (data) => ({
      ...data,
      onCheck: () => {
        setList(
          list.map((item) =>
            item.id === data.id ? { ...item, isCheck: !item.isCheck } : item
          )
        );
      },
      onRemove: () => setList(list.filter((item) => item.id !== data.id)),
    }),
    [list]
  );

  const vInputProps = {
    // properties
    value,

    // callbacks
    onChange: useCallback((e) => {
      setValue(e.target.value);
    }, []),
    onKeyPress: (e) => {
      if (e.key === "Enter") {
        handleTextChange(e, value);
      }
    },
    onSubmit: (e) => {
      handleTextChange(e, value);
    },
  };

  const vListProps = {
    // properties
    list,

    // callbacks
    each,
  };

  return (
    <Contents>
      <div className="half">
        <div>
          <VInput {...vInputProps} />
          <VList {...vListProps} />
        </div>
        <div>
          <VACInput name="VInput" data={vInputProps} />
          <VACList name="VList" data={vListProps} />
        </div>
      </div>
    </Contents>
  );
}
