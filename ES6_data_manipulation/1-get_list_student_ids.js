export default function getListStudentIds(list) {
	// return list && Array.isArray(list) ? list.map((item) => item.id) : []
	if (list && Array.isArray(list)) {
		return list.map((item) => item.id);
	}
	return [];
}
