import SInfo from 'react-native-sensitive-info';

export const setStudentToken = async (token) => {
  try {
    const response = await SInfo.setItem('student_token', token, {
      sharedPreferencesName: 'mySharedPrefs',
      keychainService: 'myKeychain',
    });
    return response;
  } catch (error) {
    return error;
  }
};
