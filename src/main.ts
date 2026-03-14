import { Plugin } from "obsidian";

export default class thing extends Plugin {
	async onload() {
		this.addRibbonIcon("dice", "Today", (evt: MouseEvent) => {});
	}
}
