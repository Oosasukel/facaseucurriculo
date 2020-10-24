import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
  },
  sectionBlack: {
    paddingTop: 30,
    paddingHorizontal: 20,
    width: 230,

    backgroundColor: "#151515",
    
    alignItems: "center"
  },

  photoContainer: {
    width: 160,
    height: 160,

    padding: 3,
    marginBottom: 30,

    borderRadius: 80,
    borderWidth: 2,
    borderColor: "#ddd",
  },
  photo: {
    objectFit: "cover",
    borderRadius: 80,
    borderWidth: 1,
    borderColor: "#555",
  },

  contactContainer: {
    width: "100%",
    marginBottom: 20,
  },
  contactItem: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  contactIconContainer: {
    height: 24,
    width: 24,
    padding: 7,
    borderRadius: 14,
    marginRight: 14,

    backgroundColor: "#333"
  },
  contactIcon: {
    height: 10
  },
  contactText: {
    maxWidth: 160,
    fontSize: 10,
    color: "#ddd"
  },

  addressContainer: {
    flexWrap: "wrap"
  },

  skillsContainer: {
    width: "100%",
  },
  skillsTitle: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  skillsTitleText: {
    color: "#eee",
    fontSize: 16,
  },
  skillsTitleDivider: {
    flex: 1,
    height: 2,
    marginLeft: 20,
    backgroundColor: "#555",
  },

  skillsCategory: {
    
  },
  skillsCategoryTitle: {
    fontSize: 16,
    color: "#ddd",
    marginBottom: 10,
  },
  skillsCategoryItems: {
    marginBottom: 10,
  },
  skillItem: {
    marginBottom: 10,
  },
  skillItemText: {
    fontSize: 10,
    color: "#ddd",
    marginBottom: 4,
  },
  skillItemProgress: {
    height: 10,
    backgroundColor: "#555",
  },
  skillItemProgressValue: {
    height: 10,
    backgroundColor: "#ccc",
  },



  
  sectionWhite: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 20,
  },

  nameContainer: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  firstName: {
    fontSize: 38,
    marginRight: 10,

    color: "#666"
  },
  lastName: {
    fontSize: 38,

    color: "#151515"
  },
  jobText: {
    fontSize: 16,
    paddingTop: 5,
    color: "#151515"
  },
  summaryText: {
    fontSize: 10,
    paddingTop: 20,
    color: "#666"
  },

  experiencesContainer: {
    marginTop: 30,
  },
  experiencesHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  experiencesHeaderIconContainer: {
    height: 32,
    width: 32,
    padding: 7,
    borderRadius: 16,
    marginRight: 10,

    backgroundColor: "#151515"
  },
  experiencesHeaderIcon: {
    height: 18
  },
  experiencesHeaderTitle: {
    fontSize: 16,
    color: "#151515",
    marginRight: 30,
  },
  experiencesHeaderDivider: {
    flex: 1,
    height: 2,
    backgroundColor: "#151515",
  },

  experienceItemContainer: {
    flexDirection: "row",
    marginBottom: 15,
  },
  experienceItemRoleContainer: {
    width: 100,
    marginRight: 10,
  },
  courseItemRoleContainer: {
    width: 150,
    marginRight: 10,
  },
  experienceItemRole: {
    fontSize: 12,
    color: "#151515",
    marginBottom: 2,
  },
  experienceItemTime: {
    fontSize: 10,
    color: "#666",
  },
  experienceItemCompanyContainer: {
    flex: 1,
  },
  experienceItemCompanyTitle: {
    fontSize: 12,
    color: "#151515",
    marginBottom: 2,
  },
  experienceItemCompanySummary: {
    fontSize: 10,
    color: "#666",
    marginBottom: 2,
  },

});


export default styles;