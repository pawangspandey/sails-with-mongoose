/**
 * StudentController
 *
 * @description :: Server-side logic for managing students
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
		get : function(req,res){
			Student.find().lean().exec(function(err,docs){
				if(err){
				  res.serverError(err);
				}else{
						res.ok(docs);
				}
			});
		},

		create : function(req,res){
			Student.create({
				name : req.param('name'),
				address : req.param('address')
			},function(err,docs){
				if(err){
				  res.serverError(err);
				}else{
						res.ok(docs);
				}
			})
		}
};
