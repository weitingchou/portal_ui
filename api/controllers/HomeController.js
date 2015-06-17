/**
 * HomeController
 *
 * @description :: Server-side logic for managing indices
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


  /**
   * `HomeController.render()`
   */
  render: function (req, res) {
    return res.render('index', {
      user: JSON.stringify(req.user)
    });
  }
};

