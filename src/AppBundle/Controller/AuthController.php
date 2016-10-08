<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends FOSRestController
{
    /**
     * @Rest\View
     */
    public function getAuthUserAction(Request $request)
    {
        $user = $this->get('security.token_storage')->getToken()->getUser();
        /* @var $user \AppBundle\Entity\User */
        return ['user' => $user, 'roles' => $user->getRoles()];
    }
}
