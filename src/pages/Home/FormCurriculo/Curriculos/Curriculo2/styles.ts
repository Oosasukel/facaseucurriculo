import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    paddingVertical: 40,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 40,
    backgroundColor: "#fff",
  },

  marginTop: {
    position: 'absolute',
    height: 40,
    width: '100%',
    backgroundColor: "#fff",
  },
  marginBottom: {
    position: 'absolute',
    height: 40,
    width: '100%',
    bottom: 0,
    backgroundColor: "#fff",
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nameContainer: {
    width: '63%'
  },
  photoContainer: {
  },
  photo: {
    objectFit: "cover",
    width: 180,
    height: 180,
    borderRadius: 50,
  },
  name: {
    paddingVertical: 15,
    fontSize: 42,
    color: '#222',
  },
  jobTitle: {
    fontSize: 24,
    paddingHorizontal: 16,
    paddingVertical: 4,
    color: '#222',
    backgroundColor: "#80dfff",
    alignSelf: "flex-start",
  },
  headerDivider: {
    width: '100%',
    marginVertical: 20,
    backgroundColor: "#80dfff",
    height: 2,
  },
  lanesContainer: {
    flexDirection: "row",
    flex: 1,
  },
  lane1: {
    width: '63%',
    paddingRight: 20,
  },
  lane2: {
    width: '37%',
  },

  infoTitle: {
    fontSize: 18,
    color: '#222',
  },
  softDivider: {
    width: '100%',
    height: 1,
    backgroundColor: '#00ace6',
    marginVertical: 8,
  },
  descriptionText: {
    marginBottom: 28,
    fontSize: 12,
    color: '#333',
    textAlign: 'justify',
  },

  escolaridadeItems: {
    marginBottom: 20,
  },
  escolaridadeItemContainer: {
    marginBottom: 8,
  },
  escolaridadeUniversidade: {
    fontSize: 14,
    marginBottom: 4,
  },
  escolaridadeDate: {
    fontSize: 12,
    color: '#333',
    marginBottom: 4,
  },
  escolaridadeCourse: {
    fontSize: 14,
    marginBottom: 4,
  },

  jobDescription: {
    fontSize: 12,
    marginBottom: 8,
    color: '#333',
  },

  personalInfoContainer: {
    marginBottom: 20,
  },
  personalItem: {

  },
  personalLabel: {
    fontSize: 12,
    marginBottom: 4,
  },
  personalText: {
    fontSize: 12,
    color: '#333',
  },

  habilidadeCategory: {
    marginBottom: 8,
  },
  habilidadeCategoryTitle: {
    fontSize: 14,
    marginBottom: 4,
  },
  habilidadeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
  habilidadeIcon: {
    fontSize: 12,
    marginHorizontal: 8,
    color: '#333',
  },
  habilidadeText: {
    fontSize: 12,
    color: '#333',
  }
});

export default styles;