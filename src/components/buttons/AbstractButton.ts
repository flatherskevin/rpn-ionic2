export abstract class AbstractButton {
	abstract keyText: string;
	keyType: string;

	constructor() {
	}

	public abstract keyEvent();

}