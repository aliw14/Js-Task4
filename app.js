const employeeDetails = {
  fullName: "Rafet Rzayev",
  position: "Developer",
  yearsOfExperience: 6,
  skills: ["Js", "HTML", "CSS", "React", "ReactNative"],
  contact: {
    email: "rafetrzayev@gmail.com",
    phone: "0509996666",
  },
};

// Add new property
delete employeeDetails.contact.email;
employeeDetails["department"] = ["Development"];

console.log(employeeDetails);

// Renaiming of object's key with destructuring
let { fullName, ...rest } = employeeDetails;
employeeDetails["employeeName"] = fullName;
delete employeeDetails.fullName;

console.log(employeeDetails, rest);

// Handling Arrays of objects

const projectScores = [
  { firstProject: { projectId: "213", score: "10" } },
  { secondProject: { projectId: "123", score: "20" } },
];
console.log(projectScores[0]);

// Merging Objects

const PersonalInfo = {
  homeAdress: "NC 129",
  emergencyContact: "0128187287",
  maritalStatus: "Married",
};

const completeEmployeeProfile = { ...employeeDetails, ...PersonalInfo };
console.log(completeEmployeeProfile);
