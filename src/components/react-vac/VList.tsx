import React from "react";
import clsx from "clsx";

import { VListContents, VListItem } from "./styled";

const List = ({ item, each }) => {
  const { id, text, isCheck, onCheck, onRemove } = each(item);

  return (
    <VListContents>
      <button onClick={onCheck}>{isCheck ? "UnDone" : "Done"}</button>
      <button onClick={onRemove}>Remove</button>
      <span className={clsx(isCheck && "done")}>{text}</span>
    </VListContents>
  );
};

const VList = ({ list, each }) => {
  return (
    list.length > 0 && (
      <VListItem>
        {list.map((item) => (
          <List key={item.id} item={item} each={each} />
        ))}
      </VListItem>
    )
  );
};

export default React.memo(VList);
