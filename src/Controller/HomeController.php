<?php

namespace App\Controller;

use App\Repository\TaskRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(TaskRepository $taskRepository, SerializerInterface $serializer): Response
    {
        $tasks = $taskRepository->findAll();

        return $this->render('home/index.html.twig', [
            'tasks' => $serializer->serialize($tasks, 'json')
        ]);
    }
}
