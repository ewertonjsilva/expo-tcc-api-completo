import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#FAFAFA',
    },
    container: {
        padding: 20,
        alignItems: 'center',
    },
    titulo: {
        fontSize: 26,
        color: '#7F0000',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
    },
    section: {
        width: '100%',
        marginBottom: 20,
    },
    label: {
        color: '#7F0000',
        fontSize: 14,
        marginBottom: 4,
        marginLeft: 8,
        fontWeight: '600'
    },
    input: {
        borderColor: '#7F0000',
        borderWidth: 3, // Seguindo o modelo de bordas grossas
        borderRadius: 15,
        width: '100%',
        padding: 12,
        fontSize: 18,
        backgroundColor: '#FFF',
        marginBottom: 15,
    },
    inputDisabled: {
        backgroundColor: '#E0E0E0',
        borderColor: '#999',
    },
    txtDisabled: {
        fontSize: 18,
        color: '#666',
    },
    row: {
        flexDirection: 'row',
        width: '100%',
    },
    btnPrincipal: {
        backgroundColor: '#7F0000',
        borderRadius: 20,
        padding: 15,
        alignItems: 'center',
        marginTop: 10,
        borderWidth: 3,
        borderColor: '#7F0000',
    },
    txtBtnPrincipal: {
        color: '#FAFAFA',
        fontWeight: 'bold',
        fontSize: 18,
    },
    cardEndereco: {
        width: '100%',
        backgroundColor: '#FFF',
        borderWidth: 3,
        borderColor: '#7F0000',
        borderRadius: 15,
        padding: 15,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    txtLogradouro: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    txtBairro: {
        fontSize: 14,
        color: '#666',
    },
    tagPrincipal: {
        fontSize: 12,
        color: '#7F0000',
        fontStyle: 'italic',
        marginTop: 4,
    },
    areaAcoes: {
        alignItems: 'flex-end',
    },
    btnAcao: {
        paddingVertical: 4,
        fontSize: 14,
        color: '#555',
    },
    btnSecundario: {
        width: '100%',
        borderRadius: 20,
        padding: 12,
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#7F0000',
        borderStyle: 'dashed', // Estilo para diferenciar "adicionar" de "salvar"
        marginTop: 10,
    },
    txtBtnSecundario: {
        color: '#7F0000',
        fontWeight: 'bold',
        fontSize: 16,
    }
});


export default styles;