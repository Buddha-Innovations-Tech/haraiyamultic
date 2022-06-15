import React, { useState } from "react";
import { useParams } from "react-router-dom";
import gql from "graphql-tag";
import { Container } from "react-bootstrap";
import Query from "../../components/Query";
const SingleNotice = () => {
  const { id } = useParams();

  const SINGLE_NOTICE = gql`
    query NewQuery($id: ID!) {
      notice(id: $id, idType: SLUG) {
        notice {
          noticeImage {
            sourceUrl
          }
        }
      }
    }
  `;

  return (
    <>
      <Query query={SINGLE_NOTICE} id={id}>
        {({ data: { notice } }) => {
          return (
            <>
              <Container>
                <div className="single-notice-img">
                  <img src={notice.notice.noticeImage.sourceUrl} alt="" />
                </div>
              </Container>
            </>
          );
        }}
      </Query>
    </>
  );
};

export default SingleNotice;
