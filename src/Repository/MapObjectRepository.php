<?php

namespace App\Repository;

use App\Entity\MapObject;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * Class MapObjectRepository
 */
class MapObjectRepository extends ServiceEntityRepository
{
    /**
     * MapObjectRepository constructor.
     *
     * @param ManagerRegistry $registry
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MapObject::class);
    }

    /**
     * @return mixed
     */
    public function getMostSearchedCity()
    {
        return $this->createQueryBuilder('map_object')
            ->select('map_object.city', 'COUNT(map_object.city) as value_occurrence')
            ->groupBy('map_object.city')
            ->orderBy('value_occurrence', 'DESC')
            ->setMaxResults(1)
            ->getQuery()
            ->getSingleResult();
    }
}
