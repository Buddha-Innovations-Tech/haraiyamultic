import React from "react";
import { useQuery } from "@apollo/react-hooks";
import {Placeholder} from "react-bootstrap"
const Query = ({ children, query, id }) => {
  const { data, loading, error } = useQuery(query, {
    variables: { id: id },
  });
  console.log(data, loading, error);

  if (loading) return <Placeholder as="p" animation="glow">
  <Placeholder xs={12} />
</Placeholder>

  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  return children({ data });
};

export default Query;
