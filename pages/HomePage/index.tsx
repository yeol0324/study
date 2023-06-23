// import TextData from "../../components/BaseInput/TextData";
import React, { useState } from "react";

export default function HomePage({ data }: any) {
  return (
    <div>
      home
      {data.name}
      {/* <TextData></TextData> */}
    </div>
  );
}
export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api");
  const data = await res.json();
  console.log(data);

  return { props: { data } };
}
