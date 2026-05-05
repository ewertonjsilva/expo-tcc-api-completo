import { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Alert,
    ActivityIndicator // Importado para feedback visual de carregamento
} from 'react-native';

import AlterarSenha from '../../componentes/alterarSenha';
import FormEndereco from '../../componentes/formEndereco';

import api from '../../services/api';

import styles from './styles';

const PerfilUsuario = () => {
    const idUsuario = 4;

    // 1. Inicializado com strings vazias para evitar erro de "Uncontrolled Input"
    const [usuario, setUsuario] = useState({
        usu_nome: '',
        usu_email: '',
        usu_cpf: '',
        cli_cel: '',
        usu_dt_nasc: ''
    });

    const [enderecos, setEnderecos] = useState([]);

    // Estado para controlar a tela de carregamento
    const [loading, setLoading] = useState(true);

    const loadUsuario = async () => {
        try {
            // 2. Requisição para a API (ajuste para /usuarios se a sua rota não for /clientes)
            const response = await api.get(`/clientes?id=${idUsuario}`);

            // Verifica se a API retornou sucesso e se o array tem dados
            if (response.data.sucesso && response.data.dados.length > 0) {
                setUsuario(response.data.dados[0]);
            } else {
                Alert.alert('Aviso', 'Nenhum dado encontrado para este usuário.');
            }
        } catch (error) {
            // 3. Corrigida a mensagem de erro (estava 'produtos')
            Alert.alert('Erro', 'Não foi possível carregar os dados do usuário.');
        } finally {
            setLoading(false); // Desliga o ícone de carregamento independente de sucesso ou erro
        }
    };

    const loadEnderecos = async () => {
        try {
            const res = await api.get(`/endereco-cliente?id=${idUsuario}`);
            if (res.data.sucesso) {
                setEnderecos(res.data.dados);
            }
        } catch (error) {
            console.error("Erro ao carregar endereços", error);
        }
    };

    useEffect(() => {
        loadUsuario();
        loadEnderecos();
    }, []);


    // ESTADOS PARA O MODAL
    const [modalSenhaVisivel, setModalSenhaVisivel] = useState(false);
    const [modalVisivel, setModalVisivel] = useState(false);
    const [enderecoParaEdicao, setEnderecoParaEdicao] = useState(null);

    // FUNÇÃO PARA ABRIR (Serve para Novo ou Editar)
    const manipularModal = (endereco = null) => {
        setEnderecoParaEdicao(endereco || {
            logradouro: '',
            num: '',
            bairro: '',
            complemento: '',
            idCidade: null,
            principal: 0
        });
        setModalVisivel(true);
    };

    const salvarEndereco = async () => {
        try {
            let res;
            if (enderecoParaEdicao.end_id) {
                // EDIÇÃO (PUT) - Enviamos o ID na URL e os dados mapeados no body
                res = await api.put(`/enderecos/${enderecoParaEdicao.end_id}`, {
                    logradouro: enderecoParaEdicao.end_logradouro || enderecoParaEdicao.logradouro,
                    num: enderecoParaEdicao.end_num || enderecoParaEdicao.num,
                    bairro: enderecoParaEdicao.end_bairro || enderecoParaEdicao.bairro,
                    complemento: enderecoParaEdicao.end_complemento || enderecoParaEdicao.complemento,
                    idCidade: enderecoParaEdicao.cid_id || enderecoParaEdicao.idCidade,
                    principal: enderecoParaEdicao.end_principal || enderecoParaEdicao.principal
                });
            } else {
                // CADASTRO (POST)
                res = await api.post('/enderecos', {
                    ...enderecoParaEdicao,
                    idUsuario: idUsuario
                });
            }

            if (res.data.sucesso) {
                Alert.alert("Sucesso", res.data.mensagem);
                loadEnderecos(); // Recarrega a lista do banco
                setModalVisivel(false);
            }
        } catch (error) {
            Alert.alert("Erro", "Não foi possível salvar o endereço.");
            console.error(error);
        }
    };

    const salvarPerfil = () => Alert.alert("Sucesso", "Perfil atualizado!");

    const excluirEndereco = (id) => {
        setEnderecos(enderecos.filter(e => e.end_id !== id));
    };

    // 4. Se estiver carregando, mostra o spinner antes de renderizar os inputs
    if (loading) {
        return (
            <View style={[styles.main, { justifyContent: 'center', alignItems: 'center' }]}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <ScrollView style={styles.main}>
            <View style={styles.container}>
                <Text style={styles.titulo}>Meu Perfil</Text>

                {/* Seção de Dados do Usuário */}
                <View style={styles.section}>
                    <Text style={styles.label}>Nome Completo</Text>
                    <TextInput
                        style={styles.input}
                        value={usuario.usu_nome}
                        onChangeText={(t) => setUsuario({ ...usuario, usu_nome: t })}
                    />

                    <Text style={styles.label}>E-mail</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="email-address"
                        value={usuario.usu_email}
                        onChangeText={(t) => setUsuario({ ...usuario, usu_email: t })}
                    />

                    <View style={styles.row}>
                        <View style={{ flex: 1, marginRight: 5 }}>
                            <Text style={styles.label}>CPF</Text>
                            <TextInput
                                style={styles.input}
                                keyboardType="numeric"
                                value={usuario.usu_cpf}
                                editable={false} // Sugestão: CPF geralmente não deve ser editável após cadastro
                            />
                        </View>
                        <View style={{ flex: 1, marginLeft: 5 }}>
                            <Text style={styles.label}>Celular</Text>
                            <TextInput
                                style={styles.input}
                                keyboardType="phone-pad"
                                value={usuario.cli_cel}
                                onChangeText={(t) => setUsuario({ ...usuario, cli_cel: t })}
                            />
                        </View>
                    </View>

                    <Text style={styles.label}>Data de Nascimento (Não editável)</Text>
                    <View style={[styles.input, styles.inputDisabled]}>
                        <Text style={styles.txtDisabled}>{usuario.usu_dt_nasc}</Text>
                    </View>

                    <TouchableOpacity style={styles.btnPrincipal} onPress={salvarPerfil}>
                        <Text style={styles.txtBtnPrincipal}>ATUALIZAR DADOS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.btnSecundario, { borderStyle: 'solid', marginTop: 20 }]}
                        onPress={() => setModalSenhaVisivel(true)}
                    >
                        <Text style={styles.txtBtnSecundario}>ALTERAR MINHA SENHA</Text>
                    </TouchableOpacity>
                </View>

                {/* Seção de Endereços */}
                <Text style={styles.titulo}>Endereços</Text>

                {enderecos.map((item) => (
                    <View key={item.end_id} style={styles.cardEndereco}>
                        <View>
                            <Text style={styles.txtLogradouro}>{item.end_logradouro}, {item.end_num}</Text>
                            <Text style={styles.txtBairro}>{item.end_bairro}</Text>
                            {item.end_principal === 1 && <Text style={styles.tagPrincipal}>Principal</Text>}
                        </View>

                        <View style={styles.areaAcoes}>
                            <TouchableOpacity onPress={() => manipularModal(item)}>
                                <Text style={styles.btnAcao}>Editar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => excluirEndereco(item.end_id)}>
                                <Text style={[styles.btnAcao, { color: '#7F0000', fontWeight: 'bold' }]}>Excluir</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}

                <TouchableOpacity style={styles.btnSecundario} onPress={() => manipularModal()}>
                    <Text style={styles.txtBtnSecundario}>+ NOVO ENDEREÇO</Text>
                </TouchableOpacity>

                {/* Espaçamento final para Scroll */}
                <View style={{ height: 40 }} />
            </View>

            {/* CHAMADA DO COMPONENTE SEPARADO */}
            <FormEndereco
                visivel={modalVisivel}
                fechar={() => setModalVisivel(false)}
                endereco={enderecoParaEdicao}
                setEndereco={setEnderecoParaEdicao}
                salvar={salvarEndereco}
            />

            {/* Componente Modal de Senha */}
            <AlterarSenha
                visivel={modalSenhaVisivel}
                fechar={() => setModalSenhaVisivel(false)}
            />
        </ScrollView>
    );
};

export default PerfilUsuario;