import { render } from '@testing-library/react'
import App from '../src/App'
import React from 'react';

describe('@App', () => { 
    test('#should render the component', () => { 
        render(<App title="Misión Rescate" edition={2} />);
        expect(true).toBeTruthy();
     })
 })
