---
categories:
  - NextJS
  - NextUI
date: "2022-10-13"
description: NextUI Grid 설명입니다
slug: NextJS Design templete NextUI
tags:
  - nextjs
  - nextui
  - grid
  - react ui library
title: NextUI Grid
id: Anzy
---

## **Grid**

The layout Grid adapts to screen size and orientation, ensuring consistency across layouts.

```
import { Grid } from '@nextui-org/react';
```

### **Default**

Dynamically scale container width while maintaining spacing.

![Grid Sample UI](/nextui-grid-sample-img.png)

```
import { Grid, Card, Text } from "@nextui-org/react";
export default function App() {
  const MockItem = ({ text }) => {
    return (
      <Card css={{ h: "$24", $$cardColor: '$colors$primary' }}>
        <Card.Body>
          <Text h6 size={15} color="white" css={{ mt: 0 }}>
            {text}
          </Text>
        </Card.Body>
      </Card>
    );
  };
  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={4}>
        <MockItem text="1 of 3" />
      </Grid>
      <Grid xs={4}>
        <MockItem text="2 of 3" />
      </Grid>
      <Grid xs={4}>
        <MockItem text="3 of 3" />
      </Grid>
    </Grid.Container>
  );
}
```
