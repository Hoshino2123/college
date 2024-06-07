import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';

export const config ={
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.pm.onevent',
    projectId: '6662d7520004803be7f6',
    databaseId: '6662da490007bf3ff42d',
    userCollectionId: '6662da7a00366d0dba8c',
    storageId: '6662dbdc003790467cae'
}

const client = new Client();

client
    .setEndpoint(config.endpoint)
    .setProject(config.projectId)
    .setPlatform(config.platform) 

    const account = new Account(client);
    const avatars = new Avatars(client);
    const databases = new Databases(client);

    //Regista o utilizador
export const createUser = async (email, password, username) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )
        if(!newAccount) throw Error;

        const avatarUrl = avatars.getInitials()

        await signIn(email, password);

        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar : avatarUrl
            }
        )

        return newUser;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}
    //Faz o login do user
export const signIn = async (email, password) =>{
    try {
        const session = await account.createEmailPasswordSession(email, password)

        return session;
    } catch (error) {
        throw new Error(error);
    
}

}
    //Vai buscar o user que tem o login feito
export const getCurrentUser = async () => {
    try{
        const currentAccount = await account.get();

        if(!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            config.databaseId,
            config.userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        )

        if(!currentUser) throw Error;

        return currentUser.documents[0];
    } catch (error){
        console.log(error);
    }
}
    //Faz o logout do user
export async function signOut() {
    try {
      const session = await account.deleteSession("current");
  
      return session;
    } catch (error) {
      throw new Error(error);
    }
  }

;