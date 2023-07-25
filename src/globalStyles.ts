import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safearea: {
    backgroundColor: '#fff',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#397af8',
    marginBottom: 20,
    width: '100%',
    paddingVertical: 15,
  },
  text: {
    height: 24,
  },
  button: {
    backgroundColor: 'rgba(60, 160, 289, 1)',
    borderRadius: 3,
  },
  buttonContainer: {
    marginHorizontal: 50,
    marginVertical: 10,
  },
  divider: {
    height: 16,
    marginHorizontal: 16,
    marginVertical: 16,
  },
  headerLeftComponent: {
    icon: 'menu',
    color: '#fff',
  },
  headerLeftComponentLeftIcon: {
    marginLeft: 10,
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },
  subheaderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
