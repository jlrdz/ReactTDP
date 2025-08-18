import React from 'react';
import ButtonOne from './components/ButtonOne';
import ButtonTwo from './components/ButtonTwo';
import ButtonThree from './components/ButtonThree';

export function App(props) {
  return (
    <div className='App'>
      <h1>Traditional CSS</h1>
      <ButtonOne>Click me</ButtonOne>
      <ButtonOne disabled>Click me</ButtonOne>
      <ButtonOne active className='test'>
        Click me
      </ButtonOne>
      <h1>CSS Modules</h1>
      <ButtonTwo>Click me</ButtonTwo>
      <ButtonTwo disabled>Click me</ButtonTwo>
      <ButtonTwo active className='test'>
        Click me
      </ButtonTwo>
      <h1>Styled Components</h1>
      <ButtonThree>
        {' '}
        <span>Click me</span>
      </ButtonThree>
      <ButtonThree disabled>
        {' '}
        <span>Click me</span>
      </ButtonThree>
      <ButtonThree active>
        {' '}
        <span>Click me</span>
      </ButtonThree>
    </div>
  );
}

// Log to console
console.log('Hello console');
