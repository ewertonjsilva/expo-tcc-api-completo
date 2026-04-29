import { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Alert
} from 'react-native';

import AlterarSenha from '../../componentes/alterarSenha';
import FormEndereco from '../../componentes/formEndereco';

import styles from './styles';

const PerfilUsuario = () => {
    // Dados baseados na tabela USUARIOS e CLIENTES
    const [usuario, setUsuario] = useState({
        usu_nome: 'Ewerton',
        usu_email: 'contato@ewerton.dev',
        usu_cpf: '12345678900',
        cli_cel: '18999999999',
        usu_dt_nasc: '28/04/1990' // Apenas leitura
    });

    // Lista de endereços baseada na tabela CLIENTE_ENDERECOS
    const [enderecos, setEnderecos] = useState([
        {
            end_id: 1,
            end_logradouro: 'Rua das Flores',
            end_num: '123',
            end_bairro: 'Centro',
            end_principal: 1
        },
        {
            end_id: 2,
            end_logradouro: 'Rua dos Animais',
            end_num: '995',
            end_bairro: 'Cercadinho',
            end_principal: 0
        },
    ]);

    // ESTADOS PARA O MODAL
    const [modalSenhaVisivel, setModalSenhaVisivel] = useState(false);
    const [modalVisivel, setModalVisivel] = useState(false);
    const [enderecoParaEdicao, setEnderecoParaEdicao] = useState(null);

    // FUNÇÃO PARA ABRIR (Serve para Novo ou Editar)
    const manipularModal = (endereco = null) => {
        // Se passar um endereço, ele carrega para editar. Se não, inicia vazio.
        setEnderecoParaEdicao(endereco || {
            end_logradouro: '',
            end_num: '',
            end_bairro: '',
            end_complemento: '',
            end_principal: 0
        });
        setModalVisivel(true);
    };

    const salvarEndereco = () => {
        // Aqui entraria sua lógica de INSERT ou UPDATE no SQL
        console.log("Salvando no banco:", enderecoParaEdicao);

        // Exemplo simples de atualização local
        if (enderecoParaEdicao.end_id) {
            setEnderecos(enderecos.map(e => e.end_id === enderecoParaEdicao.end_id ? enderecoParaEdicao : e));
        } else {
            setEnderecos([...enderecos, { ...enderecoParaEdicao, end_id: Math.random() }]);
        }

        setModalVisivel(false);
    };

    const salvarPerfil = () => Alert.alert("Sucesso", "Perfil atualizado!");
    const excluirEndereco = (id) => {
        setEnderecos(enderecos.filter(e => e.end_id !== id));
    };

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
                            />
                        </View>
                        <View style={{ flex: 1, marginLeft: 5 }}>
                            <Text style={styles.label}>Celular</Text>
                            <TextInput
                                style={styles.input}
                                keyboardType="phone-pad"
                                value={usuario.cli_cel}
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