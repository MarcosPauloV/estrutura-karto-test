let __tenant = '';
let __usuario = '';

import Storage from './Storage';

export default class SessaoStorage extends Storage {
	// --------------------------------------
	// authorization
	// --------------------------------------
	public static get authorization(): string {
		//Pega o token do sessao storage
		return this.getItem('authorization', '');
	}

	public static set authorization(value: string) {
		//Seta o token no sessao storage
		this.setItem('authorization', value);
	}

	// --------------------------------------
	// tenant
	// --------------------------------------
	public static get tenant(): string {
		//Preciso analisar ainda
		if (!__tenant) {
			alert(
				'Não foi possível identificar o Tenant(Estabelecimento). Por favor, contate o suporte.',
			);
			return 'Tenant não identificado';
		}

		return this.getItem('tenant', '');
	}

	public static set tenant(value: string) {
		//Preciso analisar ainda
		__tenant = value;
		this.setItem('tenant', value);
	}

	public static getTenantAuth(): string {
		// Pega o token + tenant do sessao Storage
		return sessionStorage.getItem(`karto-${this.tenant}::authorization`) || '';
	}

	// --------------------------------------
	// clear
	// --------------------------------------
	public static clear() {
		SessaoStorage.handle.clear();
    SessaoStorage.authorization = '';
    SessaoStorage.tenant = '';

	}
}
