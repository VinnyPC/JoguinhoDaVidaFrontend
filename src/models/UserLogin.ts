export interface UserLogin {
    id: number;
    nome: string;
    email: string;
    senha: string;
    nivel_atual: number;
    pontos: number;
    token?: string | null;
}

export default UserLogin;