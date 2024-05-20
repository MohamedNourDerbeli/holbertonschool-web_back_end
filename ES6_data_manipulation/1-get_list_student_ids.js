export default function getListStudentIds(list) {
	if (list && Array.isArray(list)) {
		return list.map((item) => item.id);
	}
	return [];
}
