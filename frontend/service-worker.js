self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("estudadores-cache").then(cache => {
      return cache.addAll([
        "/",                // raiz
        "/index.html",      // principal
        "/home.html",
        "/login.html",
        "/signup.html",
        "/task.html",
        "/lessons.html",
        "/finalTask.html",
        "/static/img/logo.png",
        "/static/css/global.css",                // importante: estilos
        "/static/bootstrap/bootstrap.min.css",   // bootstrap
        "/static/js/darkMode.js",                // scripts essenciais
        "/static/js/accessibility.js"
      ]);
    })
  );
});