class Sheets {
    constructor(gapiClient, sheet_id = '') {
        if (!gapiClient || !sheet_id) throw new Error('cannot initial a sheet without a gapi client or sheet_id')
        this.client = gapiClient
        this.sheet_id = sheet_id
    }

    create(sheet_ops) {
        return new Promise((resolve, reject) => {
            const req = this.client.sheets.spreadsheets.create({}, sheet_ops)
            req.then(res => resolve(res.result), reason => reject(reason.result.error))
        })
    }

    getSheet(ops = {}) {
        return new Promise((resolve, reject) => {
            const req = this.client.sheets.spreadsheets.get({ ...ops, ...{spreadsheetId: this.sheet_id }})
            req.then(res => resolve(res.result), reason => reject(reason.result.error))
        })
    }

    get(ops = {}) {
        return new Promise((resolve, reject) => {
            const req = this.client.sheets.spreadsheets.values.get({ ...ops, ...{spreadsheetId: this.sheet_id }})
            req.then(res => resolve(res.result), reason => reject(reason.result.error))
        })
    }

    append(data_arr, ops = {}) {
        ops.range = ops.range || 'A1'
        ops.valueInputOption = ops.valueInputOption || 'RAW'

        data_arr = data_arr.map(list => (Array.isArray(list)) ? list : [list])
        
        const req_body = {
            values: data_arr,
            majorDimension: ops.majorDimension || 'ROWS'
        }

        return new Promise((resolve, reject) => {
            const req = this.client.sheets.spreadsheets.values.append({ ...ops, ...{spreadsheetId: this.sheet_id }}, req_body)
            req.then(res => resolve(res.result), reason => reject(reason.result.error))
        })
    }

}

export default Sheets