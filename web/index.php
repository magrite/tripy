<?php

require_once __DIR__.'/../vendor/autoload.php';

$app = new Silex\Application();
$app['debug'] = true;

// ===========================
// PROVIDERS
// ===========================
$app->register(new Silex\Provider\TwigServiceProvider(), array(
    'twig.path' => __DIR__.'/../views',
));

$app->register(new Silex\Provider\DoctrineServiceProvider(), array(
    'db.options' => array(
        'driver' => 'pdo_mysql',
        'host' => 'localhost',
        'dbname' => 'dieta',
        'user' => 'root',
        'password' => '',
    ),
));

$app->register(new Silex\Provider\VarDumperServiceProvider());

// ===========================

// ===========================
// ROUTES
// ===========================

$app->get('/hello', function () use ($app) {
    $sql = "SELECT * FROM recipe";
    $recipes = $app['db']->fetchAll($sql);

    return $app['twig']->render('hello.html.twig', array(
    ));
});

$app->get('/recipes', function() use ($app) {
    $sql = "SELECT * FROM recipe";
    $recipes = $app['db']->fetchAll($sql);

    return $app->json($recipes);
});

// ===========================

$app->run();
