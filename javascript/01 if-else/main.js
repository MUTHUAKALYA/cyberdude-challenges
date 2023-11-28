const FaceSerums = {
    HydratingSerum: "HyaluronicAcidSerum",
    AntiAgeingSerum: "Retinol",
    BrighteningSerum:" NiacinamideSerum",
    AcneFightingSerum: "SalicylicAcidSerum",
    ExfoliatingSerum: "ExfoliatingPeels",
    Antioxidants:" VitaminC"
}

let serum=prompt(" enter a type of serum you are looking for");
if(serum=="HydratingSerum"){
    console.log(FaceSerums.HydratingSerum)
}
else if (serum== "AntiAgeingSerum") {
    console.log(FaceSerums.AntiAgeingSerum)
} else if (serum=="BrighteningSerum") {
    console.log(FaceSerums.BrighteningSerum)
} else if (serum=="AcneFightingSerum") {
    console.log(FaceSerums.AcneFightingSerum)
} else if (serum=="ExfoliatingSerum") {
    console.log(FaceSerums.ExfoliatingSerum);
} else if (serum=="Antioxidants") {
    console.log(FaceSerums.Antioxidants)
} else {
    console.log("No results found")
}  
