import React, { useState, useEffect, memo } from 'react';
import { Header } from '@buffetjs/custom';
import { Table } from '@buffetjs/core';
import axios from 'axios';

import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 18px 30px;

  p {
    margin: 1rem;
  }
`;

const HomePage = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function loadRepositories(){
      try{
        const response = await axios.get('https://api.github.com/users/felipe-jm/repos');

        setRows(response.data);
      }catch(err){
        strapi.notification.error('Error trying to get repositories D: Sorry');
      }
    }

    loadRepositories()
  }, []);

  const headers = [
    {
      name: "Name",
      value: "name",
    },
    {
      name: "Description",
      value: "description",
    },
    {
      name: "Url",
      value: "html_url",
    },
  ];

  return (
    <Wrapper>
      <Header
        title={{ label: "Felipe's Repositories" }}
        content="A list of my repositories"
      />

      <Table  headers={headers} rows={rows} />
    </Wrapper>
  );
};

export default memo(HomePage);
