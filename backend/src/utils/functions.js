function response(status, message, query, affected_rows, data) {
    return {
        status: status, 
        message: message, 
        query: query, 
        affected_rows: affected_rows, 
        timestamp: new Date().getTime(),
        data: data
    }
}

module.exports = {
    response
}