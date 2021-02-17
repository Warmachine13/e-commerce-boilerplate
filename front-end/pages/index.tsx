import React, { useCallback, useContext, useMemo } from "react";
// Modules
import { NextPage } from "next/types";
import {
  Button,
  Container,
  Fab,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  Link,
  Typography,
} from "@material-ui/core";
import { Context } from "context";
import Header from "components/Header";
import { makeStyles } from "@material-ui/core/styles";
import StarBorderIcon from "@material-ui/icons/StarBorder";

interface Product {
  sku: number;
  title: string;
  price: number;
  maxPlots: number;
  type: string;
  description: string;
  img: string;
}

interface HomePage {
  data: Product[];
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",
    // width: "100%",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

// const ListMemoItem = React.memo(
//   ({ item, classes }: { item: Product; classes: any }) => (

//   )
// );

const HomePage: NextPage<HomePage> = ({ data }) => {
  const { state, dispatch } = useContext(Context);
  const classes = useStyles();

  // const ListItem = useCallback(
  //   (item: Product) => (
  //     <GridListTile onClick={() => console.log(item.sku)} key={item.sku}>
  //       <img src={item.img} alt={item.title} />
  //       <GridListTileBar
  //         title={item.title}
  //         subtitle={item.price.toLocaleString("pt-br", {
  //           style: "currency",
  //           currency: "BRL",
  //         })}
  //         classes={{
  //           root: classes.titleBar,
  //           title: classes.title,
  //         }}
  //         actionIcon={
  //           <IconButton aria-label={`star ${item.title}`}>
  //             <StarBorderIcon className={classes.title} />
  //           </IconButton>
  //         }
  //       />
  //     </GridListTile>
  //   ),
  //   [data]
  // );
  const ListItem = useMemo(
    () => (item: Product) => (
      <GridListTile onClick={() => console.log(item.sku)} key={item.sku}>
        <img src={item.img} alt={item.title} />
        <GridListTileBar
          title={item.title}
          subtitle={item.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
          classes={{
            root: classes.titleBar,
            title: classes.title,
          }}
          actionIcon={
            <IconButton aria-label={`star ${item.title}`}>
              <StarBorderIcon className={classes.title} />
            </IconButton>
          }
        />
      </GridListTile>
    ),
    [data]
  );

  return (
    <Container>
      <Header logged={!!state?.user} title="index" />
      <div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Typography>Titulo</Typography>
          <Link>
            <Typography>Ver todos</Typography>
          </Link>
        </div>
        <GridList className={classes.gridList} cols={5}>
          {data.map((item) => ListItem(item))}
        </GridList>
      </div>
      {/* <Fab variant="extended"> */}
      {/* <NavigationIcon className={classes.extendedIcon} /> */}
      {/* </Fab> */}
    </Container>
  );
};

HomePage.getInitialProps = async (ctx) => {
  let data = [
    {
      sku: 1,
      title: "First Product",
      price: 12.14,
      maxPlots: 2,
      type: "phone",
      description: "descrição do primeiro produto",
      img:
        "https://http2.mlstatic.com/D_Q_NP_634820-MLA43123276241_082020-AB.webp",
    },
    {
      sku: 2,
      title: "First Product",
      price: 16.14,
      maxPlots: 2,
      type: "phone",
      description: "descrição do primeiro produto",
      img:
        "https://http2.mlstatic.com/D_Q_NP_634820-MLA43123276241_082020-AB.webp",
    },
    {
      sku: 3,
      title: "First Product",
      price: 16.14,
      maxPlots: 2,
      type: "phone",
      description: "descrição do primeiro produto",
      img:
        "https://http2.mlstatic.com/D_Q_NP_634820-MLA43123276241_082020-AB.webp",
    },
    {
      sku: 4,
      title: "First Product",
      price: 16.14,
      maxPlots: 2,
      type: "phone",
      description: "descrição do primeiro produto",
      img:
        "https://http2.mlstatic.com/D_Q_NP_634820-MLA43123276241_082020-AB.webp",
    },
    {
      sku: 5,
      title: "First Product",
      price: 17,
      maxPlots: 2,
      type: "phone",
      description: "descrição do primeiro produto",
      img:
        "https://http2.mlstatic.com/D_Q_NP_634820-MLA43123276241_082020-AB.webp",
    },
    {
      sku: 5,
      title: "First Product",
      price: 17,
      maxPlots: 2,
      type: "phone",
      description: "descrição do primeiro produto",
      img:
        "https://http2.mlstatic.com/D_Q_NP_634820-MLA43123276241_082020-AB.webp",
    },
  ];
  return { data };
};

export default HomePage;
