/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
import React, { useEffect, useState } from "react";
function TodoItem({item, onCheck}) {
  const [style, setStyle] = useState("black");
  const [isClicked, setClicked] = useState(false);
  const handleClick = () => {
    if (!isClicked){
      setStyle("grey");
      setClicked(true);
     
    }
    else {
      setStyle("black");
      setClicked(false);
    }
    onCheck(item);
  };

  
  return (
    <label className="panel-block" style={{color : style}}>
      <input type="checkbox" checked={item.done} onClick={handleClick} />
      {item.text}
    </label>
  );
}


export default TodoItem;