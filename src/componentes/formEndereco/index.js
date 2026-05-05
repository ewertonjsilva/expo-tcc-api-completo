/**
 * @file    src\componentes\formEndereco\index.js
 * @author  Ewerton
 * @date    2026-05-05
 */

import React, { useState, useEffect } from 'react';
import {
    Modal, View, Text, TextInput, TouchableOpacity,
    StyleSheet, ScrollView, FlatList, ActivityIndicator
} from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Você precisará instalar: expo install @react-native-picker/picker
import api from '../../services/api';

const FormEndereco = ({ visivel, fechar, endereco, setEndereco, salvar }) => {
    const [listaUfs, setListaUfs] = useState([]);
    const [listaCidades, setListaCidades] = useState([]);
    const [ufSelecionada, setUfSelecionada] = useState('');
    const [buscaCidade, setBuscaCidade] = useState('');
    const [carregandoCidades, setCarregandoCidades] = useState(false);
    const [mostrarSugestoes, setMostrarSugestoes] = useState(false);

    // Sincroniza a UF e o Nome da Cidade quando o modal abre para edição
    useEffect(() => {
        if (visivel && endereco?.end_id) {
            setUfSelecionada(endereco.cid_uf);
            setBuscaCidade(endereco.cid_nome);
        } else if (visivel) {
            // Resetar estados internos ao abrir para novo cadastro
            setUfSelecionada('');
            setBuscaCidade('');
        }
    }, [visivel, endereco]);

    // Carregar UFs ao montar o componente
    useEffect(() => {
        const carregarUfs = async () => {
            try {
                const response = await api.get('/cidades/listar-ufs');
                if (response.data.sucesso) setListaUfs(response.data.dados);
            } catch (error) {
                console.error("Erro ao carregar UFs", error);
            }
        };
        carregarUfs();
    }, []);

    // Buscar cidades quando a UF muda ou o usuário digita
    useEffect(() => {
        if (ufSelecionada) {
            const delayDebounceFn = setTimeout(() => {
                buscarCidades();
            }, 500); // Debounce para não sobrecarregar a API enquanto digita

            return () => clearTimeout(delayDebounceFn);
        }
    }, [ufSelecionada, buscaCidade]);

    const buscarCidades = async () => {
        setCarregandoCidades(true);
        try {
            const response = await api.get(`/cidades?uf=${ufSelecionada}&cidade=${buscaCidade}`);
            if (response.data.sucesso) {
                setListaCidades(response.data.dados);
            }
        } catch (error) {
            console.error("Erro ao buscar cidades", error);
        } finally {
            setCarregandoCidades(false);
        }
    };

    const selecionarCidade = (item) => {
        // 2. Atualiza tanto a chave do banco quanto a chave do body para garantir compatibilidade
        setEndereco({
            ...endereco,
            idCidade: item.id,
            cid_id: item.id,
            cid_nome: item.cidade
        });
        setBuscaCidade(item.cidade);
        setMostrarSugestoes(false);
    };

    return (
        <Modal visible={visivel} animationType="slide" transparent={true}>
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    <Text style={styles.titulo}>Dados do Endereço</Text>

                    <ScrollView keyboardShouldPersistTaps="handled">
                        <Text style={styles.label}>Logradouro</Text>
                        <TextInput
                            style={styles.input}
                            // 3. Verifica as duas chaves possíveis (do banco ou do estado novo)
                            value={endereco?.end_logradouro || endereco?.logradouro}
                            onChangeText={(t) => setEndereco({ ...endereco, end_logradouro: t, logradouro: t })}
                        />

                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1, marginRight: 5 }}>
                                <Text style={styles.label}>Número</Text>
                                <TextInput
                                    style={styles.input}
                                    value={endereco?.end_num || endereco?.num}
                                    onChangeText={(t) => setEndereco({ ...endereco, end_num: t, num: t })}
                                />
                            </View>
                            <View style={{ flex: 2, marginLeft: 5 }}>
                                <Text style={styles.label}>Bairro</Text>
                                <TextInput
                                    style={styles.input}
                                    value={endereco?.end_bairro || endereco?.bairro}
                                    onChangeText={(t) => setEndereco({ ...endereco, end_bairro: t, bairro: t })}
                                />
                            </View>
                        </View>

                        <Text style={styles.label}>Complemento</Text>
                        <TextInput
                            style={styles.input}
                            value={endereco?.end_complemento || endereco?.complemento}
                            onChangeText={(t) => setEndereco({ ...endereco, end_complemento: t, complemento: t })}
                        />

                        <Text style={styles.label}>Estado (UF)</Text>
                        <View style={styles.pickerContainer}>
                            <Picker
                                selectedValue={ufSelecionada}
                                onValueChange={(itemValue) => {
                                    setUfSelecionada(itemValue);
                                    setBuscaCidade('');
                                    setEndereco({ ...endereco, cid_id: null, idCidade: null });
                                }}
                            >
                                <Picker.Item label="Selecione um estado..." value="" />
                                {listaUfs.map((item, index) => (
                                    <Picker.Item key={index} label={item.cid_uf} value={item.cid_uf} />
                                ))}
                            </Picker>
                        </View>

                        <Text style={styles.label}>Cidade</Text>
                        <TextInput
                            style={[styles.input, !ufSelecionada && styles.inputDesativado]}
                            placeholder={ufSelecionada ? "Digite o nome da cidade..." : "Selecione a UF primeiro"}
                            editable={!!ufSelecionada}
                            value={buscaCidade}
                            onChangeText={(t) => {
                                setBuscaCidade(t);
                                setMostrarSugestoes(true);
                            }}
                        />

                        {mostrarSugestoes && ufSelecionada && (
                            <View style={styles.listaSugestoes}>
                                {carregandoCidades ? (
                                    <ActivityIndicator color="#7F0000" />
                                ) : (
                                    listaCidades.map((item) => (
                                        <TouchableOpacity
                                            key={item.id}
                                            style={styles.itemCidade}
                                            onPress={() => selecionarCidade(item)}
                                        >
                                            <Text>{item.cidade}</Text>
                                        </TouchableOpacity>
                                    ))
                                )}
                            </View>
                        )}
                        <View style={{ height: 20 }} />
                    </ScrollView>

                    <View style={styles.areaBotoes}>
                        <TouchableOpacity style={[styles.btn, styles.btnCancelar]} onPress={fechar}>
                            <Text style={styles.txtBtnCancelar}>CANCELAR</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                styles.btn,
                                styles.btnSalvar,
                                // 4. Validação do botão salvar
                                (!(endereco?.cid_id || endereco?.idCidade)) && styles.btnDesativado
                            ]}
                            onPress={salvar}
                            disabled={!(endereco?.cid_id || endereco?.idCidade)}
                        >
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
        maxHeight: '85%',
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
    inputDesativado: {
        backgroundColor: '#EEE',
        borderColor: '#CCC'
    },
    pickerContainer: {
        borderWidth: 3,
        borderColor: '#7F0000',
        borderRadius: 15,
        marginBottom: 15,
        backgroundColor: '#FFF',
        overflow: 'hidden'
    },
    listaSugestoes: {
        borderWidth: 2,
        borderColor: '#7F0000',
        borderRadius: 10,
        marginTop: -10,
        marginBottom: 15,
        backgroundColor: '#FFF',
        maxHeight: 150
    },
    itemCidade: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#EEE'
    },
    areaBotoes: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
    btn: { padding: 12, borderRadius: 15, width: '48%', alignItems: 'center', borderWidth: 2 },
    btnDesativado: { backgroundColor: '#CCC', borderColor: '#999' },
    btnCancelar: { borderColor: '#7F0000' },
    btnSalvar: { backgroundColor: '#7F0000', borderColor: '#7F0000' },
    txtBtnCancelar: { color: '#7F0000', fontWeight: 'bold' },
    txtBtnSalvar: { color: '#FFF', fontWeight: 'bold' }
});

export default FormEndereco;