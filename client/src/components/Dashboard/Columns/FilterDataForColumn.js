import patientData from "../../../store";

const ModulesInColumnn = [
  "Warnsymptome & Risikofaktore",
  "Medikamente & Allergien",
  "Lebensweise & BMI",
  "Symptomspezifische Angaben"
]; 

const FilterDataForColumn = ModulesInColumn => {
  var DataForColumn = [];
  patientData.answers.filter(instance => {
    for (var i = 0; i < ModulesInColumn.length; i++) {
      if (instance.headline === ModulesInColumn[i]) {
        DataForColumn.push(instance);
      }
    }
  });
  return DataForColumn;
};

console.log(FilterDataForColumn(ModulesInColumnn));
export default FilterDataForColumn;
