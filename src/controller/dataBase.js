let listDB = [
	{
		id: 0,
		name: "admin",
		password: "admin",
		isAdmin: true,
		note: "Una note del admin",
	},
	{
		id: 1,
		name: "user",
		password: "user",
		isAdmin: false,
		note: "Una note del usuario base",
	},
];

let idCod = listDB.length;

// Crear un nuevo usuario
export function create(user) {
	user.id = idCod++;
	listDB.push(user);
	return user;
}

// Buscar un usuario por nombre
export function findOne(name) {
	const user = listDB.find((user) => user.name === name);
	return user;
}

// Buscar un usuario por id
export function findOneById(id) {
	const user = listDB.find((user) => user.id === id);
	return user;
}

// Editar un usuario por ID
export function update(id, note) {
	const index = listDB.findIndex((user) => user.id === id);
	if (index !== -1) {
		listDB[index].note = note;
		return listDB[index];
	}
	return null;
}

// Eliminar un usuario por ID
export function remove(id) {
	const index = listDB.findIndex((user) => user.id === id);
	if (index !== -1) {
		const deletedUser = listDB.splice(index, 1);
		return deletedUser[0];
	}
	return null;
}

// Obtener todos los usuarios
export function findAll() {
	return listDB;
}

export default { create, findOne, findOneById, update, remove, findAll };
