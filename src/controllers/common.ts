import { connect } from '../database';

export type QueryResult = {
    fieldCount: number;
    affectedRows: number;
    insertId: number;
    info: string;
    serverStatus: number;
    warningStatus: number;
}

export function makeResultMessage(action: string, result: QueryResult) {
    const queryResult = result.affectedRows > 0 ? 'completed' : 'failed';
    return { message: `${action} ${queryResult}` }
}

export async function excuteQuery<T>(query: string, params?: Array<T>) {
    const conn = await connect();
    try {
        const [rows, fields] = await conn.query(query, params);
        return rows;
    } catch (e) {
        return console.error(`Error occurred on Query: ${query}, Due to ${e}`)
    } finally {
        conn.end();
    }
}

