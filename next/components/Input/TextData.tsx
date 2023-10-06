import React, { useState } from "react";

function TextData() {
  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");
  const updateData1 = (e: any) => setData1(e.target.value);
  const updateData2 = (e: any) => setData2(e.target.value);

  function Send() {
    console.log(data1);
    console.log(data2);
  }
  return (
    <div>
      TextData
      <div>
        data1: <input onChange={updateData1}></input>
      </div>
      <div>data1Render: {data1}</div>
      <div>
        data2: <input onChange={updateData2}></input>
      </div>
      <div>data2Render: {data2}</div>
      <div>
        <button onClick={() => Send()}>Send</button>
      </div>
    </div>
  );
}
export default TextData;
