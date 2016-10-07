<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use FOS\RestBundle\Controller\FOSRestController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends FOSRestController
{
    /**
     * @Route("/", name="homepage")
     */
    public function getTestAction(Request $request)
    {
        $response = new Response();
        $response->setContent('Test');
        return $response;
    }
}
