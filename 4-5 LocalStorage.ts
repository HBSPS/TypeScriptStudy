interface SStorage<T> {
	[key: string]: T
}

class LocalStorage<T> {
	private storage: SStorage<T> = {}
	set(key: string, value: T) {
		this.storage[key] = value;
	}
	remove(key: string) {
		delete this.storage[key]
	}
	get(key: string): T {
		return this.storage[key]
	}
	clear() {
		this.storage = {}
	}
}

const stringsStorage = new LocalStorage<string>()
stringsStorage.get("hello") // string을 넘겨주고 string을 받아온다
stringsStorage.set("bye", "a") // <T>를 <string>이라고 했으므로 value는 string

const booleanStorage = new LocalStorage<boolean>()
booleanStorage.get("xxx") // string을 넘겨주고 boolean을 받아온다
booleanStorage.set("yyy", true) // <T>를 <boolean>이라고 했으므로 value는 boolean