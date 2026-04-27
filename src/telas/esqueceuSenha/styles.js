import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around', 
        alignItems: 'center', 
        backgroundColor: '#FAFAFA',
        padding: 8, 
        width: '100%',
    }, 
    text: { 
        fontSize: 32, 
        color: '#7F0000', 
        fontWeight: 'bold',
    }, 
    textMensagem: { 
        fontSize: 16, 
        width: '80%',
        
    }, 
    btnVoltar: { 
        borderColor: '#7F0000', 
        borderWidth: 4, 
        borderRadius: 20,
        width: '80%', 
        marginVertical: 32,  
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#7F0000',
        padding: 10
    }, 
    txtVoltar: {
        fontSize: 20, 
        textAlign: 'center', 
        padding: 8, 
        color: '#FAFAFA', 
        fontWeight: 'bold', 
        paddingHorizontal: 32
    }, 
});

export default styles;