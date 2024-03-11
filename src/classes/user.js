import { nanoid } from 'nanoid';

export default class User {
	#id;
	#userName;
	#password;

	constructor() {
		this.#id = User.#generateId();
		this.#userName = userName;
		this.#password = password;
	}

	get id() {
		return this.#id;
	}

	// set id(id) {
	//   this.#id = id;
	// }

	get userName() {
		return this.#userName;
	}

	toString() {
		return `ID: ${this.#id}. userName: ${this.#userName}.`;
	}

	toJSON() {
		return {
			id: this.#id,
			userName: this.#userName,
			password: this.#password,
		};
	}

	static #generateId() {
		return nanoid(10);
	}
}
