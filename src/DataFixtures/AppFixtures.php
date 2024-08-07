<?php

namespace App\DataFixtures;

use App\Entity\Task;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $descriptions = [
            'Acheter du pain',
            'Promener le chien',
            'Faire du sport',
        ];

        foreach ($descriptions as $description) {
            $task = new Task();
            $task->setDescription($description);
            $manager->persist($task);
        }

        $manager->flush();
    }
}
