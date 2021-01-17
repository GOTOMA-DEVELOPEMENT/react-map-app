<?php

namespace App\Service;

use App\Entity\MapObject;
use App\Repository\MapObjectRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * Class MapObjectService
 */
class MapObjectService
{
    private $mapObjectRepository;
    private $entityManager;

    /**
     * MapObjectService constructor.
     *
     * @param MapObjectRepository $mapObjectRepository
     * @param EntityManagerInterface $entityManager
     */
    public function __construct(MapObjectRepository $mapObjectRepository, EntityManagerInterface $entityManager)
    {
        $this->mapObjectRepository = $mapObjectRepository;
        $this->entityManager = $entityManager;
    }

    /**
     * @return array
     */
    public function prepareResponseData()
    {
        return [
            'mapObjects' => $this->mapObjectRepository->findBy([], ['createdAt' => 'DESC']),
            'mostSearchedCity'=> $this->mapObjectRepository->getMostSearchedCity(),
        ];
    }

    /**
     * @param MapObject $mapObject
     */
    public function deleteMapObject(MapObject $mapObject)
    {
        try {
            $this->entityManager->remove($mapObject);
            $this->entityManager->flush();
        } catch (\Exception $exception) {
            //error
        }
    }
}