// import React from 'react';
// import { render, fireEvent, waitFor, screen } from '@testing-library/react-native';
// import QuestionsBoard from '../QuestionBoard';

// test('form submits two answers', () => {
//   const questions = ['q1', 'q2'];
//   const onSubmit = jest.fn();

//   render( <QuestionsBoard questions={questions} onSubmit={onSubmit} />);

//   const answerInputs = screen.getAllByLabelText('answer input');
//   fireEvent.changeText(answerInputs[0], 'a1');
//   fireEvent.changeText(answerInputs[1], 'a2');
//   fireEvent.press(screen.getByText('Submit'));

//   expect(onSubmit).toHaveBeenCalledWith({
//     '1': { q: 'q1', a: 'a1' },
//     '2': { q: 'q2', a: 'a2' },
//   });
// });
import React from 'react';
import { render } from '@testing-library/react-native';
import QuestionBoard from '../QuestionBoard';

test('renders QuestionsBoard component', () => {
  const questions = ['q1', 'q2'];
  const { getByText } = render(
    <QuestionBoard questions={questions} onSubmit={jest.fn()} />
  );

  expect(getByText('q1')).toBeTruthy();
  expect(getByText('q2')).toBeTruthy();
});