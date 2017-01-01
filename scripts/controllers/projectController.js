(function(module){
  var projectController = {};

  projectController.reveal = function() {
    $('.tab-content').hide();
    $('#portfolio').fadeIn();
  };

  module.projectController = projectController;
}(window));
