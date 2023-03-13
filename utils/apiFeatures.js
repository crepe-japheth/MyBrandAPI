// class APIFeatures {
//     constructor(query, queryString) {
//         this.query = query
//         this.queryString = queryString
//     }

//     filter() {
//         //creating query object but excluding the limit, sort, page and fields
//         const queryObj = {...this.queryString }
//         const excludesFields = ['sort', 'page', 'limit', 'fields']
//         excludesFields.forEach(el => delete queryObj[el])

//         //creating query object with filter with conditions
//         let queryStr = JSON.stringify(queryObj)
//         queryStr = queryStr.replace(/\b(gte|gt|le|lte)\b/g, match => `$${match}`)

//         this.query = this.query.find(JSON.parse(queryStr))
//         return this

//     }

//     sort() {
//         //creating query object with sorting 
//         if (this.queryString.sort) {
//             const sortBy = this.queryString.sort.split(',').join(' ')
//             this.query = this.query.sort(sortBy)
//         } else {
//             this.query = this.query.sort('-publishedAt')
//         }
//         return this
//     }

//     limitFields() {
//         //fields limiting and projection
//         if (this.queryString.fields) {
//             const fields = this.queryString.fields.split(',').join(' ')
//             this.query = this.query.select(fields)
//         } else {
//             this.query = this.query.sort('-__v')
//         }
//         return this
//     }

//     paginate() {
//         //creating pagination and limiting

//         const page = this.queryString.page * 1
//         const limit = this.queryString.limit * 1
//         const skip = (page - 1) * limit

//         this.query = this.query.skip(skip).limit(limit)

//         return this
//     }
// }

// module.exports = APIFeatures