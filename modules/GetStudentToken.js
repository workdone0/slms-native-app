import SInfo from 'react-native-sensitive-info';

export const GetStudentToken = async () => {
  const response = await SInfo.getItem('student_token', {
    sharedPreferencesName: 'mySharedPrefs',
    keychainService: 'myKeychain',
  });
  return response;
};
