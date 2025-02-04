import { addExerciseInfo, addExercises, updateExercise, updateExerciseInfo } from '../api';

export const saveExerciseInfo = async (newExerciseInfoData) => {
	const formInfoData = new FormData();

	formInfoData.append('type', newExerciseInfoData.type);
	formInfoData.append('exerciseId', newExerciseInfoData.exerciseId);
	if (typeof newExerciseInfoData.discription === 'object') {
		formInfoData.append('img', newExerciseInfoData.discription);
	} else {
		formInfoData.append('discription', newExerciseInfoData.discription);
	}
	if (newExerciseInfoData.oldImg) {
		formInfoData.append('oldImg', newExerciseInfoData.oldImg);
	}

	const savedExerciseInfo =
		newExerciseInfoData.id === undefined
			? await addExerciseInfo(formInfoData)
			: await updateExerciseInfo(newExerciseInfoData.id, formInfoData);

	if (savedExerciseInfo.message) {
		return {
			error: savedExerciseInfo.message,
			res: null,
		};
	}

	return {
		error: null,
		res: savedExerciseInfo[0],
	};
};
