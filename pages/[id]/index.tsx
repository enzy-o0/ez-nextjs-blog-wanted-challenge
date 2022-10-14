import type { NextPage } from "next";

import { useEffect } from "react";
import { getPostData } from "../api/md";

import { Container, Card, Row, Text } from "@nextui-org/react";

export async function getStaticPaths({ params }) {
  return {
    paths: [{ params: { id: "grid" } }, { params: { id: "text" } }],
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
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
