import { createContext, useState, useContext } from 'react';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [usuario, setUsuario] = useState(null);

    // Função centralizada para realizar o logoff
    function logOff() {
        setUsuario(null); // Limpa o estado global

        // Futuramente: AsyncStorage.removeItem('@app:usuario');
    }

    return (
        // Exportamos o logOff junto com o usuario e setUsuario
        <AuthContext.Provider value={{ usuario, setUsuario, logOff }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);