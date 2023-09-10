import Controller from '../Controller';
import Sessao from '../storage/SessaoStorage';

export default class AuthController extends Controller {
	//==> Realiza o Login e salva o token de acesso no Local Storage
	public async login(usuario: AuthUsuarioFinal) {
		try {
			const { data }: any = await this.rest.post('/auth/login', { ...usuario }); //Ao utilizar rest params podemos tentar criar uma rota generica de login

			Sessao.tenant = usuario.tenant || 'Tenant não definido'; //Armazena o tenant no sessao storage
			Sessao.authorization = 'Bearer ' + data.token; //Tenho que retornar uma response com o token

			//Alguma outra validação qualquer
			return data;
		} catch (error: any) {
			throw new Error('Erro ao logar! - AuthController ==> ' + error);
		}
	}

	//==> Realiza o Logout e remove o token de acesso do Local Storage
	public async logout() {
		try {
			await this.rest.post('/auth/logout');
			Sessao.clear();
		} catch (error: any) {
			throw new Error('Erro ao deslogar! - AuthController ==> ' + error);
		}
	}
}

interface AuthDefault {
	email: string;
	password: string;
}

interface AuthUsuarioFinal extends AuthDefault {
	telefone?: string;
	tenant?: string;
}
