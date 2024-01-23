// Nouvelle version de la fonction deleteUserFromData avec une complexité en O(n^3) plus faible, cependant elle reste bien trop élevée pour être utilisée dans le code final, lors de la migration de la BD un travail devra être fait dessus
// TODO : 
// - Trouver une solution pour réduire la complexité de la fonction deleteUserFromData

export function deleteUserFromData(userList, data) {
    if (!Array.isArray(userList)) throw new Error('userList devrait être un array');
    if (typeof data !== 'object' || data === null) throw new Error("Mauvais type d'objet");
    const updatedData = { ...data };
    for (const userID of userList) {
        for (const projectKey in updatedData) {
            const project = updatedData[projectKey];           
            for (const choixKey in project) {
                const choix = project[choixKey];
                for (const roleKey in choix) {
                    const role = choix[roleKey];
                    if (!Array.isArray(role)) throw new Error(`Invalid role data in project: ${projectKey}, choice: ${choixKey}, role: ${roleKey}`);
                    updatedData[projectKey][choixKey][roleKey] = role.filter(user => user !== userID);
                }
            }
        }
    }

    return updatedData;
}



// Ancienne version de la fonction deleteUserFromData avec une complexité en O(n^4) trop élevée 

/* export function deleteUserFromData(userList, data) {
    var list_choix = ['Choix 1', 'Choix 2', 'Choix 3'];
    for (const userIndex in userList) {
        const userID = userList[userIndex]
        for (const project in data) {
            for (const choix in list_choix) {
                for (const role in data[project][list_choix[choix]]) {
                    let item_to_remove = [];
                    for (const user in data[project][list_choix[choix]][role]) {
                        if (data[project][list_choix[choix]][role][user] == userID) {
                            item_to_remove.push(user);
                        }
                    }
                    for (i = item_to_remove.length - 1; i >= 0; i--) {
                        data[project][list_choix[choix]][role].splice(item_to_remove[i], 1);
                    }
                }
            }
        }
    }
    return data
} */