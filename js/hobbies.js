const hobbies = [{ name: 'Watching TV', lengthInYearsAtHobby: 30 }, { name: 'Reading', lengthInYearsAtHobby: 25 }, { name: 'Hanging out', lengthInYearsAtHobby: 31 }];


function showHobby(hobby) {
    console.log(`${hobby.name} - ${hobby.lengthInYearsAtHobby} years`)
}

for (let hobby of hobbies) {
    showHobby(hobby);
}
