(function(module) {

  function Project (obj) {
    Object.keys(obj).map(function(prop){
      return this[prop] = obj[prop];
    }, this);
  };

  Project.allProjects = [];

  Project.prototype.toHtml = function(templateId) {
    var theTemplate = Handlebars.compile($(templateId).text());
    return theTemplate(this);
  };

  Project.loadAll = function(projectsData) {
    Project.allProjects = projectsData.map(function(projectObj) {
      return new Project(projectObj);
    });
  };

  /* Retrieve JSON data from either localStorage or source, process the data
    into separate objects, then call a function that renders the page */
  Project.retrieveAll = function(nextFunction) {
    if (localStorage.projectsData) {
      Project.loadAll(JSON.parse(localStorage.projectsData));
      nextFunction();
    } else {
      $.getJSON('data/projects.json', function(data){
        Project.loadAll(data);
        localStorage.projectsData = JSON.stringify(data);
        nextFunction();
      });
    }
  };

  module.Project = Project;
}(window));
