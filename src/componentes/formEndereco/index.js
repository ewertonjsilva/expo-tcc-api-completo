// src/telas/perfil/componentes/FormEndereco.js
import React from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const FormEndereco = ({ visivel, fechar, endereco, setEndereco, salvar }) => {
    return (
        <Modal visible={visivel} animationType="slide" transparent={true}>
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    <Text style={styles.titulo}>Dados do Endereço</Text>

                    <ScrollView>
                        <Text style={styles.label}>Logradouro</Text>
                        <TextInput
                            style={styles.input}
                            value={endereco?.end_logradouro}
                            onChangeText={(t) => setEndereco({ ...endereco, end_logradouro: t })}
                        />

                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1, marginRight: 5 }}>
                                <Text style={styles.label}>Número</Text>
                                <TextInput
                                    style={styles.input}
                                    value={endereco?.end_num}
                                    onChangeText={(t) => setEndereco({ ...endereco, end_num: t })}
                                />
                            </View>
                            <View style={{ flex: 2, marginLeft: 5 }}>
                                <Text style={styles.label}>Bairro</Text>
                                <TextInput
                                    style={styles.input}
                                    value={endereco?.end_bairro}
                                    onChangeText={(t) => setEndereco({ ...endereco, end_bairro: t })}
                                />
                            </View>
                        </View>

                        <Text style={styles.label}>Complemento</Text>
                        <TextInput
                            style={styles.input}
                            value={endereco?.end_complemento}
                            onChangeText={(t) => setEndereco({ ...endereco, end_complemento: t })}
                        />
                    </ScrollView>

                    <View style={styles.areaBotoes}>
                        <TouchableOpacity style={[styles.btn, styles.btnCancelar]} onPress={fechar}>
                            <Text style={styles.txtBtnCancelar}>CANCELAR</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.btn, styles.btnSalvar]} onPress={salvar}>
                            <Text style={styles.txtBtnSalvar}>SALVAR</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '90%',
        backgroundColor: '#FAFAFA',
        borderRadius: 20,
        padding: 20,
        borderWidth: 4,
        borderColor: '#7F0000',
        maxHeight: '80%',
    },
    titulo: { fontSize: 22, color: '#7F0000', fontWeight: 'bold', marginBottom: 15 },
    label: { color: '#7F0000', fontWeight: 'bold', marginBottom: 5 },
    input: {
        borderWidth: 3,
        borderColor: '#7F0000',
        borderRadius: 15,
        padding: 10,
        marginBottom: 15,
        backgroundColor: '#FFF'
    },
    areaBotoes: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
    btn: { padding: 12, borderRadius: 15, width: '48%', alignItems: 'center', borderWidth: 2 },
    btnCancelar: { borderColor: '#7F0000' },
    btnSalvar: { backgroundColor: '#7F0000', borderColor: '#7F0000' },
    txtBtnCancelar: { color: '#7F0000', fontWeight: 'bold' },
    txtBtnSalvar: { color: '#FFF', fontWeight: 'bold' }
});

export default FormEndereco;