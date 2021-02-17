import React, { useContext } from "react";
// Modules
import { NextPage } from "next/types";
import { Button } from "@material-ui/core";
import { Context } from "context";
import Header from "components/Header";

const ProductShow: NextPage = () => {
  const { state, dispatch } = useContext(Context);
  return (
    <div>
      <Header title="index" />

      <button
        onClick={() =>
          dispatch({
            type: "LOGGED_IN_USER",
            payload: "Ryan Dhungel",
          })
        }
      >
        login
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "LOGGED_IN_USER",
            payload: null,
          })
        }
      >
        logout
      </button>
      {JSON.stringify(state)}
      <Button color="primary" variant="contained">
        My App
      </Button>
    </div>
  );
};

ProductShow.getInitialProps = async (ctx) => {
  let data = [
    {
      sku: 1,
      title: "First Product",
      price: 12.14,
      maxPlots: 2,
      type: "phone",
      description: "descrição do primeiro produto",
      image:
        "https://http2.mlstatic.com/D_Q_NP_634820-MLA43123276241_082020-AB.webp",
    },
    {
      sku: 2,
      title: "First Product",
      price: 16.14,
      maxPlots: 2,
      type: "phone",
      description: "descrição do primeiro produto",
      image:
        "https://http2.mlstatic.com/D_Q_NP_634820-MLA43123276241_082020-AB.webp",
    },
  ];
  return { data };
};

export default ProductShow;
