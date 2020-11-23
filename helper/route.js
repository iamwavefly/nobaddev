export const response = (err, result, res, status) => {
    if(err) {
        res.status(404).json({
            status: "err",
            message: err.message
        })
    }
    res.status(status).json({
        status: "ok",
        count: result.length,
        message: result
    })
}