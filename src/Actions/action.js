import helpers from "./actionWrapper";

let url = 'http://43.204.76.75/'

// API to get accessible profiles for a user
export async function getMatrimonialProfiles() {
    url += 'api/matrimony/12345678/profiles/'
    const result = await helpers.httpGet(url)
    return result;
}

// API to get all gautras

export const getAllGautras = async () => {
    url += '/api/gautras'
    const result = await helpers.httpGet(url)
    return result;
    }
  

// API to get family members whose profiles can be created
export async function getEligibleFamilyMembers(loggedInID) {
    url += `/api/matrimony/${loggedInID}/unmarried_members/`
    const result = await helpers.httpGet(url)
    return result;
}


// API to get a matrimonial profile object for a given graph node id
export async function getUserMatrimonialProfile() {
    url += 'api/matrimony/12345678/profiles/'
    const result = await helpers.httpGet(url)
    return result;
}

// API to get graph data for a user
export async function getGraphDataForUser() {
    url += 'api/matrimony/12345678/profiles/'
    const result = await helpers.httpGet(url)
    return result;
}

// API to get to get family contact person
export async function getFamilyContacts (){
    url +='api/matrimony/12345678/profiles/'
    const result = await helpers.httpGet(url)
    return result;
}

// API to edit family contact person detail
export async function postEditFamilyContact (){
    url +='api/matrimony/12345678/profiles/'
    const result = await helpers.httpGet(url)
    return result;
}

// API to add a person to family contacts
export async function postFamilyContacts (){
    url +='api/matrimony/12345678/profiles/'
    const result = await helpers.httpGet(url)
    return result;
}

// API to upload  photo and kundli
export async function postKundliPhoto (){
    url +='api/matrimony/12345678/profiles/'
    const result = await helpers.httpGet(url)
    return result;
}

// API to save profile as draft
export async function postDraftProfile (data){
    url +='api/matrimony/12345678/profiles/'
    const result = await helpers.httpPost(url, data)
    return result;
}

// API to publish profile
export async function postPublishProfile (data){
    url +='api/matrimony/12345678/profiles/'
    const result = await helpers.httpPost(url, data)
    return result;
}





