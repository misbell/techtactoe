import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import * as React from 'react';

type QuestionsBoardProps = {
  questions: string[];
  onSubmit: (obj: {}) => void;
};

function QuestionsBoard({ questions, onSubmit }: QuestionsBoardProps) {
  const [data, setData] = React.useState({});

  return (
    <ScrollView>
      {questions.map((q, index) => (
        <View key={q}>
          <Text>{q}</Text>
          <TextInput
            accessibilityLabel="answer input"
            accessibilityHint="input"
            onChangeText={(text) =>
              setData((state) => ({
                ...state,
                [index + 1]: { q, a: text },
              }))
            }
          />
        </View>
      ))}
      <Pressable accessibilityRole="button" onPress={() => onSubmit(data)}>
        <Text>Submit</Text>
      </Pressable>
    </ScrollView>
  );
}

export default QuestionsBoard;
