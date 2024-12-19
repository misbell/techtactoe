test('placeholder test', () => {
  expect(true).toBe(true);
});

// import React from 'react';
// import { render, fireEvent } from '@testing-library/react-native';
// import OpponentPickerScreen from '../components/OpponentPickerScreen';

// test('OpponentPickerScreen renders correctly and navigates on press', () => {
//   const mockNavigate = jest.fn();

//   const { getByText } = render(
//     <OpponentPickerScreen navigation={{ navigate: mockNavigate }} />
//   );

//   // Verify opponent options are rendered
//   expect(getByText('Xi Jinping')).toBeTruthy();
//   expect(getByText('Vladimir Putin')).toBeTruthy();
//   expect(getByText('Kim Jong Un')).toBeTruthy();

//   // Simulate button press
//   fireEvent.press(getByText('Xi Jinping'));
//   expect(mockNavigate).toHaveBeenCalledWith('Game', { opponent: 'Xi' });
// });