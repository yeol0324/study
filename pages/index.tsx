// import Menu from "/components/Menu";
import ProjectItem from "../components/Common";
import CounterContainer from "@/store/store";
import axios from "@/utils/axios";
export default function home({ userList }: any) {
  return (
    <>
      <div onClick={() => fetchPokemon()}>클릭 </div>
      <div>{/* <Menu /> */}index.tsx</div>
      {userList?.data.map((element: any) => {
        console.log(element.name);
        <div>{element.name}</div>;
      })}
      <div>업데이트 확인</div>
      <CounterContainer />
    </>
  );
}
// 빌드 타임에 호출
// export async function getStaticProps() {
// }
// 각 요청 때마다 호출
// export async function getServerSideProps() {}
const fetchPokemon = async () => {
  const { data }: any = await axios.get("next/api");
  const userList = data;
  return {
    props: { userList }, // will be passed to the page component as props
    // getStaticProps() 메소드를 사용한다면 revalidate 로 데이터 변경시 갱신가능!
    // revalidate: 1 // 데이터 변경이 있으면 갱신 1초 마다
  };
};
