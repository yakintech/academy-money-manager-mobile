import { Operation } from "../../models/Operation";
import { createTable, getDBConnection } from "../../utils/sql/dbConfiguration";


export const saveOperation = async (operation: Operation) => {

    try {
        let db = await  getDBConnection();
    
        
        const insertQuery = `INSERT OR REPLACE INTO Operation(category, note, amount, type, addDate) values('${operation.category}', '${operation.note}', ${operation.amount}, '${operation.type}', '${operation.addDate}')`
  
        
        await db.executeSql(insertQuery);

        
    } catch (error) {
        console.log('Error', error);
        
    }

 

}


export const getAllOperations = async () : Promise<Operation[]> => {

    let db = await getDBConnection();

    const query = 'select id, type, amount, note, addDate from Operation';
    const result = await db.executeSql(query);


    var operations : Operation[] = []
    for (let i = 0; i < result[0].rows.length; i++) {

        var operation : Operation = {
            addDate: result[0].rows.item(i).addDate,
            amount: result[0].rows.item(i).amount,
            category: result[0].rows.item(i).category,
            note: result[0].rows.item(i).note,
            type: result[0].rows.item(i).type,
        }
        operations.push(operation);
    }

    return operations;
    
}


export const deleteAllOperations = async () => {


    let db = await  getDBConnection();

    const query = 'delete from Operation';
    const result = await db.executeSql(query);

}




