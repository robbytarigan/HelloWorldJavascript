import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

const Button = styled.button``;

render(
    <Button>A button</Button>
, document.getElementById('app-root'));