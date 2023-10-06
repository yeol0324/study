import { useState } from "react";
import InputWrapper from "@/components/Input/BaseInput";
import axios from "@/utils/axios";

export default function Join() {
  const [joinId, setjoinId] = useState("");
  const handleChangeId = (e: any) => {
    setjoinId(e.target.value);
  };
  const [joinPwd, setjoinPwd] = useState("");
  const handleChangePwd = (e: any) => {
    setjoinPwd(e.target.value);
  };
  return (
    <>
      <div>Join page</div>
      <InputWrapper
        id="joinId"
        value={joinId}
        type="txt"
        onChange={handleChangeId}
      >
        <InputWrapper.Label>아이디</InputWrapper.Label>
        <InputWrapper.Input />
      </InputWrapper>
      <InputWrapper
        id="joinPwd"
        value={joinPwd}
        type="txt"
        onChange={handleChangePwd}
      >
        <InputWrapper.Label>비번</InputWrapper.Label>
        <InputWrapper.Input />
      </InputWrapper>
      <button
        onClick={() => {
          updateName(joinId);
        }}
      >
        가입하기
      </button>
    </>
  );
}

const updateName = (name: string) => axios.post("api", { name });
