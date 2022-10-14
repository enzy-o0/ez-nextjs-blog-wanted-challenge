import type { NextPage } from "next";
import { useRouter } from "next/router";

import {
  Navbar,
  Text,
  Card,
  Grid,
  Link,
  Container,
  Row,
} from "@nextui-org/react";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Grid.Container gap={3} justify="center">
        <Grid xs={3}>
          <Card css={{ p: "$6", mw: "400px" }}>
            <Card.Header>
              <img
                alt="nextui logo"
                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width="34px"
                height="34px"
              />
              <Grid.Container css={{ pl: "$6" }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: "$xs" }}>
                    Next UI
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: "$accents8" }}>nextui.org</Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: "$2" }}>
              <Text>NextUI의 Grid를 만나볼까요?</Text>
            </Card.Body>
            <Card.Footer>
              <Link icon color="primary" href="/grid">
                Grid 보러가기
              </Link>
            </Card.Footer>
          </Card>
        </Grid>
        <Grid xs={3}>
          <Card css={{ p: "$6", mw: "400px" }}>
            <Card.Header>
              <img
                alt="nextui logo"
                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width="34px"
                height="34px"
              />
              <Grid.Container css={{ pl: "$6" }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: "$xs" }}>
                    Next UI
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: "$accents8" }}>nextui.org</Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: "$2" }}>
              <Text>NextUI의 Text를 만나볼까요?</Text>
            </Card.Body>
            <Card.Footer>
              <Link
                icon
                color="primary"
                target="_blank"
                href="/text"
              >
                Text 보러가기
              </Link>
            </Card.Footer>
          </Card>
        </Grid>
      </Grid.Container>
    </>
  );
};

export default Home;
