import { getPostData } from "../api/md";

import { Container, Text } from "@nextui-org/react";

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "grid" } }, { params: { id: "text" } }],
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params }: any) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }: any) {
  return (
    <Container
      display="flex"
      alignItems="center"
      direction="column"
      css={{ marginTop: "5em", backgroundColor: "white" }}
    >
      <Text h1>{postData.title}</Text>
      <Text>
        {postData.date} / {postData.id}
      </Text>
      <div
        style={{ marginTop: "5em" }}
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
      {/* <pre>
        <code dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </pre> */}
    </Container>
  );
}
