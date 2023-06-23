import ProjectItem from "../components/Common";
export default function Example({ projects }: any) {
  return (
    <>
      {projects.results.map((aProject: any) => (
        <ProjectItem key={aProject.id} data={aProject} />
      ))}
    </>
  );
}
export async function getServerSideProps() {
  const projects = {
    results: [
      {
        object: "page",
        id: "bfa3cec4-831d-47c0-b87c-7398ecbe2238",
        created_time: "2022-06-06T14:47:00.000Z",
        last_edited_time: "2022-06-06T14:52:00.000Z",
        created_by: {
          object: "user",
          id: "324712ec-ef10-41d0-a58c-446289de3384",
        },
        last_edited_by: {
          object: "user",
          id: "324712ec-ef10-41d0-a58c-446289de3384",
        },
        cover: {
          type: "external",
          external: {
            url: "https://www.notion.so/images/page-cover/nasa_transonic_tunnel.jpg",
          },
        },
        icon: null,
        parent: {
          type: "database_id",
          database_id: "4c7000fa-4198-4eff-bdfc-8a339142639b",
        },
        archived: false,
        properties: {
          Description: {
            id: "G%60y%5B",
            type: "rich_text",
            rich_text: [
              {
                type: "text",
                text: { content: "프로젝트 설명입니다!!!", link: null },
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: "default",
                },
                plain_text: "프로젝트 설명입니다!!!",
                href: null,
              },
            ],
          },
          Github: {
            id: "J%5CO~",
            type: "url",
            url: "https://github.com/TuenTuenna",
          },
          Youtube: {
            id: "WySg",
            type: "url",
            url: "https://youtu.be/iRTLcI0kkZg",
          },
          WorkPeriod: {
            id: "%5BSuU",
            type: "date",
            date: {
              start: "2022-06-01",
              end: "2022-06-06",
              time_zone: null,
            },
          },
          Tags: {
            id: "lk%7DO",
            type: "multi_select",
            multi_select: [
              {
                id: "b0fd0679-1f2c-4edf-8318-c3c04aa1f683",
                name: "Next.js",
                color: "orange",
              },
              {
                id: "9915433a-6ec6-47ee-8583-44d9421b8a18",
                name: "TailwindCSS",
                color: "pink",
              },
              {
                id: "046748c3-04b9-4244-93ec-1c61e2be3cb2",
                name: "빡코딩",
                color: "gray",
              },
            ],
          },
          Name: {
            id: "title",
            type: "title",
            title: [
              {
                type: "text",
                text: { content: "정대리 프로젝트 01", link: null },
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: "default",
                },
                plain_text: "정대리 프로젝트 01",
                href: null,
              },
            ],
          },
        },
        url: "https://www.notion.so/01-bfa3cec4831d47c0b87c7398ecbe2238",
      },
      {
        object: "page",
        id: "f72767d9-47ea-4062-9d41-12e4f835f56d",
        created_time: "2022-06-06T14:53:00.000Z",
        last_edited_time: "2022-06-06T14:53:00.000Z",
        created_by: {
          object: "user",
          id: "324712ec-ef10-41d0-a58c-446289de3384",
        },
        last_edited_by: {
          object: "user",
          id: "324712ec-ef10-41d0-a58c-446289de3384",
        },
        cover: {
          type: "external",
          external: {
            url: "https://www.notion.so/images/page-cover/gradients_4.png",
          },
        },
        icon: null,
        parent: {
          type: "database_id",
          database_id: "4c7000fa-4198-4eff-bdfc-8a339142639b",
        },
        archived: false,
        properties: {
          Description: {
            id: "G%60y%5B",
            type: "rich_text",
            rich_text: [
              {
                type: "text",
                text: { content: "프로젝트 설명입니다!!!222", link: null },
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: "default",
                },
                plain_text: "프로젝트 설명입니다!!!222",
                href: null,
              },
            ],
          },
          Github: {
            id: "J%5CO~",
            type: "url",
            url: "https://github.com/TuenTuenna",
          },
          Youtube: {
            id: "WySg",
            type: "url",
            url: "https://youtu.be/iRTLcI0kkZg",
          },
          WorkPeriod: {
            id: "%5BSuU",
            type: "date",
            date: {
              start: "2022-06-01",
              end: "2022-06-06",
              time_zone: null,
            },
          },
          Tags: {
            id: "lk%7DO",
            type: "multi_select",
            multi_select: [
              {
                id: "b0fd0679-1f2c-4edf-8318-c3c04aa1f683",
                name: "Next.js",
                color: "orange",
              },
              {
                id: "9915433a-6ec6-47ee-8583-44d9421b8a18",
                name: "TailwindCSS",
                color: "pink",
              },
              {
                id: "046748c3-04b9-4244-93ec-1c61e2be3cb2",
                name: "빡코딩",
                color: "gray",
              },
            ],
          },
          Name: {
            id: "title",
            type: "title",
            title: [
              {
                type: "text",
                text: { content: "정대리 프로젝트 02", link: null },
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: "default",
                },
                plain_text: "정대리 프로젝트 02",
                href: null,
              },
            ],
          },
        },
        url: "https://www.notion.so/02-f72767d947ea40629d4112e4f835f56d",
      },
      {
        object: "page",
        id: "cfcfa759-48db-49a3-85f4-94be3527cffa",
        created_time: "2022-06-06T14:53:00.000Z",
        last_edited_time: "2022-06-06T16:01:00.000Z",
        created_by: {
          object: "user",
          id: "324712ec-ef10-41d0-a58c-446289de3384",
        },
        last_edited_by: {
          object: "user",
          id: "324712ec-ef10-41d0-a58c-446289de3384",
        },
        cover: {
          type: "external",
          external: {
            url: "https://images.unsplash.com/photo-1450149632596-3ef25a62011a?ixlib=rb-1.2.1 &q =80 &cs =tinysrgb &fm =jpg &crop =entropy",
          },
        },
        icon: null,
        parent: {
          type: "database_id",
          database_id: "4c7000fa-4198-4eff-bdfc-8a339142639b",
        },
        archived: false,
        properties: {
          Description: {
            id: "G%60y%5B",
            type: "rich_text",
            rich_text: [
              {
                type: "text",
                text: { content: "프로젝트 설명입니다!!!333", link: null },
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: "default",
                },
                plain_text: "프로젝트 설명입니다!!!333",
                href: null,
              },
            ],
          },
          Github: {
            id: "J%5CO~",
            type: "url",
            url: "https://github.com/TuenTuenna",
          },
          Youtube: {
            id: "WySg",
            type: "url",
            url: "https://youtu.be/iRTLcI0kkZg",
          },
          WorkPeriod: {
            id: "%5BSuU",
            type: "date",
            date: {
              start: "2022-06-01",
              end: "2022-06-06",
              time_zone: null,
            },
          },
          Tags: {
            id: "lk%7DO",
            type: "multi_select",
            multi_select: [
              {
                id: "b0fd0679-1f2c-4edf-8318-c3c04aa1f683",
                name: "Next.js",
                color: "orange",
              },
              {
                id: "9915433a-6ec6-47ee-8583-44d9421b8a18",
                name: "TailwindCSS",
                color: "pink",
              },
              {
                id: "046748c3-04b9-4244-93ec-1c61e2be3cb2",
                name: "빡코딩",
                color: "gray",
              },
            ],
          },
          Name: {
            id: "title",
            type: "title",
            title: [
              {
                type: "text",
                text: { content: "정대리 프로젝트 03", link: null },
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: "default",
                },
                plain_text: "정대리 프로젝트 03",
                href: null,
              },
            ],
          },
        },
        url: "https://www.notion.so/03-cfcfa75948db49a385f494be3527cffa",
      },
      {
        object: "page",
        id: "16d6deac-e1f1-4d8c-a2df-7d18b67fd2f8",
        created_time: "2022-06-06T14:53:00.000Z",
        last_edited_time: "2022-06-06T14:53:00.000Z",
        created_by: {
          object: "user",
          id: "324712ec-ef10-41d0-a58c-446289de3384",
        },
        last_edited_by: {
          object: "user",
          id: "324712ec-ef10-41d0-a58c-446289de3384",
        },
        cover: {
          type: "file",
          file: {
            url: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/853008ef-1f4e-4ab6-a155-0ca7e5475ce3/%E1%84%89%E1%85%A1%E1%86%BC%E1%84%83%E1%85%A1%E1%86%B7.png?X-Amz-Algorithm=AWS4-HMAC-SHA256 &X-Amz-Content-Sha256 =UNSIGNED-PAYLOAD &X-Amz-Credential =AKIAT73L2G45EIPT3X45%2F20220626%2Fus-west-2%2Fs3%2Faws4_request &X-Amz-Date =20220626T080650Z &X-Amz-Expires =3600 &X-Amz-Signature =f84ec8f2c497ae1a7bf918f2be9596c31ab68e06f01c8edc0a1a2777d4922198 &X-Amz-SignedHeaders =host &x-id =GetObject",
            expiry_time: "2022-06-26T09:06:50.879Z",
          },
        },
        icon: null,
        parent: {
          type: "database_id",
          database_id: "4c7000fa-4198-4eff-bdfc-8a339142639b",
        },
        archived: false,
        properties: {
          Description: {
            id: "G%60y%5B",
            type: "rich_text",
            rich_text: [
              {
                type: "text",
                text: { content: "프로젝트 설명입니다!!!444", link: null },
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: "default",
                },
                plain_text: "프로젝트 설명입니다!!!444",
                href: null,
              },
            ],
          },
          Github: {
            id: "J%5CO~",
            type: "url",
            url: "https://github.com/TuenTuenna",
          },
          Youtube: {
            id: "WySg",
            type: "url",
            url: "https://youtu.be/iRTLcI0kkZg",
          },
          WorkPeriod: {
            id: "%5BSuU",
            type: "date",
            date: {
              start: "2022-06-01",
              end: "2022-06-06",
              time_zone: null,
            },
          },
          Tags: {
            id: "lk%7DO",
            type: "multi_select",
            multi_select: [
              {
                id: "b0fd0679-1f2c-4edf-8318-c3c04aa1f683",
                name: "Next.js",
                color: "orange",
              },
              {
                id: "9915433a-6ec6-47ee-8583-44d9421b8a18",
                name: "TailwindCSS",
                color: "pink",
              },
              {
                id: "046748c3-04b9-4244-93ec-1c61e2be3cb2",
                name: "빡코딩",
                color: "gray",
              },
            ],
          },
          Name: {
            id: "title",
            type: "title",
            title: [
              {
                type: "text",
                text: { content: "정대리 프로젝트 04", link: null },
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: "default",
                },
                plain_text: "정대리 프로젝트 04",
                href: null,
              },
            ],
          },
        },
        url: "https://www.notion.so/04-16d6deace1f14d8ca2df7d18b67fd2f8",
      },
      {
        object: "page",
        id: "6ad0388a-b382-4464-868e-860897e6155d",
        created_time: "2022-06-06T14:54:00.000Z",
        last_edited_time: "2022-06-06T14:54:00.000Z",
        created_by: {
          object: "user",
          id: "324712ec-ef10-41d0-a58c-446289de3384",
        },
        last_edited_by: {
          object: "user",
          id: "324712ec-ef10-41d0-a58c-446289de3384",
        },
        cover: {
          type: "external",
          external: {
            url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1 &q =80 &cs =tinysrgb &fm =jpg &crop =entropy",
          },
        },
        icon: null,
        parent: {
          type: "database_id",
          database_id: "4c7000fa-4198-4eff-bdfc-8a339142639b",
        },
        archived: false,
        properties: {
          Description: {
            id: "G%60y%5B",
            type: "rich_text",
            rich_text: [
              {
                type: "text",
                text: { content: "프로젝트 설명입니다!!!555", link: null },
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: "default",
                },
                plain_text: "프로젝트 설명입니다!!!555",
                href: null,
              },
            ],
          },
          Github: {
            id: "J%5CO~",
            type: "url",
            url: "https://github.com/TuenTuenna",
          },
          Youtube: {
            id: "WySg",
            type: "url",
            url: "https://youtu.be/iRTLcI0kkZg",
          },
          WorkPeriod: {
            id: "%5BSuU",
            type: "date",
            date: {
              start: "2022-06-01",
              end: "2022-06-06",
              time_zone: null,
            },
          },
          Tags: {
            id: "lk%7DO",
            type: "multi_select",
            multi_select: [
              {
                id: "b0fd0679-1f2c-4edf-8318-c3c04aa1f683",
                name: "Next.js",
                color: "orange",
              },
              {
                id: "9915433a-6ec6-47ee-8583-44d9421b8a18",
                name: "TailwindCSS",
                color: "pink",
              },
              {
                id: "046748c3-04b9-4244-93ec-1c61e2be3cb2",
                name: "빡코딩",
                color: "gray",
              },
            ],
          },
          Name: {
            id: "title",
            type: "title",
            title: [
              {
                type: "text",
                text: { content: "정대리 프로젝트 05", link: null },
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: "default",
                },
                plain_text: "정대리 프로젝트 05",
                href: null,
              },
            ],
          },
        },
        url: "https://www.notion.so/05-6ad0388ab3824464868e860897e6155d",
      },
    ],
    // __N_SSG: true,
  };

  return {
    props: { projects }, // will be passed to the page component as props
    // getStaticProps() 메소드를 사용한다면 revalidate 로 데이터 변경시 갱신가능!
    // revalidate: 1 // 데이터 변경이 있으면 갱신 1초 마다
  };
}
