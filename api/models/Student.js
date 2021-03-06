/**
* Student.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

// ...
module.exports = {

  schema: {
    name : { type : String, required: true},
    address : { type : String , required: true},
  },



  /**
   * constructSchema()
   *
   * Note that this function must be synchronous!
   *
   * @param  {Dictionary} schemaDefinedAbove  [the raw schema defined above, or `{}` if no schema was provided]
   * @param  {SailsApp} sails                 [just in case you have globals disabled, this way you always have access to `sails`]
   * @return {MongooseSchema}
   */
  constructSchema: function (schemaDefinedAbove, sails) {
    // e.g. we might want to pass in a second argument to the schema constructor
    var newSchema = new sails.mongoose.Schema(schemaDefinedAbove, { autoIndex: false });

    // Or we might want to define an instance method:
    newSchema.method('meow', function () {
      console.log('meeeeeoooooooooooow');
    });

    // Or a static ("class") method:
    newSchema.static('findByName', function (name, callback) {
      return this.find({ name: name }, callback);
    });

    // Regardless, you must return the instantiated Schema instance.
    return newSchema;
  }

};
