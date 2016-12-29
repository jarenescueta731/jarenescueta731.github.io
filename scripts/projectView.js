(function(module){

  var projectView = {};

  projectView.pageRender = function() {
    Project.allProjects.forEach(function(projectObj) {
      $('#portfolio div.row').append(projectObj.toHtml('#project-template'));
    });
  };

  Project.retrieveAll(projectView.pageRender);

  module.projectView = projectView;
}(window));
