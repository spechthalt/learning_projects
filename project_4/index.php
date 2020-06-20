<!DOCTYPE html>
<html lang="en">

  <head>
    <title>Home</title>
    <?php
      // Go and get the <head> content for the page
      include('./partials/head.php')
    ?>
  </head>

  <body>
    <div class="body-wrap">

      <!-- This is a normal HTML comment -->
      <?php // This is a PHP comment since it's wrapped in PHP tags ?>
      <!-- The PHP comment won't show up in the code (check the inspector tools), but the HTML comments will -->

      <?php
        // Go and get the navigation for the page
        include('./partials/navigation.php')
      ?>

      <h1>Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel purus arcu. Etiam vulputate tempus neque in feugiat. Nullam risus quam, faucibus hendrerit fermentum sollicitudin, lacinia in ipsum. Praesent id justo mattis, aliquet quam et, scelerisque diam. Nulla et ex ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus quis augue non mauris auctor ornare. Maecenas nisi tellus, tempus in semper eget, porttitor gravida orci. Praesent nec ornare justo. Sed mollis tempor nibh eget lacinia. Proin eget erat tempor enim congue pretium id vitae urna. Integer varius urna dui, sit amet pretium lectus lobortis eleifend.
      </p>
      <p>
        Nunc et felis ut erat vulputate pellentesque a nec orci. In commodo, erat sodales sodales interdum, turpis mauris facilisis sem, sit amet consectetur justo libero at dolor. Aliquam a erat arcu. Aliquam faucibus luctus ligula eu ornare. Integer sed est lectus. Aliquam porta nisi eu malesuada ullamcorper. Duis dolor nulla, pharetra non nibh id, congue varius nunc. Proin nec volutpat erat. Pellentesque commodo varius pellentesque. Quisque viverra tempus dapibus. Integer ullamcorper suscipit urna, non faucibus nulla sodales sagittis. Curabitur aliquet risus nec est euismod porttitor. Aenean ut orci commodo, iaculis diam vitae, sagittis ligula.
      </p>

    </div>
  </body>
</html>
