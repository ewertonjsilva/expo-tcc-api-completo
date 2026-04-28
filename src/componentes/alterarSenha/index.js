// src/telas/perfil/componentes/AlterarSenha.js
import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const AlterarSenha = ({ visivel, fechar }) => {
    const [senhaAtual, setSenhaAtual] = useState('');
    const [novaSenha, setNovaSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const handleSalvar = () => {
        if (novaSenha !== confirmarSenha) {
            Alert.alert("Erro", "As novas senhas não coincidem.");
            return;
        }
        // Aqui você chamaria a sua API para dar o UPDATE na tabela USUARIOS
        Alert.alert("Sucesso", "Senha alterada com sucesso!");
        fechar();
    };

    return (
        <Modal visible={visivel} animationType="fade" transparent={true}>
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    <Text style={styles.titulo}>Alterar Senha</Text>

                    <Text style={styles.label}>Senha Atual</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry
                        placeholder="••••••"
                        onChangeText={setSenhaAtual}
                    />

                    <Text style={styles.label}>Nova Senha</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry
                        placeholder="••••••"
                        onChangeText={setNovaSenha}
                    />

                    <Text style={styles.label}>Confirmar Nova Senha</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry
                        placeholder="••••••"
                        onChangeText={setConfirmarSenha}
                    />

                    <View style={styles.areaBotoes}>
                        <TouchableOpacity style={[styles.btn, styles.btnCancelar]} onPress={fechar}>
                            <Text style={styles.txtBtnCancelar}>CANCELAR</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.btn, styles.btnSalvar]} onPress={handleSalvar}>
                            <Text style={styles.txtBtnSalvar}>CONFIRMAR</Text>
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
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '85%',
        backgroundColor: '#FAFAFA',
        borderRadius: 20,
        padding: 20,
        borderWidth: 4,
        borderColor: '#7F0000',
    },
    titulo: { fontSize: 22, color: '#7F0000', fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
    label: { color: '#7F0000', fontWeight: 'bold', marginBottom: 5, marginLeft: 5 },
    input: {
        borderWidth: 3,
        borderColor: '#7F0000',
        borderRadius: 15,
        padding: 10,
        marginBottom: 15,
        backgroundColor: '#FFF',
        textAlign: 'center',
        fontSize: 18
    },
    areaBotoes: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
    btn: { padding: 12, borderRadius: 15, width: '48%', alignItems: 'center', borderWidth: 2 },
    btnCancelar: { borderColor: '#7F0000' },
    btnSalvar: { backgroundColor: '#7F0000', borderColor: '#7F0000' },
    txtBtnCancelar: { color: '#7F0000', fontWeight: 'bold' },
    txtBtnSalvar: { color: '#FFF', fontWeight: 'bold' }
});

export default AlterarSenha;