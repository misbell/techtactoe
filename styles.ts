import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    board: {
        width: 300,
        height: 300,
        backgroundColor: '#ddd',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
    },
    square: {
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: '#888',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    squareText: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#333',
    },
    resetButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: 'red',
        borderRadius: 5,
    },
    resetButtonText: {
        color: '#fff',
        fontSize: 18,
    },
    info: {
        marginTop: 20,
        fontSize: 18,
    },
    container2: {
        flex: 1,
        justifyContent: 'center',
      },
      text: {
        fontSize: 16,
      },
      wrapperCustom: {
        borderRadius: 8,
        padding: 6,
      },
      logBox: {
        padding: 20,
        margin: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#f0f0f0',
        backgroundColor: '#f9f9f9',
      },
      buttonpressed: {
        backgroundColor: 'rgb(210, 230, 255)',
      },
      buttonreleased: {
        backgroundColor: 'white',
      },
      textpressed: {
        color: 'rgb(210, 230, 255)',
      },
      textreleased: {
        color: 'black',
      },
      squareimage: { 
        width: 100,
        height: 100,
        margin: 10,
        
      },
      link: {
        fontSize: 16,
        color: 'blue',
        textDecorationLine: 'underline',
        marginVertical: 10,
      },
});

 